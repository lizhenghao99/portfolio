import { Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';


const ButtonText = (props) => {
    const { locale } = useRouter();
    const color = useColorModeValue('brand.800', 'brand.50');
    return (
        <Text
            textStyle={locale === 'en' ? 'enButton' : 'zhButton'}
            color={color}
            {...props}>
            {props.children}
        </Text>
    );
};

export default ButtonText;