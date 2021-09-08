import { Center, GridItem } from '@chakra-ui/react';
import MultiColumnGrid from '../MultiColumnGrid';
import DescriptionStack from './DescriptionStack';

const DescriptionGrid = (props) => {
    const { column, texts } = props;
    const columns = [1, 1, 1, column, column];
    const templateColumns = columns.map((n) => (
        `repeat(${n}, 1fr)`
    ));

    return (
        <Center>
            <MultiColumnGrid templateColumns={templateColumns} maxW={'80%'} my={'3rem'}>
                {texts.map((text, index) => (
                    <GridItem
                        key={index}
                        colSpan={1}>
                        <DescriptionStack
                            captionText={text.captionText}
                            bodyText={text.bodyText}
                        />
                    </GridItem>
                ))}
            </MultiColumnGrid>
        </Center>
    );
};

export default DescriptionGrid;