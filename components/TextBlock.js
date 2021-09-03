import { Box, Center } from '@chakra-ui/react';

const TextBlock = (props) => {
    return (
        <Center>
            <Box mx={['2rem', '5rem']} my={['2rem', '5rem']} maxW={'60rem'}>
                {props.children}
            </Box>
        </Center>
    );
};

export default TextBlock;