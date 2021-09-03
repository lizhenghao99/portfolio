import { ChakraProvider } from '@chakra-ui/react';
import HeadComponent from '../components/HeadComponent';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <HeadComponent/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp;
