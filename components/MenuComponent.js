import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import NextLink from 'next/link';
import BodyText from './BodyText';
import CaptionText from './CaptionText';

function MenuComponent(props) {
    return (
        <>
            <Menu autoSelect={false}>
                <MenuButton
                    as={Button}
                    size={'lg'}
                    minW={'10rem'}
                    color={'brand.800'}
                    colorScheme={'brand'}
                    variant={'ghost'}
                    rightIcon={<ChevronDownIcon/>}
                    _focus={{ outline: 'None' }}
                >
                    <CaptionText color={'brand.800'}>
                        {props.children}
                    </CaptionText>
                </MenuButton>
                <MenuList bg={'brand.100'} minW={'10rem'}>
                    {props.menuLinks.map((link, index) => (
                        <NextLink href={link.href} locale={link.locale} key={index}>
                            <MenuItem _hover={{ bg: 'brand.50' }}>
                                <BodyText>
                                    {link.text}
                                </BodyText>
                            </MenuItem>
                        </NextLink>
                    ))}
                </MenuList>
            </Menu>
        </>
    );
}

export default MenuComponent;