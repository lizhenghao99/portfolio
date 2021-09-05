import { Box, Stack, StackDivider } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import TextBlock from '../../components/layouts/TextBlock';
import ActionButton from '../../components/navs/ActionButton';
import BodyText from '../../components/texts/BodyText';
import CaptionText from '../../components/texts/CaptionText';


const Index = (props) => {
        const { t } = useTranslation('common');
        return (
            <TextBlock spacing={['2rem', '3rem']}>
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
                <Stack
                    direction={['column', 'column', 'column', 'row']}
                    spacing={['10%', '10%', '5%', '7%', '10%']}
                    align={'center'}
                    divider={<StackDivider borderColor={'gray.400'}/>}
                >
                    <Stack
                        direction={'column'}
                        spacing={['1rem', '3rem']}
                        align={'stretch'}>
                        <BodyText>
                            {t('zhenghao')}
                        </BodyText>
                        <BodyText>
                            sadfsdafasdfasdfasdfasdfasdfas
                            sadfasdfasdfasdfsadfsdfasdffa
                        </BodyText>
                        <ActionButton href={'/about/zhenghao'}>
                            {t('learn-more')}
                        </ActionButton>
                    </Stack>
                    <Stack direction={'column'} spacing={'3rem'} align={'stretch'}>
                        <BodyText>
                            {t('jiusi')}
                        </BodyText>
                        <BodyText>
                            sadfsdafasdfasdfasdfasdfasdfas
                            sadfasdfasdfasdfsadfsdfasdffa
                        </BodyText>
                        <ActionButton href={'/about/jiusi'}>
                            {t('learn-more')}
                        </ActionButton>
                    </Stack>
                </Stack>
            </TextBlock>
        );
    }
;

export default Index;
;