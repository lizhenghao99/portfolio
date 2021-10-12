import { AspectRatio } from '@chakra-ui/react';
import NextImage from 'next/image';

const ImageBanner = (props) => {
    const { ratio, brightness, src, quality } = props;
    return (
        <AspectRatio
            w={'100%'}
            ratio={ratio}
            sx={{ filter: `brightness(${brightness})` }}
        >
            <NextImage
                src={src}
                quality={quality}
                layout={'fill'}
                objectFit={'cover'}
                placeholder={'blur'}
                priority={true}
            />
        </AspectRatio>
    );
};

export default ImageBanner;