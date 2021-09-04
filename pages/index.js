import feature from '/public/images/feature.png';
import { Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import CaptionText from '../components/CaptionText';
import ImageBanner from '../components/ImageBanner';
import StackComponent from '../components/StackComponent';

const Home = (props) => {
    const { t } = useTranslation('common');
    return (
        <Box>
            <ImageBanner
                ratio={5 / 2}
                brightness={0.5}
                src={feature}
                width={3317}
                height={1841}
                quality={'50'}
            />
            <Box position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} w={'100%'}>
                <StackComponent
                    direction={'column'}
                    spacing={['0', '3rem', '4rem', '5rem']}
                    align={'center'}
                    mt={['0', '0.5rem', '1rem', '4rem']}>
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

export default Home;
