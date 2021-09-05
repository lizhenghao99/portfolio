import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import feature from '../../../public/images/feature.png';
import StackComponent from '../../layouts/StackComponent';
import ImageBanner from '../../media/ImageBanner';
import CaptionText from '../../texts/CaptionText';

const IndexBanner = (props) => {
    const { t } = useTranslation('common');
    return (
        <Box position={'relative'}>
            <ImageBanner
                ratio={[1.5, 2, 2.4]}
                brightness={0.5}
                src={feature}
                width={3317}
                height={1841}
                quality={'50'}
            />
            <Box position={'absolute'} top={'50%'} transform={'translateY(-50%)'} textAlign={'center'} w={'100%'}>
                <StackComponent
                    direction={'column'}
                    spacing={['0', '3rem', '4rem', '5rem']}
                    align={'center'}
                >
                    <CaptionText
                        color={'white'}
                        fontSize={{
                            en: ['3xl', '3rem', '4rem', '5rem', '6rem'],
                            zh: ['3xl', '3rem', '4rem', '5rem', '6rem'],
                        }}
                    >
                        {t('tom')}
                    </CaptionText>
                    <CaptionText
                        maxW={'90%'}
                        color={'white'}
                        fontSize={{
                            en: ['2xl', '2rem', '3rem', '4rem', '5rem'],
                            zh: ['1xl', '1rem', '2rem', '3rem', '4rem'],
                        }}
                    >
                        {t('title')}
                    </CaptionText>
                </StackComponent>
            </Box>
        </Box>
    );
};

export default IndexBanner;