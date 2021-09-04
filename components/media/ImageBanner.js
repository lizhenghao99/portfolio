import { AspectRatio } from '@chakra-ui/react';
import NextImage from 'next/image';

const ImageBanner = (props) => {
    return (
        <AspectRatio
            w={'100%'}
            ratio={props.ratio}
            sx={{ filter: `brightness(${props.brightness})` }}
        >
            <NextImage
                src={props.src}
                width={props.width}
                height={props.height}
                quality={props.quality}
                layout={'fill'}
                objectFit={'cover'}
                placeholder={'blur'}
            />
        </AspectRatio>
    );
};

export default ImageBanner;