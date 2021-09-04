import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import NextLink from 'next/link';
import ButtonText from './ButtonText';
import MenuText from './MenuText';

const MenuComponent = (props) => {
    return (
        <>
            <Menu autoSelect={true} {...props}>
                <MenuButton
                    as={Button}
                    size={'lg'}
                    minW={'11rem'}
                    color={'brand.800'}
                    colorScheme={'brand'}
                    variant={'ghost'}
                    rightIcon={<ChevronDownIcon/>}
                    _focus={{ outline: 'None' }}
                >
                    <ButtonText color={'brand.800'}>
                        {props.children}
                    </ButtonText>
                </MenuButton>
                <MenuList bg={'brand.100'} minW={'11rem'}>
                    {props.menuLinks.map((link, index) => (
                        <NextLink href={link.href} locale={link.locale} key={index}>
                            <MenuItem _hover={{ bg: 'brand.50' }} _focus={{ bg: 'brand.50' }}>
                                <MenuText>
                                    {link.text}
                                </MenuText>
                            </MenuItem>
                        </NextLink>
                    ))}
                </MenuList>
            </Menu>
        </>
    );
};

export default MenuComponent;