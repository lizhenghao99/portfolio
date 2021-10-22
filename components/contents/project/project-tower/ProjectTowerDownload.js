import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Button, Link, useColorModeValue } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import StackSkeleton from '../../../layouts/StackSkeleton';
import ItchComponent from '../../../media/ItchComponent';
import BodyText from '../../../texts/BodyText';
import ButtonText from '../../../texts/ButtonText';
import CaptionText from '../../../texts/CaptionText';

const ProjectTowerDownload = (props) => {
    const vStackSpacing = ['1rem', '3rem'];
    const { t } = useTranslation('common');
    const desktopText = t('project-page.project-tower.download.body.l1');
    const webText = [
        t('project-page.project-tower.download.body.l2'),
    ];
    const { locale } = useRouter();
    const buttonTextColor = useColorModeValue('white', 'gray.800');
    const href = 'https://itch.io/embed-upload/4646438?color=1F2623';
    return (
        <StackSkeleton
            direction={'column'}
            spacing={vStackSpacing}
            align={'center'}
        >
            <CaptionText
                maxW={'85%'}
                fontSize={{
                    en: ['3xl', '5xl'],
                    zh: ['3xl', '5xl'],
                }}
            >
                {t('project-page.project-tower.download.caption')}
            </CaptionText>
            <BodyText
                maxW={'85%'}
                fontSize={{
                    en: ['lg', '2xl'],
                    zh: ['xl', '3xl'],
                }}
            >
                {desktopText}
            </BodyText>
            <ItchComponent maxW={'90%'} mb={vStackSpacing}/>
            {webText.map((text, index) => (
                <BodyText
                    key={index}
                    maxW={'85%'}
                    fontSize={{
                        en: ['lg', '2xl'],
                        zh: ['xl', '3xl'],
                    }}
                >
                    {text}
                </BodyText>
            ))}
            <Button
                as={Link}
                href={href}
                isExternal={true}
                size={'lg'}
                minW={'5rem'}
                colorScheme={'brand'}
                variant={'solid'}
                _focus={{ outline: 'None' }}
                rightIcon={<ExternalLinkIcon boxSize={'1.5rem'}/>}
            >
                <ButtonText color={buttonTextColor} textStyle={locale === 'en' ? 'enBody' : 'zhBody'}>
                    {t('project-page.project-tower.download.button')}
                </ButtonText>
            </Button>
        </StackSkeleton>
    );
};

export default ProjectTowerDownload;