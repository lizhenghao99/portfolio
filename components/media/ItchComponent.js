import { Center } from '@chakra-ui/react';

const ItchComponent = (props) => {
    const widget = (
        <iframe frameBorder="0"
                src="https://itch.io/embed/727918?linkback=true&amp;border_width=0&amp;bg_color=F8F4ED&amp;fg_color=1F2623&amp;link_color=83CBAC&amp;border_color=4a514e"
                width="550" height="165">
            <a href="https://2stackstudio.itch.io/project-tower">Project Tower |宝塔计划 by
                2stackstudio
            </a>
        </iframe>
    );
    return (
        <Center {...props}>
            {widget}
        </Center>
    );
};

export default ItchComponent;