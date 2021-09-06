import { Center, Stack, StackDivider, useBreakpointValue } from '@chakra-ui/react';
import ProjectTowerBanner from '../../components/contents/project/project-tower/ProjectTowerBanner';
import ProjectTowerDownload from '../../components/contents/project/project-tower/ProjectTowerDownload';
import ProjectTowerRow from '../../components/contents/project/project-tower/ProjectTowerRow';

const ProjectTower = (props) => {
    const vStackSpacing = ['1rem', '5rem'];
    const mobile = useBreakpointValue({ base: true, lg: false });
    const cardSrc = 'https://www.youtube.com/embed/HlpF47M7T6c?controls=0&autoplay=1&mute=1&loop=1&playlist=HlpF47M7T6c&modestbranding=1';
    const minionSrc = 'https://www.youtube.com/embed/rwc7dxAfh-U?controls=0&autoplay=1&mute=1&loop=1&playlist=rwc7dxAfh-U&modestbranding=1';
    const spellSrc = 'https://www.youtube.com/embed/u_NgylF3niY?controls=0&autoplay=1&mute=1&loop=1&playlist=u_NgylF3niY&modestbranding=1';
    const bossSrc = 'https://www.youtube.com/embed/QLig3kXqlOs?controls=0&autoplay=1&mute=1&loop=1&playlist=QLig3kXqlOs&modestbranding=1';

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