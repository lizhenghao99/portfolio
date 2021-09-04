import { Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';


const CaptionText = (props) => {
    const { locale } = useRouter();
    const { fontSize, ...rest } = props;
    const fontSizeValue = !fontSize ? null : locale === 'en' ? props.fontSize.en : props.fontSize.zh;
    const color = useColorModeValue('black', 'white');
    return (
        <Text
            textStyle={locale === 'en' ? 'enCaption' : 'zhCaption'}
            fontSize={fontSizeValue}
            color={color}
            {...rest}
        >
            {props.children}
        </Text>
    );
};

export default CaptionText;