import { HStack, Spacer } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Logo from './Logo';
import MenuComponent from './MenuComponent';
import NavButton from './NavButton';

function Navbar(props) {
    const { pathname, locale } = useRouter();
    const { t } = useTranslation('common');
    const menuLinks = [
        {
            text: 'English',
            href: pathname,
            locale: 'en',
        },
        {
            text: '中文',
            href: pathname,
            locale: 'zh',
        },
    ];

    const aboutLinks = [
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
    ];

    return (
        <HStack
            margin={'2rem'}
            align={'center'}
        >
            <Logo/>
            <Spacer/>
            <MenuComponent menuLinks={aboutLinks}>
                {t('about')}
            </MenuComponent>
            <NavButton href={'/contact'}>
                {t('contact')}
            </NavButton>
            <MenuComponent menuLinks={menuLinks}>
                {t('languages')}
            </MenuComponent>
        </HStack>
    );
}

export default Navbar;