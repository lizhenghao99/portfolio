import { Box, Spacer, StackDivider, VStack } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import dynamic from 'next/dynamic';
import ActionButton from '../../components/ActionButton';
import BodyText from '../../components/BodyText';
import CaptionText from '../../components/CaptionText';
import TextBlock from '../../components/TextBlock';


const Index = (props) => {
        const { t } = useTranslation('common');
        const StackNoSSR = dynamic(
            () => (import('@chakra-ui/react').then((obj) => obj.Stack)),
            { ssr: false },
        );
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
                <StackNoSSR
                    direction={['column', 'column', 'column', 'row']}
                    spacing={'10%'}
                    align={'center'}
                    divider={<StackDivider borderColor={'gray.500'}/>}
                >
                    <VStack spacing={'3rem'} align={'stretch'}>
                        <BodyText>
                            {t('zhenghao')}
                            <Box minH={'3rem'}/>
                            sadfsdafasdfasdfasdfasdfasdfas
                            <Box minH={'3rem'}/>
                            sadfasdfasdfasdfsadfsdfasdffa
                        </BodyText>
                        <ActionButton href={'/about/zhenghao'}>
                            {t('learn-more')}
                        </ActionButton>
                    </VStack>
                    <VStack spacing={'3rem'} align={'stretch'}>
                        <BodyText>
                            {t('jiusi')}
                            <Box minH={'3rem'}/>
                            sadfsdafasdfasdfasdfasdfasdfas
                            <Box minH={'3rem'}/>
                            sadfasdfasdfasdfsadfsdfasdffa
                        </BodyText>
                        <ActionButton href={'/about/jiusi'}>
                            {t('learn-more')}
                        </ActionButton>
                    </VStack>
                </StackNoSSR>
            </TextBlock>
        );
    }
;

export default Index;
;