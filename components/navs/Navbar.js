import { Box, HStack, Spacer } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Logo from '../texts/Logo';
import ColorModeButton from './ColorModeButton';
import LanguageButton from './LanguageButton';
import MenuComponent from './MenuComponent';
import NavButton from './NavButton';


const Navbar = (props) => {
    const { pathname, locale } = useRouter();
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
            <LanguageButton/>
            <ColorModeButton/>
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