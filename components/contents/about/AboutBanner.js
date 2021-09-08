import { Box, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import ProfileImage from '../../media/ProfileImage';
import CaptionText from '../../texts/CaptionText';

const AboutBanner = (props) => {
    const { locale } = useRouter();
    const { src, name, title } = props;
    return (
        <Box bg={'black'} px={'5rem'} pt={'6rem'} pb={'4rem'}>
            <Stack direction={'column'} align={'center'} spacing={0}>
                <ProfileImage
                    boxSize={'15rem'}
                    ratio={1}
                    src={src}
                    quality={50}
                    borderRadius={'full'}
                />
                <Box minH={'2rem'}/>
                <CaptionText
                    fontSize={{ en: ['3xl', '4xl'], zh: ['3xl', '4xl'] }}
                    color={'white'}
                    lineHeight={'1rem'}
                >
                    {title}
                </CaptionText>
                {locale === 'zh' && <Box minH={'1.5rem'}/>}
                <CaptionText
                    fontSize={{ en: ['5xl', '6xl'], zh: ['6xl', '4.5rem'] }}
                    color={'white'}
                >
                    {name}
                </CaptionText>
            </Stack>
        </Box>
    );
};

export default AboutBanner;