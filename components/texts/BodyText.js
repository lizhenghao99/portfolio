import { Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';


const BodyText = (props) => {
    const { locale } = useRouter();
    const { fontSize, lineHeight, ...rest } = props;
    const fontSizeValue = !fontSize ? null : locale === 'en' ? props.fontSize.en : props.fontSize.zh;
    const lineHeightValue = !lineHeight ? null : locale === 'en' ? props.lineHeight.en : props.lineHeight.zh;
    const color = useColorModeValue('black', 'white');
    return (
        <Text
            textStyle={locale === 'en' ? 'enBody' : 'zhBody'}
            fontSize={fontSizeValue}
            lineHeight={lineHeightValue}
            textAlign={['left', 'left', 'justify']}
            color={color}
            {...rest}>
            {props.children}
        </Text>
    );
};

export default BodyText;