import { Center, Stack, StackDivider, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import IndexBanner from '../components/contents/index/IndexBanner';
import IndexRow from '../components/contents/index/IndexRow';
import logoBlack from '../public/images/logo-black.png';
import logoWhite from '../public/images/logo-white.png';
import tower from '../public/images/TutorialSnapshotSquare.png';

const Home = (props) => {
    const { t } = useTranslation('common');
    const rowMaxWidth = '36rem';
    const vStackSpacing = '2rem';
    const logo = useColorModeValue(logoBlack, logoWhite);
    const mobile = useBreakpointValue({ base: true, lg: false });
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
                    <IndexRow
                        placement={'right'}
                        rowMaxWidth={rowMaxWidth}
                        keyword={'studio'}
                        ratio={1}
                        src={logo}
                        href={'/about'}
                    />
                </Center>
                <Center mb={vStackSpacing}>
                    <IndexRow
                        placement={mobile ? 'right' : 'left'}
                        rowMaxWidth={rowMaxWidth}
                        keyword={'project'}
                        ratio={1}
                        src={tower}
                        href={'/project/project-tower'}
                    />
                </Center>
            </Stack>
        </Stack>
    );
};

export default Home;
