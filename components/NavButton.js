import { Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import CaptionText from './CaptionText';

const NavButton = (props) => {
    return (
        <NextLink href={props.href}>
            <Button
                size={'lg'}
                minW={'10rem'}
                color={'brand.800'}
                colorScheme={'brand'}
                variant={'ghost'}
                _focus={{ outline: 'None' }}
                {...props}
            >
                <CaptionText color={'brand.800'}>
                    {props.children}
                </CaptionText>
            </Button>
        </NextLink>
    );
};

export default NavButton;