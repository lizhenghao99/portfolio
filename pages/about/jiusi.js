import profile from '/public/images/jiusi-profile.png';
import useTranslation from 'next-translate/useTranslation';
import AboutBanner from '../../components/contents/about/AboutBanner';
import JiusiPortfolio from '../../components/media/jiusi-portfolio';

const Jiusi = (props) => {
    const { t } = useTranslation('common');

    return (
        <>
            <AboutBanner src={profile} title={t('art-stack')} name={t('jiusi')}/>
            <JiusiPortfolio/>
        </>
    );
};

export default Jiusi;