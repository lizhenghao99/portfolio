import { GridItem } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { Fade } from 'react-awesome-reveal';
import DescriptionStack from '../../../layouts/description/DescriptionStack';
import MultiColumnGrid from '../../../layouts/MultiColumnGrid';
import VideoComponent from '../../../media/VideoComponent';

const ProjectTowerRow = (props) => {
    const { t } = useTranslation('common');
    const columns = [1, 1, 1, 2, 5];
    const templateColumns = columns.map((n) => (
        `repeat(${n}, 1fr)`
    ));
    const { keyword, src, placement } = props;
    const fadeDuration = 500;
    const leftRow = (
        <MultiColumnGrid
            templateColumns={templateColumns}
        >
            <GridItem colSpan={[1, 1, 1, 1, 2]}>
                <Fade duration={fadeDuration}>
                    <DescriptionStack
                        captionText={t(`project-page.project-tower.${keyword}.caption`)}
                        bodyText={[
                            t(`project-page.project-tower.${keyword}.body.l1`),
                            t(`project-page.project-tower.${keyword}.body.l2`),
                        ]}
                    />
                </Fade>
            </GridItem>
            <GridItem colSpan={[1, 1, 1, 1, 3]}>
                <Fade duration={fadeDuration}>
                    <VideoComponent
                        my={['2rem', '2rem', '2rem', '0']}
                        ratio={16 / 9}
                        src={src}
                    />
                </Fade>
            </GridItem>
        </MultiColumnGrid>
    );
    const rightRow = (
        <MultiColumnGrid
            templateColumns={templateColumns}
        >
            <GridItem colSpan={[1, 1, 1, 1, 3]}>
                <Fade duration={fadeDuration}>
                    <VideoComponent
                        my={['2rem', '2rem', '2rem', '0']}
                        ratio={16 / 9}
                        src={src}
                    />
                </Fade>
            </GridItem>
            <GridItem colSpan={[1, 1, 1, 1, 2]}>
                <Fade duration={fadeDuration}>
                    <DescriptionStack
                        captionText={t(`project-page.project-tower.${keyword}.caption`)}
                        bodyText={[
                            t(`project-page.project-tower.${keyword}.body.l1`),
                            t(`project-page.project-tower.${keyword}.body.l2`),
                        ]}
                    />
                </Fade>
            </GridItem>
        </MultiColumnGrid>
    );
    return (
        <>
            {placement === 'left' && leftRow}
            {placement === 'right' && rightRow}
        </>
    );
};

export default ProjectTowerRow;