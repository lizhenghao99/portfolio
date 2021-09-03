import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

function BodyText(props) {
    const { locale } = useRouter();
    return (
        <Text textStyle={locale === 'en' ? 'enBody' : 'zhBody'} textAlign={'justify'} {...props}>
            {props.children}
        </Text>
    );
}

export default BodyText;