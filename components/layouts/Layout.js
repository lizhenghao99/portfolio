import { Flex, Spacer } from '@chakra-ui/react';
import Navbar from '../navs/Navbar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <Flex minH={'100vh'} direction={'column'}>
            <Navbar/>
            {props.children}
            <Spacer/>
            <Footer/>
        </Flex>
    );
};

export default Layout;

