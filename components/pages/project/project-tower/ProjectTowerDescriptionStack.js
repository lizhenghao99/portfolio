import StackComponent from '../../../layouts/StackComponent';
import BodyText from '../../../texts/BodyText';
import CaptionText from '../../../texts/CaptionText';

const ProjectTowerDescriptionStack = (props) => {
    const { captionText, bodyText, ...rest } = props;
    return (
        <StackComponent
            direction={'column'}
            spacing={'1rem'}
            align={'left'}
            {...rest}
        >
            <CaptionText
                fontSize={{
                    en: ['3xl', '5xl'],
                    zh: ['3xl', '5xl'],
                }}
            >
                {captionText}
            </CaptionText>
            {bodyText.map((text, index) => (
                <BodyText
                    key={index}
                    fontSize={{
                        en: ['md', 'lg'],
                        zh: ['xl', '1.6rem'],
                    }}
                    lineHeight={{
                        en: ['1.5rem', '2.5rem'],
                        zh: ['2.5rem', '3.5rem'],
                    }}
                >
                    {text}
                </BodyText>
            ))}
        </StackComponent>
    );
};

export default ProjectTowerDescriptionStack;