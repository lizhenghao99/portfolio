import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/ma-shan-zheng/400.css';
import '@fontsource/noto-sans-sc';
import '@fontsource/noto-serif-sc';
import '@fontsource/ubuntu/500.css';
import HeadComponent from '../components/HeadComponent';
import Layout from '../components/Layout';
import theme from '../themes/theme';

const MyApp = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <HeadComponent/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
};

export default MyApp;
