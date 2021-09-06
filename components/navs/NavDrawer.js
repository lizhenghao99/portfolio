import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Spacer,
    Stack,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import NextLink from 'next/link';
import { IoClose, IoMenu } from 'react-icons/io5';
import CaptionText from '../texts/CaptionText';

const NavDrawer = (props) => {
    const color = useColorModeValue('brand.800', 'brand.50');
    const bg = useColorModeValue('brand.100', '#4F665C');
    const hover = useColorModeValue('brand.50', '#485851');
    const { t } = useTranslation('common');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { onClick, ...rest } = props;

    const menuList = [
        {
            text: t('studio'),
            href: '/about',
        },
        {
            text: t('zhenghao'),
            href: '/about/zhenghao',
        },
        {
            text: t('jiusi'),
            href: '/about/jiusi',
        },
        {
            text: t('tom'),
            href: '/project',
        },
        {
            text: t('project-tower'),
            href: '/project/project-tower',
        },
        {
            text: t('contact'),
            href: '/contact',
        },
    ];

    return (
        <>
            <IconButton
                onClick={onOpen}
                isActive={isOpen}
                aria-label={'Main menu'}
                icon={<Icon as={isOpen ? IoClose : IoMenu} boxSize={'2rem'}/>}
                size={'md'}
                color={color}
                colorScheme={'brand'}
                variant={'ghost'}
                _focus={{ outline: 'None' }}
                sx={{ '-webkit-tap-highlight-color': 'transparent' }}
            >
            </IconButton>
            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent>
                    <Flex>
                        <DrawerHeader
                            px={'1rem'}
                            py={'0.25rem'}
                            fontFamily={'Ubuntu'}
                            fontSize={'3xl'}
                            minW={'15rem'}
                        >
                            2StackStudio
                        </DrawerHeader>
                        <Spacer/>
                        <IconButton
                            my={'0.5rem'}
                            mx={'0.5rem'}
                            aria-label={'Close'}
                            onClick={onClose}
                            size={'md'}
                            color={color}
                            colorScheme={'brand'}
                            variant={'ghost'}
                            icon={<Icon as={IoClose}
                                        boxSize={'2rem'}/>}
                            _focus={{ outline: 'None' }}
                            sx={{ '-webkit-tap-highlight-color': 'transparent' }}
                        />
                    </Flex>
                    <DrawerBody>
                        <Stack direction={'column'}>
                            {menuList.map((link, index) => (
                                <NextLink href={link.href} key={index}>
                                    <Button
                                        onClick={() => setTimeout(onClose, 200)}
                                        size={'md'}
                                        color={color}
                                        colorScheme={'brand'}
                                        variant={'ghost'}
                                        sx={{ '-webkit-tap-highlight-color': 'transparent' }}
                                        _hover={{ bg: hover }}
                                        _focus={{ bg: hover }}>
                                        <CaptionText fontSize={{ en: '2xl', zh: '2xl' }}>
                                            {link.text}
                                        </CaptionText>
                                    </Button>
                                </NextLink>
                            ))}
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default NavDrawer;