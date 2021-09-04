import { Spacer } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import CaptionText from '../../components/CaptionText';
import StackComponent from '../../components/StackComponent';


const Jiusi = (props) => {
    const { t } = useTranslation('common');
    return (
        <StackComponent direction={'column'} ml={'10rem'} my={'5rem'} align={'left'}>
            <CaptionText fontSize={'5xl'}>
                {t('jiusi')}
            </CaptionText>
            <Spacer minH={'1em'}/>
            <CaptionText fontSize={'4xl'}>
                {t('art-stack')}
            </CaptionText>
        </StackComponent>
    );
};

export default Jiusi;