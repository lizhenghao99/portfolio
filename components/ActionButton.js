import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import ButtonText from './ButtonText';

const ActionButton = (props) => {
    return (
        <NextLink href={props.href}>
            <Button
                size={'lg'}
                minW={'5rem'}
                color={'brand.800'}
                colorScheme={'brand'}
                variant={'outline'}
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

export default ActionButton;