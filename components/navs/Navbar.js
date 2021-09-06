import { Spacer, Stack, useBreakpointValue } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import Logo from '../texts/Logo';
import ColorModeButton from './ColorModeButton';
import LanguageButton from './LanguageButton';
import MenuComponent from './MenuComponent';
import NavButton from './NavButton';
import NavDrawer from './NavDrawer';


const Navbar = (props) => {
    const { t } = useTranslation('common');
    const mobile = useBreakpointValue({ base: true, lg: false });

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
        <Stack
            direction={'row'}
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
            <LanguageButton/>
            <ColorModeButton/>
        </Stack>
    );

    const mobileNav = (
        <Stack
            direction={'row'}
            mx={['0.5rem', '1.5rem']}
            my={'0.25rem'}
            align={'center'}
            spacing={'0'}
        >
            <Logo/>
            <Spacer/>
            <ColorModeButton size={'sm'}/>
            <LanguageButton size={'sm'} minW={'4.1rem'} leftIcon={null}/>
            {/*<MainMenuButton/>*/}
            <NavDrawer/>
        </Stack>
    );

    return (
        <>
            {mobile && mobileNav}
            {!mobile && desktopNav}
        </>
    );
};

export default Navbar;