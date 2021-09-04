import { Center, StackDivider } from '@chakra-ui/react';
import StackComponent from '../../components/layouts/StackComponent';
import ProjectTowerBanner from '../../components/pages/project/project-tower/ProjectTowerBanner';
import ProjectTowerCardRow from '../../components/pages/project/project-tower/ProjectTowerCardRow';
import ProjectTowerMinionRow from '../../components/pages/project/project-tower/ProjectTowerMinionRow';

const ProjectTower = (props) => {
    const vStackSpacing = '5rem';
    return (
        <StackComponent
            direction={'column'}
            spacing={'5rem'}
        >
            <ProjectTowerBanner/>
            <StackComponent
                direction={'column'}
                spacing={vStackSpacing}
                divider={<StackDivider borderColor={'gray.400'}/>}
            >
                <Center>
                    <ProjectTowerCardRow/>
                </Center>
                <Center mb={vStackSpacing}>
                    <ProjectTowerMinionRow/>
                </Center>
            </StackComponent>
        </StackComponent>
    );
};

export default ProjectTower;