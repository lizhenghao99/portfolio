import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';


const MenuText = (props) => {
    const { locale } = useRouter();
    return (
        <Text textStyle={locale === 'en' ? 'enMenu' : 'zhMenu'} textAlign={'justify'} {...props}>
            {props.children}
        </Text>
    );
};

export default MenuText;