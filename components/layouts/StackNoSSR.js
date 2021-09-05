import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const StackNoSSR = (props) => {
    const { onLoaded, ...rest } = props;

    const MyStackNoSSR = dynamic(
        () => (import('@chakra-ui/react').then((obj) => obj.Stack)),
        { ssr: false },
    );

    useEffect(() => {
        onLoaded();
    });

    return (
        <MyStackNoSSR {...rest}>
            {props.children}
        </MyStackNoSSR>
    );
};

export default StackNoSSR;