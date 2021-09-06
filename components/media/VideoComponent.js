import { AspectRatio, Skeleton } from '@chakra-ui/react';
import { useState } from 'react';

const VideoComponent = (props) => {
    const { ratio, src, ...rest } = props;
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <Skeleton isLoaded={isLoaded} fadeDuration={2} startColor={'gray.50'} endColor={'gray.300'}>
            <AspectRatio
                ratio={ratio}
                {...rest}
            >
                <iframe
                    onLoad={() => setIsLoaded(true)}
                    src={src}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            </AspectRatio>
        </Skeleton>
    );
};

export default VideoComponent;