import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';


const CaptionText = (props) => {
    const { locale } = useRouter();
    return (
        <Text textStyle={locale === 'en' ? 'enCaption' : 'zhCaption'} {...props}>
            {props.children}
        </Text>
    );
};

export default CaptionText;