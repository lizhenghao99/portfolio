import { Center, GridItem } from '@chakra-ui/react';
import MultiColumnGrid from '../MultiColumnGrid';

const DescriptionGrid = (props) => {
    const { column, contents, ...rest } = props;
    const columns = [1, 1, 1, column, column];
    const templateColumns = columns.map((n) => (
        `repeat(${n}, 1fr)`
    ));

    return (
        <Center>
            <MultiColumnGrid
                templateColumns={templateColumns}
                maxW={'80%'}
                my={'3rem'}
                {...rest}
            >
                {contents.map((content, index) => (
                    <GridItem
                        key={index}
                        colSpan={1}>
                        {content}
                    </GridItem>
                ))}
            </MultiColumnGrid>
        </Center>
    );
};

export default DescriptionGrid;