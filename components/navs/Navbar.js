import { Box, HStack, Spacer } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Logo from '../texts/Logo';
import MenuComponent from './MenuComponent';
import NavButton from './NavButton';


const Navbar = (props) => {
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

    const projectLinks = [
        {
            text: t('tom'),
            href: '/project',
        },
        {
            text: t('project-tower'),
            href: '/project/project-tower',
        },
    ];

    const desktopNav = (
        <HStack
            margin={'2rem'}
            align={'center'}
            spacing={'0'}
        >
            <Logo/>
            <Spacer/>
            <MenuComponent menuLinks={aboutLinks}>
                {t('about')}
            </MenuComponent>
            <MenuComponent menuLinks={projectLinks}>
                {t('project')}
            </MenuComponent>
            <NavButton href={'/contact'}>
                {t('contact')}
            </NavButton>
            <MenuComponent menuLinks={menuLinks} autoSelect={false}>
                {t('languages')}
            </MenuComponent>
        </HStack>
    );

    return (
        <>
            <Box d={['None', 'None', 'None', 'Block']}>
                {desktopNav}
            </Box>
        </>
    );
};

export default Navbar;