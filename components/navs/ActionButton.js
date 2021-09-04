import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import ButtonText from '../texts/ButtonText';

const ActionButton = (props) => {
    return (
        <NextLink href={props.href}>
            <Button
                size={'lg'}
                minW={'5rem'}
                colorScheme={'brand'}
                variant={'outline'}
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

export default ActionButton;