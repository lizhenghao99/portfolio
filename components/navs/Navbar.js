import { Box, Spacer, Stack } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import Logo from '../texts/Logo';
import ColorModeButton from './ColorModeButton';
import LanguageButton from './LanguageButton';
import MainMenuButton from './MainMenuButton';
import MenuComponent from './MenuComponent';
import NavButton from './NavButton';


const Navbar = (props) => {
    const { t } = useTranslation('common');

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
            margin={'0.3rem'}
            align={'center'}
            spacing={'0'}
        >
            <Logo/>
            <Spacer/>
            <ColorModeButton size={'sm'}/>
            <LanguageButton size={'sm'} minW={'4.1rem'} leftIcon={null}/>
            <MainMenuButton/>
        </Stack>
    );

    return (
        <>
            <Box d={['None', 'None', 'None', 'Block']}>
                {desktopNav}
            </Box>
            <Box d={['Block', 'Block', 'Block', 'None']}>
                {mobileNav}
            </Box>
        </>
    );
};

export default Navbar;