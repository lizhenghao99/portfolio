import { Heading, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import NavButton from '../navs/NavButton';

const Logo = (props) => {
    const color = useColorModeValue('brand.900', 'brand.50');
    return (
        <NextLink href={'/'} passHref>
            <NavButton px={['0.5rem', '0.5rem', '0.5rem', '2rem']}>
                <Heading color={color}>
                    2StackStudio
                </Heading>
            </NavButton>
        </NextLink>
    );
};

export default Logo;
