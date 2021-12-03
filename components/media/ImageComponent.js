import { AspectRatio } from '@chakra-ui/react';
import NextImage from 'next/image';

const ImageComponent = (props) => {
    const { ratio, src, width, height, quality, priority, placeHolder, ...rest } = props;
    return (
        <AspectRatio
            ratio={ratio}
            {...rest}
        >
            <NextImage
                src={src}
                quality={quality}
                layout={'fill'}
                objectFit={'cover'}
                placeholder={placeHolder ? placeHolder : 'blur'}
                priority={priority}
            />
        </AspectRatio>
    );
};

export default ImageComponent;