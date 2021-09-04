import { GridItem } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import MultiColumnGrid from '../../../layouts/MultiColumnGrid';
import VideoComponent from '../../../media/VideoComponent';
import ProjectTowerDescriptionStack from './ProjectTowerDescriptionStack';

const ProjectTowerCardRow = (props) => {
    const { t } = useTranslation('common');
    const columns = [1, 1, 1, 2, 5];
    const templateColumns = columns.map((n) => (
        `repeat(${n}, 1fr)`
    ));
    return (
        <MultiColumnGrid
            templateColumns={templateColumns}
        >
            <GridItem colSpan={[1, 1, 1, 1, 2]}>
                <ProjectTowerDescriptionStack
                    captionText={t('project-page.project-tower.card.caption')}
                    bodyText={[
                        t('project-page.project-tower.card.body.l1'),
                        t('project-page.project-tower.card.body.l2'),
                    ]}
                    buttonText={t('learn-more')}
                    href={'/project'}
                />
            </GridItem>
            <GridItem colSpan={[1, 1, 1, 1, 3]}>
                <VideoComponent
                    my={['2rem', '2rem', '2rem', '0']}
                    ratio={16 / 9}
                    src="https://www.youtube.com/embed/HlpF47M7T6c?controls=0&autoplay=1&mute=1&loop=1&playlist=HlpF47M7T6c&modestbranding=1"
                />
            </GridItem>
        </MultiColumnGrid>
    );
};

export default ProjectTowerCardRow;