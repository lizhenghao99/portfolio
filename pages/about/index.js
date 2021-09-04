import { Box, Spacer, StackDivider } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import ActionButton from '../../components/ActionButton';
import BodyText from '../../components/BodyText';
import CaptionText from '../../components/CaptionText';
import StackComponent from '../../components/StackComponent';
import TextBlock from '../../components/TextBlock';


const Index = (props) => {
        const { t } = useTranslation('common');
        return (
            <TextBlock spacing={'3rem'}>
                <CaptionText>
                    {t('studio-name')}
                </CaptionText>
                <BodyText>
                    {t('studio-intro.l1')}
                    <Box minH={'3rem'}/>
                    {t('studio-intro.l2')}
                </BodyText>
                <Spacer minH={'2rem'}/>
                <CaptionText>
                    {t('us')}
                </CaptionText>
                <StackComponent
                    direction={['column', 'column', 'column', 'row']}
                    spacing={'10%'}
                    align={'center'}
                    divider={<StackDivider borderColor={'gray.500'}/>}
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