import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import BodyText from '../../components/BodyText';
import CaptionText from '../../components/CaptionText';
import TextBlock from '../../components/TextBlock';


const Index = (props) => {
    const { t } = useTranslation('common');
    return (
        <TextBlock>
            <CaptionText fontSize={['3xl', '5xl']}>
                {t('studio-name')}
            </CaptionText>
            <Box h={'3rem'}/>
            <BodyText fontSize={['md', '2xl']} lineHeight={['2rem', '3rem']}>
                {t('studio-intro-1')}
                <Box h={'3rem'}/>
                {t('studio-intro-2')}
            </BodyText>
        </TextBlock>
    );
};

export default Index;