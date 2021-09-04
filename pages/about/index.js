import { Box, Spacer, StackDivider } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import StackComponent from '../../components/layouts/StackComponent';
import TextBlock from '../../components/layouts/TextBlock';
import ActionButton from '../../components/navs/ActionButton';
import BodyText from '../../components/texts/BodyText';
import CaptionText from '../../components/texts/CaptionText';


const Index = (props) => {
        const { t } = useTranslation('common');
        return (
            <TextBlock spacing={'3rem'}>
                <CaptionText>
                    {t('about-page.studio.caption')}
                </CaptionText>
                <BodyText>
                    {t('about-page.studio.body.l1')}
                    <Box minH={'3rem'}/>
                    {t('about-page.studio.body.l2')}
                </BodyText>
                <Spacer minH={'2rem'}/>
                <CaptionText>
                    {t('about-page.us.caption')}
                </CaptionText>
                <StackComponent
                    direction={['column', 'column', 'column', 'row']}
                    spacing={'10%'}
                    align={'center'}
                    divider={<StackDivider borderColor={'gray.400'}/>}
                >
                    <StackComponent direction={'column'} spacing={'3rem'} align={'stretch'}>
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
                    </StackComponent>
                    <StackComponent direction={'column'} spacing={'3rem'} align={'stretch'}>
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
                    </StackComponent>
                </StackComponent>
            </TextBlock>
        );
    }
;

export default Index;
;