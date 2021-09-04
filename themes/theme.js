import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
        white: '#F8F4ED',
        black: '#1F2623',
        brand: {
            '50': '#e0f2ea',
            '100': '#b5e0cc',
            '200': '#83cbac',
            '300': '#48b88c',
            '400': '#00a975',
            '500': '#009b5e',
            '600': '#008d54',
            '700': '#007b47',
            '800': '#006a3b',
            '900': '#004c26',
        },
        gray: {
            '50': '#f3fdf9',
            '100': '#eef8f4',
            '200': '#eaf3ef',
            '300': '#dde6e2',
            '400': '#bac3bf',
            '500': '#9ca5a1',
            '600': '#737b78',
            '700': '#5f6763',
            '800': '#404844',
            '900': '#1f2623',
        },
    },
    fonts: {
        heading: 'Ubuntu',
        zhCaption: 'Zh Caption',
        zhBody: 'Zh Body',
        enCaption: 'Crimson Text',
        enBody: 'Montserrat',
    },
    components: {
        Menu: {
            parts: ['menu', 'item'],
            baseStyle: {
                item: {
                    color: 'black',
                },
            },
        },
        Text: {
            baseStyle: {
                color: 'black',
            },
        },
        Heading: {
            baseStyle: {
                color: 'black',
            },
        },
    },
    textStyles: {
        enButton: {
            fontFamily: 'enCaption',
            fontSize: '2xl',
        },
        enMenu: {
            fontFamily: 'enBody',
            fontSize: 'lg',
        },
        zhButton: {
            fontFamily: 'zhCaption',
            fontSize: '2xl',
        },
        zhMenu: {
            fontFamily: 'zhBody',
            fontSize: '2xl',
        },
        enCaption: {
            fontFamily: 'enCaption',
            fontSize: ['3xl', '6xl'],
        },
        enBody: {
            fontFamily: 'enBody',
            fontSize: ['md', '2xl'],
            lineHeight: ['2rem', '3rem'],
        },
        zhCaption: {
            fontFamily: 'zhCaption',
            fontSize: ['3xl', '5xl'],
        },
        zhBody: {
            fontFamily: 'zhBody',
            fontSize: ['lg', '3xl'],
            lineHeight: ['2.5rem', '3.5rem'],
        },
    },
});

export default theme;