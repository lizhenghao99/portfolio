import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

function Navbar(props) {
    const { pathname } = useRouter();
    const { t, lang } = useTranslation('common');
    return (
        <>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                    {t('languages')}
                </MenuButton>
                <MenuList>
                    <NextLink href={pathname} locale={'en'}>
                        <MenuItem>English</MenuItem>
                    </NextLink>
                    <NextLink href={pathname} locale={'zh'}>
                        <MenuItem>中文</MenuItem>
                    </NextLink>
                </MenuList>
            </Menu>
        </>
    );
}

export default Navbar;