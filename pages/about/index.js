import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import BodyText from '../../components/BodyText';
import CaptionText from '../../components/CaptionText';

function Index(props) {
    const { t } = useTranslation('common');
    return (
        <Box mx={'10rem'} my={'5rem'}>
            <CaptionText fontSize={'5xl'}>
                {t('studio-name')}
            </CaptionText>
            <Box h={'3rem'}/>
            <BodyText fontSize={'2xl'} lineHeight={'3rem'}>
                {t('studio-intro-1')}
            </BodyText>
            <Box h={'3rem'}/>
            <BodyText fontSize={'2xl'} lineHeight={'3rem'}>
                {t('studio-intro-2')}
            </BodyText>
        </Box>
    );
}

export default Index;