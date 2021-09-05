import { Grid } from '@chakra-ui/react';

const MultiColumnGrid = (props) => {
    return (
        <Grid
            w={'100%'}
            mx={['1rem', '2rem', '5rem', '8rem']}
            templateColumns={props.templateColumns}
            gap={['1rem', '5rem']}
            alignItems={'center'}
            {...props}
        >
        </Grid>
    );
};

export default MultiColumnGrid;