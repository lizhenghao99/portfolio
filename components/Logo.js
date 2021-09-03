import { Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import NavButton from './NavButton';

const Logo = (props) => {
    return (
        <NextLink href={'/'} passHref>
            <NavButton>
                <Heading color={'brand.900'}>
                    2StackStudio
                </Heading>
            </NavButton>
        </NextLink>
    );
};

export default Logo;
