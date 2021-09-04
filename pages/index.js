import { Center, StackDivider } from '@chakra-ui/react';
import StackComponent from '../components/layouts/StackComponent';
import IndexBanner from '../components/pages/index/IndexBanner';
import IndexProjectRow from '../components/pages/index/IndexProjectRow';
import IndexStudioRow from '../components/pages/index/IndexStudioRow';

const Home = (props) => {
    const rowMaxWidth = '36rem';
    return (
        <StackComponent
            direction={'column'}
            spacing={'5rem'}
        >
            <IndexBanner/>
            <StackComponent
                direction={'column'}
                spacing={'2rem'}
                divider={<StackDivider borderColor={'gray.400'}/>}
            >
                <Center>
                    <IndexStudioRow rowMaxWidth={rowMaxWidth}/>
                </Center>
                <Center>
                    <IndexProjectRow rowMaxWidth={rowMaxWidth}/>
                </Center>
            </StackComponent>
        </StackComponent>
    );
};

export default Home;
