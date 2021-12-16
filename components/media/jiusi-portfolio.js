import TwoColumnGrid from '../layouts/TwoColumnGrid';
import ImageComponent from './ImageComponent';

const JiusiPortfolio = (props) => {
    const basePath = '/images/jiusi-portfolio/';
    const sources = [
        '1Perspective1.png',
        '1Perspective2.png',
        '2CharDesign.png',
        '2CharDesign1.png',
        '2PropDesign1.png',
        '3CharDesign1.png',
        '3CharDesign2.png',
        '3CharDesign3.png',
        '3CharDesign4.png',
        '3CharDesign5.png',
        '4CharDesign1.png',
        '4PropDesign1.png',
        '4PropDesign2.png',
        '5Fig1.png',
        '5Fig2.png',
        '5Fig3.png',
        '5Fig4.png',
        '5Fig5.png',
    ];

    return (
        <TwoColumnGrid align={'center'} spacingX={'0'} m={'0'}>
            {sources.map((value, index) => (
                <ImageComponent
                    maxW={'100%'}
                    key={index}
                    ratio={16 / 9}
                    src={basePath + value}
                    placeHolder={'empty'}
                    quality={10}
                >
                </ImageComponent>
            ))}
        </TwoColumnGrid>
    );
};

export default JiusiPortfolio;