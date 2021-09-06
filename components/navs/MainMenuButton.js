import { Icon, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';
import { IoClose, IoMenu } from 'react-icons/io5';
import MenuText from '../texts/MenuText';

const MainMenuButton = (props) => {
    const color = useColorModeValue('brand.800', 'brand.50');
    const bg = useColorModeValue('brand.100', '#4F665C');
    const hover = useColorModeValue('brand.50', '#485851');
    const { t } = useTranslation('common');
    const { onClick, ...rest } = props;
    const menuList = [
        {
            text: t('studio'),
            href: '/about',
        },
        {
            text: t('zhenghao'),
            href: '/about/zhenghao',
        },
        {
            text: t('jiusi'),
            href: '/about/jiusi',
        },
        {
            text: t('tom'),
            href: '/project',
        },
        {
            text: t('project-tower'),
            href: '/project/project-tower',
        },
        {
            text: t('contact'),
            href: '/contact',
        },
    ];
    return (
        <Menu autoSelect={false}>
            {({ isOpen }) => (
                <>
                    <MenuButton
                        isActive={isOpen}
                        as={IconButton}
                        aria-label={'Main menu'}
                        icon={<Icon as={isOpen ? IoClose : IoMenu} boxSize={'2rem'}/>}
                        size={'md'}
                        color={color}
                        colorScheme={'brand'}
                        variant={'ghost'}
                        _focus={{ outline: 'None' }}
                    />
                    <MenuList bg={bg}>
                        {menuList.map((link, index) => (
                            <NextLink href={link.href} key={index}>
                                <MenuItem
                                    sx={{ '-webkit-tap-highlight-color': 'transparent' }}
                                    _hover={{ bg: hover }}
                                    _focus={{ bg: hover }}>
                                    <MenuText>
                                        {link.text}
                                    </MenuText>
                                </MenuItem>
                            </NextLink>
                        ))}
                    </MenuList>
                </>
            )}
        </Menu>
    );
};

export default MainMenuButton;