import { AspectRatio, Spacer } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextImage from 'next/image';
import CaptionText from '../../components/CaptionText';
import StackComponent from '../../components/StackComponent';

const Zhenghao = (props) => {
    const { t } = useTranslation('common');
    return (
        <StackComponent direction={'column'} ml={'10rem'} my={'5rem'} align={'left'}>
            <CaptionText fontSize={{ en: '5xl', zh: '6xl' }}>
                {t('zhenghao')}
            </CaptionText>
            <Spacer minH={'1rem'}/>
            <CaptionText fontSize={{ en: '4xl', zh: '4xl' }}>
                {t('tech-stack')}
            </CaptionText>
            <Spacer minH={'4rem'}/>
            <AspectRatio maxW={'20rem'} ratio={4 / 3}>
                <NextImage src={'/images/work-profile-wide.jpg'} layout={'fill'} quality={'50'}/>
            </AspectRatio>
        </StackComponent>
    );
};

export default Zhenghao;