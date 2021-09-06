import { Center, Skeleton } from '@chakra-ui/react';
import { useState } from 'react';

const ItchComponent = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const widget = (
        <iframe
            onLoad={() => setIsLoaded(true)}
            frameBorder="0"
            src="https://itch.io/embed/727918?linkback=true&amp;border_width=0&amp;bg_color=F8F4ED&amp;fg_color=1F2623&amp;link_color=83CBAC&amp;border_color=4a514e"
            width="550"
            height="165">
            <a href="https://2stackstudio.itch.io/project-tower">Project Tower |宝塔计划 by
                2stackstudio
            </a>
        </iframe>
    );

    return (
        <Center {...props}>
            <Skeleton isLoaded={isLoaded} fadeDuration={2} startColor={'gray.50'} endColor={'gray.300'}>
                {widget}
            </Skeleton>
        </Center>
    )
        ;
};

export default ItchComponent;