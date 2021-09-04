import { Center } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const TextBlock = (props) => {
    const VStackNoSSR = dynamic(
        () => (import('@chakra-ui/react').then((obj) => obj.VStack)),
        { ssr: false },
    );
    return (
        <Center>
            <VStackNoSSR
                mx={['2rem', '5rem']}
                my={['2rem', '5rem']}
                maxW={'60rem'}
                align={'left'}
                {...props}>
                {props.children}
            </VStackNoSSR>
        </Center>
    );
};

export default TextBlock;