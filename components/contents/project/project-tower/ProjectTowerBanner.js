import { Box, Stack } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import spell from '../../../../public/images/NewSpellSnapshot.png';
import ImageBanner from '../../../media/ImageBanner';
import CaptionText from '../../../texts/CaptionText';

const ProjectTowerBanner = (props) => {
    const { t } = useTranslation('common');
    return (
        <Box position={'relative'}>
            <ImageBanner
                ratio={[2, 2.4, 3]}
                brightness={0.5}
                src={spell}
                width={3317}
                height={1841}
                quality={'50'}
            />
            <Box position={'absolute'} top={'50%'} transform={'translateY(-50%)'} textAlign={'center'} w={'100%'}>
                <Stack
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
                        {t('project-page.project-tower.banner.l1')}
                    </CaptionText>
                    <CaptionText
                        maxW={'90%'}
                        color={'white'}
                        fontSize={{
                            en: ['lg', '2xl', '3xl', '4xl', '5xl'],
                            zh: ['1xl', '1.5rem', '2rem', '3rem', '4rem'],
                        }}
                    >
                        {t('project-page.project-tower.banner.l2')}
                    </CaptionText>
                </Stack>
            </Box>
        </Box>
    );
};

export default ProjectTowerBanner;