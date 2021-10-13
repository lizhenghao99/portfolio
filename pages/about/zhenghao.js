import profile from '/public/images/zhenghao-profile.jpg';
import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import AboutBanner from '../../components/contents/about/AboutBanner';
import DescriptionGrid from '../../components/layouts/description/DescriptionGrid';
import DescriptionStack from '../../components/layouts/description/DescriptionStack';
import BodyText from '../../components/texts/BodyText';

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

    const contents = [
        <DescriptionStack
            key={'1'}
            captionText={t('about-page.zhenghao.left.caption')}
            bodyText={[
                t('about-page.zhenghao.left.body.l1'),
                t('about-page.zhenghao.left.body.l1'),
            ]}
        />,
        <Box key={'2'}>
            <DescriptionStack
                captionText={t('about-page.zhenghao.mid.caption')}
                bodyText={[t('about-page.zhenghao.mid.body.l1')]}
            />
            <UnorderedList mt={'1.5rem'} spacing={'1rem'}>
                <ListItem>
                    <BodyText
                        fontSize={listItemFontSize}
                        lineHeight={listItemLineHeight}
                    >
                        {t('about-page.zhenghao.mid.body.l1')}
                    </BodyText>
                </ListItem>
                <ListItem>
                    <BodyText
                        fontSize={listItemFontSize}
                        lineHeight={listItemLineHeight}
                    >
                        {t('about-page.zhenghao.mid.body.l1')}
                    </BodyText>
                </ListItem>
                <ListItem>
                    <BodyText
                        fontSize={listItemFontSize}
                        lineHeight={listItemLineHeight}
                    >
                        {t('about-page.zhenghao.mid.body.l1')}
                    </BodyText>
                </ListItem>
            </UnorderedList>
        </Box>,
        <DescriptionStack
            key={'3'}
            captionText={t('about-page.zhenghao.right.caption')}
            bodyText={[
                t('about-page.zhenghao.right.body.l1'),
                t('about-page.zhenghao.right.body.l1'),
            ]}
        />,
    ];

    return (
        <>
            <AboutBanner src={profile} title={t('tech-stack')} name={t('zhenghao')}/>
            <DescriptionGrid column={3} contents={contents} gap={['3rem', '4rem']} alignItems={'top'}/>
        </>
    );
};

export default Zhenghao;