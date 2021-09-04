import dynamic from 'next/dynamic';

const StackComponent = (props) => {
    const StackNoSSR = dynamic(
        () => (import('@chakra-ui/react').then((obj) => obj.Stack)),
        { ssr: false },
    );
    return (
        <StackNoSSR {...props}>
            {props.children}
        </StackNoSSR>
    );
};

export default StackComponent;