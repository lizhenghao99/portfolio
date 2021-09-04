import { Icon, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { IoMoon, IoSunny } from 'react-icons/io5';

const ColorModeButton = (props) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const icon = colorMode === 'light' ? IoMoon : IoSunny;
    const color = useColorModeValue('brand.800', 'brand.50');
    return (
        <IconButton
            aria-label={'Color mode'}
            icon={<Icon as={icon}/>}
            onClick={toggleColorMode}
            size={'md'}
            color={color}
            colorScheme={'brand'}
            variant={'ghost'}
            _focus={{ outline: 'None' }}
            {...props}
        />
    );
};

export default ColorModeButton;