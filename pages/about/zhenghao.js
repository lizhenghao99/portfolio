import { Box, Button, Flex, Link, ListItem, Spacer, UnorderedList, useBreakpointValue, VStack } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AboutBanner from '../../components/contents/about/AboutBanner';
import DescriptionGrid from '../../components/layouts/description/DescriptionGrid';
import DescriptionStack from '../../components/layouts/description/DescriptionStack';
import BodyText from '../../components/texts/BodyText';
import profile from '../../public/images/zhenghao-profile.jpg';

const Zhenghao = (props) => {
    const { t } = useTranslation('common');
    const listItemFontSize = {
        en: ['md', 'md', 'md', 'lg'],
        zh: ['xl', 'xl', 'xl', 'xl', '1.6rem'],
    };
    const listItemLineHeight = {
        en: ['1.5rem', '2rem'],
        zh: ['2.5rem', '3rem'],
    };
    const linkedinHref = 'https://www.linkedin.com/in/zhenghao-li-lotus';
    const githubHref = 'https://github.com/lizhenghao99';
    const socialButtonW = useBreakpointValue({ base: '8rem', lg: '10rem' });

    const contents = [
        <DescriptionStack
            key={'1'}
            captionText={t('about-page.zhenghao.left.caption')}
            bodyText={
                [...Array(2).keys()].map(value => t(`about-page.zhenghao.left.body.l${value + 1}`))
            }
        />,
        <Box key={'2'}>
            <DescriptionStack
                captionText={t('about-page.zhenghao.mid.caption')}
                bodyText={[t('about-page.zhenghao.mid.body.l0')]}
            />
            <UnorderedList mt={'1.5rem'} spacing={'1rem'}>
                {[...Array(5).keys()].map((value) => (
                    <ListItem key={'mid' + value}>
                        <BodyText
                            fontSize={listItemFontSize}
                            lineHeight={listItemLineHeight}
                        >
                            {t(`about-page.zhenghao.mid.body.l${value + 1}`)}
                        </BodyText>
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>,
        <VStack key={'3'} spacing={'1rem'}>
            <DescriptionStack
                captionText={t('about-page.zhenghao.right.caption')}
                bodyText={
                    [...Array(2).keys()].map(value => t(`about-page.zhenghao.right.body.l${value + 1}`))
                }
            />
            <Flex minW={'100%'}>
                <Button
                    as={Link}
                    href={linkedinHref}
                    isExternal={true}
                    colorScheme={'linkedin'}
                    _focus={{ outline: 'None' }}
                    leftIcon={<FaLinkedin/>}
                    minW={socialButtonW}
                >
                    LinkedIn
                </Button>
                <Spacer/>
                <Button
                    as={Link}
                    href={githubHref}
                    isExternal={true}
                    colorScheme={'realGray'}
                    _focus={{ outline: 'None' }}
                    leftIcon={<FaGithub/>}
                    minW={socialButtonW}
                >
                    GitHub
                </Button>
            </Flex>
        </VStack>,
    ];

    return (
        <>
            <AboutBanner src={profile} title={t('tech-stack')} name={t('zhenghao')}/>
            <DescriptionGrid column={3} contents={contents} gap={['3rem', '4rem']} alignItems={'top'}/>
        </>
    );
};

export default Zhenghao;