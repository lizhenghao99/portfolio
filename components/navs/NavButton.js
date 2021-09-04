import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import ButtonText from '../texts/ButtonText';

const NavButton = (props) => {
    return (
        <NextLink href={props.href}>
            <Button
                size={'lg'}
                minW={'11rem'}
                colorScheme={'brand'}
                variant={'ghost'}
                _focus={{ outline: 'None' }}
                {...props}
            >
                <ButtonText>
                    {props.children}
                </ButtonText>
            </Button>
        </NextLink>
    );
};

export default NavButton;