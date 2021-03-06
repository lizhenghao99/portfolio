import { Box, Center, Stack } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import TextBlock from '../../components/layouts/TextBlock';
import TwoColumnGrid from '../../components/layouts/TwoColumnGrid';
import ActionButton from '../../components/navs/ActionButton';
import BodyText from '../../components/texts/BodyText';
import CaptionText from '../../components/texts/CaptionText';


const Index = (props) => {
        const { t } = useTranslation('common');
        return (
            <TextBlock spacing={['2rem', '3rem']} mx={{ base: '2rem', lg: '10rem' }}>
                <CaptionText>
                    {t('about-page.studio.caption')}
                </CaptionText>
                <BodyText>
                    {t('about-page.studio.body.l1')}
                    <Box minH={['2rem', '3rem']}/>
                    {t('about-page.studio.body.l2')}
                </BodyText>
                <Box minH={['1rem', '3rem']}/>
                <CaptionText>
                    {t('about-page.us.caption')}
                </CaptionText>
                <Center>
                    <TwoColumnGrid
                        mx={0}
                        w={'100%'}
                        spacingY={'5rem'}
                        spacingX={'10rem'}
                        alignItems={'flex-start'}
                    >
                        <Stack
                            direction={'column'}
                            spacing={['1rem', '3rem']}
                            align={'stretch'}>
                            <BodyText fontSize={{
                                en: ['xl', '3xl'],
                                zh: ['2xl', '4xl'],
                            }}>
                                {t('zhenghao')}
                            </BodyText>
                            <BodyText>
                                {t('about-page.us.zhenghao')}
                            </BodyText>
                            <ActionButton href={'/about/zhenghao'}>
                                {t('learn-more')}
                            </ActionButton>
                        </Stack>
                        <Stack direction={'column'}
                               spacing={['1rem', '3rem']}
                               align={'stretch'}>
                            <BodyText fontSize={{
                                en: ['xl', '3xl'],
                                zh: ['2xl', '4xl'],
                            }}>
                                {t('jiusi')}
                            </BodyText>
                            <BodyText>
                                {t('about-page.us.jiusi')}
                            </BodyText>
                            <ActionButton href={'/about/jiusi'}>
                                {t('learn-more')}
                            </ActionButton>
                        </Stack>
                    </TwoColumnGrid>
                </Center>
            </TextBlock>
        );
    }
;

export default Index;
;