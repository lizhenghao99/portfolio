import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';


const BodyText = (props) => {
    const { locale } = useRouter();
    const { fontSize, ...rest } = props;
    const fontSizeValue = !fontSize ? null : locale === 'en' ? props.fontSize.en : props.fontSize.zh;
    return (
        <Text textStyle={locale === 'en' ? 'enBody' : 'zhBody'}
              fontSize={fontSizeValue}
              textAlign={'justify'}
              {...rest}>
            {props.children}
        </Text>
    );
};

export default BodyText;