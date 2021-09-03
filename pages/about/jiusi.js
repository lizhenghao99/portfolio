import { Spacer, VStack } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import CaptionText from '../../components/CaptionText';


const Jiusi = (props) => {
    const { t } = useTranslation('common');
    return (
        <VStack ml={'10rem'} my={'5rem'} align={'left'}>
            <CaptionText fontSize={'5xl'}>
                {t('jiusi')}
            </CaptionText>
            <Spacer minH={'1em'}/>
            <CaptionText fontSize={'4xl'}>
                {t('art-stack')}
            </CaptionText>
        </VStack>
    );
};

export default Jiusi;