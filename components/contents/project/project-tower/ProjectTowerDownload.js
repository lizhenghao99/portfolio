import useTranslation from 'next-translate/useTranslation';
import StackSkeleton from '../../../layouts/StackSkeleton';
import ItchComponent from '../../../media/ItchComponent';
import BodyText from '../../../texts/BodyText';
import CaptionText from '../../../texts/CaptionText';

const ProjectTowerDownload = (props) => {
    const vStackSpacing = ['1rem', '3rem'];
    const { t } = useTranslation('common');
    const bodyText = [
        t('project-page.project-tower.download.body.l1'),
        t('project-page.project-tower.download.body.l2'),
    ];
    return (
        <StackSkeleton
            direction={'column'}
            spacing={vStackSpacing}
            align={'center'}
        >
            <CaptionText
                maxW={'85%'}
                fontSize={{
                    en: ['3xl', '5xl'],
                    zh: ['3xl', '5xl'],
                }}
            >
                {t('project-page.project-tower.download.caption')}
            </CaptionText>

            {bodyText.map((text, index) => (
                <BodyText
                    key={index}
                    maxW={'85%'}
                    fontSize={{
                        en: ['lg', '2xl'],
                        zh: ['xl', '3xl'],
                    }}
                >
                    {text}
                </BodyText>
            ))}
            <ItchComponent maxW={'90%'} mb={vStackSpacing}/>
        </StackSkeleton>
    );
};

export default ProjectTowerDownload;