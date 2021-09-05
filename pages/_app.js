import { ChakraProvider } from '@chakra-ui/react';
import { hydrate } from '@emotion/css';
import '@fontsource/crimson-text/400.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/ubuntu/500.css';
import Layout from '../components/layouts/Layout';
import HeadComponent from '../components/contents/HeadComponent';
import Fonts from '../themes/Fonts';
import theme from '../themes/theme';

const MyApp = ({ Component, pageProps }) => {
    if (typeof window !== 'undefined') {
        hydrate(window.__NEXT_DATA__.ids);
    }
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <HeadComponent/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
};

export default MyApp;
