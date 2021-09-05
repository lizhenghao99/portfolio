import { Center, StackDivider } from '@chakra-ui/react';
import StackComponent from '../../components/layouts/StackComponent';
import ProjectTowerBanner from '../../components/pages/project/project-tower/ProjectTowerBanner';
import ProjectTowerDownload from '../../components/pages/project/project-tower/ProjectTowerDownload';
import ProjectTowerLeftRow from '../../components/pages/project/project-tower/ProjectTowerLeftRow';
import ProjectTowerRightRow from '../../components/pages/project/project-tower/ProjectTowerRightRow';

const ProjectTower = (props) => {
    const vStackSpacing = ['1rem', '5rem'];
    const cardSrc = 'https://www.youtube.com/embed/HlpF47M7T6c?controls=0&autoplay=1&mute=1&loop=1&playlist=HlpF47M7T6c&modestbranding=1';
    const minionSrc = 'https://www.youtube.com/embed/rwc7dxAfh-U?controls=0&autoplay=1&mute=1&loop=1&playlist=rwc7dxAfh-U&modestbranding=1';
    const spellSrc = 'https://www.youtube.com/embed/u_NgylF3niY?controls=0&autoplay=1&mute=1&loop=1&playlist=u_NgylF3niY&modestbranding=1';
    const bossSrc = 'https://www.youtube.com/embed/QLig3kXqlOs?controls=0&autoplay=1&mute=1&loop=1&playlist=QLig3kXqlOs&modestbranding=1';

    return (
        <StackComponent
            direction={'column'}
            spacing={['3rem', '5rem']}
        >
            <ProjectTowerBanner/>
            <StackComponent
                direction={'column'}
                spacing={vStackSpacing}
                divider={<StackDivider borderColor={'gray.400'}/>}
            >
                <ProjectTowerDownload/>
                <Center>
                    <ProjectTowerLeftRow keyword={'card'} src={cardSrc}/>
                </Center>
                <Center>
                    <ProjectTowerRightRow keyword={'minion'} src={minionSrc}/>
                </Center>
                <Center>
                    <ProjectTowerLeftRow keyword={'spell'} src={spellSrc}/>
                </Center>
                <Center mb={vStackSpacing}>
                    <ProjectTowerRightRow keyword={'boss'} src={bossSrc}/>
                </Center>
            </StackComponent>
        </StackComponent>
    );
};

export default ProjectTower;