import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import ButtonText from './ButtonText';

const NavButton = (props) => {
    return (
        <NextLink href={props.href}>
            <Button
                size={'lg'}
                minW={'11rem'}
                color={'brand.800'}
                colorScheme={'brand'}
                variant={'ghost'}
                _focus={{ outline: 'None' }}
                {...props}
            >
                <ButtonText color={'brand.800'}>
                    {props.children}
                </ButtonText>
            </Button>
        </NextLink>
    );
};

export default NavButton;