import profile from '/public/images/logo-white.png';
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
            <AboutBanner src={profile} title={t('art-stack')} name={t('jiusi')}/>
            <DescriptionGrid column={3} texts={texts}/>
        </>
    );
};

export default Zhenghao;