import { GridItem } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import MultiColumnGrid from '../../../layouts/MultiColumnGrid';
import VideoComponent from '../../../media/VideoComponent';
import ProjectTowerDescriptionStack from './ProjectTowerDescriptionStack';

const ProjectTowerLeftRow = (props) => {
    const { t } = useTranslation('common');
    const columns = [1, 1, 1, 2, 5];
    const templateColumns = columns.map((n) => (
        `repeat(${n}, 1fr)`
    ));
    const { keyword, src } = props;
    return (
        <MultiColumnGrid
            templateColumns={templateColumns}
        >
            <GridItem colSpan={[1, 1, 1, 1, 2]}>
                <ProjectTowerDescriptionStack
                    captionText={t(`project-page.project-tower.${keyword}.caption`)}
                    bodyText={[
                        t(`project-page.project-tower.${keyword}.body.l1`),
                        t(`project-page.project-tower.${keyword}.body.l2`),
                    ]}
                />
            </GridItem>
            <GridItem colSpan={[1, 1, 1, 1, 3]}>
                <VideoComponent
                    my={['2rem', '2rem', '2rem', '0']}
                    ratio={16 / 9}
                    src={src}
                />
            </GridItem>
        </MultiColumnGrid>
    );
};

export default ProjectTowerLeftRow;