import { Center, Stack, StackDivider, useBreakpointValue } from '@chakra-ui/react';
import ProjectTowerBanner from '../../components/contents/project/project-tower/ProjectTowerBanner';
import ProjectTowerDownload from '../../components/contents/project/project-tower/ProjectTowerDownload';
import ProjectTowerRow from '../../components/contents/project/project-tower/ProjectTowerRow';

const ProjectTower = (props) => {
    const vStackSpacing = ['1rem', '5rem'];
    const mobile = useBreakpointValue({ base: true, lg: false });
    const cardSrc = 'https://www.youtube.com/embed/HlpF47M7T6c?controls=0&autoplay=1&mute=1&loop=1&playlist=HlpF47M7T6c&modestbranding=1';
    const minionSrc = 'https://www.youtube.com/embed/HkRc46JmDMs?controls=0&autoplay=1&mute=1&loop=1&playlist=HkRc46JmDMs&modestbranding=1';
    const spellSrc = 'https://www.youtube.com/embed/0MlA4NuFs94?controls=0&autoplay=1&mute=1&loop=1&playlist=0MlA4NuFs94&modestbranding=1';
    const bossSrc = 'https://www.youtube.com/embed/9T_FJiBCs_I?controls=0&autoplay=1&mute=1&loop=1&playlist=9T_FJiBCs_I&modestbranding=1';

    return (
        <Stack
            direction={'column'}
            spacing={['3rem', '5rem']}
        >
            <ProjectTowerBanner/>
            <Stack
                direction={'column'}
                spacing={vStackSpacing}
                divider={<StackDivider borderColor={'gray.400'}/>}
            >
                {!mobile && <ProjectTowerDownload/>}
                <Center>
                    <ProjectTowerRow
                        placement={'left'}
                        keyword={'card'}
                        src={cardSrc}
                    />
                </Center>
                <Center>
                    <ProjectTowerRow
                        placement={mobile ? 'left' : 'right'}
                        keyword={'minion'}
                        src={minionSrc}
                    />
                </Center>
                <Center>
                    <ProjectTowerRow
                        placement={'left'}
                        keyword={'spell'}
                        src={spellSrc}
                    />
                </Center>
                <Center mb={vStackSpacing}>
                    <ProjectTowerRow
                        placement={mobile ? 'left' : 'right'}
                        keyword={'boss'}
                        src={bossSrc}
                    />
                </Center>
            </Stack>
        </Stack>
    );
};

export default ProjectTower;