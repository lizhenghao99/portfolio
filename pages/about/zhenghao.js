import profile from '/public/images/zhenghao-profile.jpg';
import useTranslation from 'next-translate/useTranslation';
import AboutBanner from '../../components/contents/about/AboutBanner';
import DescriptionGrid from '../../components/layouts/description/DescriptionGrid';

const Zhenghao = (props) => {
    const { t } = useTranslation('common');
    const texts = [
        {
            captionText: t('about-page.studio.caption'),
            bodyText: [
                t('about-page.studio.body.l1'),
                t('about-page.studio.body.l2'),
            ],
        },
        {
            captionText: t('about-page.studio.caption'),
            bodyText: [
                t('about-page.studio.body.l1'),
                t('about-page.studio.body.l2'),
            ],
        },
        {
            captionText: t('about-page.studio.caption'),
            bodyText: [
                t('about-page.studio.body.l1'),
                t('about-page.studio.body.l2'),
            ],
        },
    ];

    return (
        <>
            <AboutBanner src={profile} title={t('tech-stack')} name={t('zhenghao')}/>
            <DescriptionGrid column={3} texts={texts}/>
        </>
    );
};

export default Zhenghao;