import { Center, Stack, StackDivider } from '@chakra-ui/react';
import IndexBanner from '../components/contents/index/IndexBanner';
import IndexProjectRow from '../components/contents/index/IndexProjectRow';
import IndexStudioRow from '../components/contents/index/IndexStudioRow';

const Home = (props) => {
    const rowMaxWidth = '36rem';
    const vStackSpacing = '2rem';
    return (
        <Stack
            direction={'column'}
            spacing={'5rem'}
        >
            <IndexBanner/>
            <Stack
                direction={'column'}
                spacing={vStackSpacing}
                divider={<StackDivider borderColor={'gray.400'}/>}
            >
                <Center>
                    <IndexStudioRow rowMaxWidth={rowMaxWidth}/>
                </Center>
                <Center mb={vStackSpacing}>
                    <IndexProjectRow rowMaxWidth={rowMaxWidth}/>
                </Center>
            </Stack>
        </Stack>
    );
};

export default Home;
