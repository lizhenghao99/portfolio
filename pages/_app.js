import '@fontsource/crimson-text/400.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/ubuntu/500.css';
import HeadComponent from '../components/contents/HeadComponent';
import Layout from '../components/layouts/Layout';
import { Chakra } from '../lib/chakra';
import Fonts from '../themes/Fonts';
import theme from '../themes/theme';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Chakra theme={theme} cookies={pageProps.cookies}>
            <Fonts/>
            <HeadComponent/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Chakra>
    );
};

export default MyApp;

export { getServerSideProps } from '/lib/chakra';
