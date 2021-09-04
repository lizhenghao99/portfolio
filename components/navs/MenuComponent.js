import { Button, Icon, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IoChevronDown } from 'react-icons/io5';
import ButtonText from '../texts/ButtonText';
import MenuText from '../texts/MenuText';

const MenuComponent = (props) => {
    const color = useColorModeValue('brand.800', 'brand.50');
    const bg = useColorModeValue('brand.100', '#4F665C');
    const hover = useColorModeValue('brand.50', '#485851');
    return (
        <>
            <Menu autoSelect={true} {...props}>
                <MenuButton
                    as={Button}
                    size={'lg'}
                    minW={'11rem'}
                    color={color}
                    colorScheme={'brand'}
                    variant={'ghost'}
                    rightIcon={<Icon as={IoChevronDown}/>}
                    _focus={{ outline: 'None' }}
                >
                    <ButtonText color={color}>
                        {props.children}
                    </ButtonText>
                </MenuButton>
                <MenuList bg={bg} minW={'11rem'}>
                    {props.menuLinks.map((link, index) => (
                        <NextLink href={link.href} key={index}>
                            <MenuItem _hover={{ bg: hover }} _focus={{ bg: hover }}>
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