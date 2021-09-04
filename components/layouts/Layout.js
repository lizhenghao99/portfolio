import Navbar from '../navs/Navbar';

const Layout = (props) => {
    return (
        <>
            <Navbar/>
            {props.children}
        </>
    );
};

export default Layout;

