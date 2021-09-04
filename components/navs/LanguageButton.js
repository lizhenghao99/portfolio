import { Button, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { IoLanguage } from 'react-icons/io5';

const LanguageButton = (props) => {
    const { pathname, locale } = useRouter();
    const color = useColorModeValue('brand.800', 'brand.50');
    return (
        <NextLink
            href={pathname}
            locale={locale === 'en' ? 'zh' : 'en'}
        >
            <Button
                size={'md'}
                minW={'7rem'}
                color={color}
                colorScheme={'brand'}
                variant={'ghost'}
                _focus={{ outline: 'None' }}
                leftIcon={<Icon as={IoLanguage} boxSize={'1.2rem'}/>}
                {...props}
            >
                <Text
                    fontSize={locale === 'en' ? 'lg' : 'sm'}
                    textStyle={locale === 'en' ? 'zhButton' : 'enButton'}
                    color={color}
                >
                    {locale === 'en' ? '中文' : 'English'}
                </Text>
            </Button>
        </NextLink>
    );
};

export default LanguageButton;
