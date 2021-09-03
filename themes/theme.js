import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
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
    },
    fonts: {
        heading: 'Ubuntu',
        zhCaption: 'Ma Shan Zheng',
        zhBody: 'Large',
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
        enCaption: {
            fontSize: 'lg',
        },
        enBody: {
            fontSize: 'lg',
        },
        zhCaption: {
            fontFamily: 'zhCaption',
            fontSize: 'xl',
        },
        zhBody: {
            fontFamily: 'zhBody',
            fontSize: '2xl',
        },
    },
});

export default theme;