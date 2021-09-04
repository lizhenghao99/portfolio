import { Center, useColorModeValue } from '@chakra-ui/react';
import BodyText from '../texts/BodyText';
import StackComponent from './StackComponent';

const Footer = (props) => {
    const bg = useColorModeValue('black', 'white');
    const color = useColorModeValue('white', 'black');
    const footerInfos = [
        '1929 Beloit Ave, Los Angeles',
        ' (206) 369-7158',
        'twostackstudio@outlook.com',
    ];
    return (
        <Center bg={bg}>
            <StackComponent
                direction={['column', 'column', 'row']}
                spacing={['0', '0', '4rem', '10rem']}
                align={'center'}
            >
                {footerInfos.map((text, index) => (
                    <BodyText
                        py={['0', '0', '1rem']}
                        key={index}
                        color={color}
                        textStyle={'enBody'}
                        fontSize={{
                            en: ['sm', 'md'],
                            zh: ['sm', 'md'],
                        }}
                    >
                        {text}
                    </BodyText>
                ))}
            </StackComponent>
        </Center>
    );
};

export default Footer;