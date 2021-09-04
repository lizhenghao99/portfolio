import { Center } from '@chakra-ui/react';
import StackComponent from './StackComponent';

const TextBlock = (props) => {
    return (
        <Center>
            <StackComponent
                mx={['2rem', '5rem']}
                my={['2rem', '5rem']}
                maxW={'60rem'}
                align={'left'}
                {...props}
            >
                {props.children}
            </StackComponent>
        </Center>
    );
};

export default TextBlock;