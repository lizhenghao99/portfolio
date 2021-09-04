import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';


const ButtonText = (props) => {
    const { locale } = useRouter();
    return (
        <Text textStyle={locale === 'en' ? 'enButton' : 'zhButton'} {...props}>
            {props.children}
        </Text>
    );
};

export default ButtonText;