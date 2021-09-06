import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Spacer,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { IoClose, IoMenu } from 'react-icons/io5';
import CaptionText from '../texts/CaptionText';

const NavDrawer = (props) => {
    const color = useColorModeValue('brand.800', 'brand.50');
    const bg = useColorModeValue('brand.100', '#4F665C');
    const hover = useColorModeValue('brand.50', '#485851');
    const { t } = useTranslation('common');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { onClick, ...rest } = props;

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
                            borderBottomWidth="1px"
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
                        <CaptionText>Some contents...</CaptionText>
                        <CaptionText>Some contents...</CaptionText>
                        <CaptionText>Some contents...</CaptionText>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default NavDrawer;