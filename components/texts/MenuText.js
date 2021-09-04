import { Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';


const MenuText = (props) => {
    const { locale } = useRouter();
    const color = useColorModeValue('black', 'white');
    return (
        <Text
            textStyle={locale === 'en' ? 'enMenu' : 'zhMenu'}
            textAlign={'justify'}
            color={color}
            {...props}
        >
            {props.children}
        </Text>
    );
};

export default MenuText;