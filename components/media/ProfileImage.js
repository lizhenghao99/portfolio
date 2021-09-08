import { AspectRatio, Img } from '@chakra-ui/react';
import NextImage from 'next/image';

const ProfileImage = (props) => {
    const { ratio, src, width, height, quality, borderRadius, ...rest } = props;
    return (
        <AspectRatio
            ratio={ratio}
            {...rest}
        >
            <Img
                borderRadius={borderRadius}
                as={NextImage}
                src={src}
                quality={quality}
                layout={'fill'}
                objectFit={'cover'}
                placeholder={'blur'}
            />
        </AspectRatio>
    );
};

export default ProfileImage;