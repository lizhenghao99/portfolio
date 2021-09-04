import { AspectRatio } from '@chakra-ui/react';

const VideoComponent = (props) => {
    const { ratio, src, ...rest } = props;
    return (
        <AspectRatio
            ratio={ratio}
            {...rest}
        >
            <iframe
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </AspectRatio>
    );
};

export default VideoComponent;