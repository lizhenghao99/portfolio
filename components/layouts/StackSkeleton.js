import { Skeleton } from '@chakra-ui/react';
import { useState } from 'react';
import StackNoSSR from './StackNoSSR';

const StackSkeleton = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <Skeleton isLoaded={isLoaded}>
            <StackNoSSR
                onLoaded={() => setIsLoaded(true)}
                {...props}
            >
                {props.children}
            </StackNoSSR>
        </Skeleton>
    );
};

export default StackSkeleton;