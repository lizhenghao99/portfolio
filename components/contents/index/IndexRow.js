import useTranslation from 'next-translate/useTranslation';
import { Fade } from 'react-awesome-reveal';
import TwoColumnGrid from '../../layouts/TwoColumnGrid';
import ImageComponent from '../../media/ImageComponent';
import IndexDescriptionStack from './IndexDescriptionStack';

const IndexRow = (props) => {
    const { t } = useTranslation('common');
    const { placement, rowMaxWidth, keyword, ratio, src, href } = props;
    const leftRow = (
        <Fade>
            <TwoColumnGrid>
                <IndexDescriptionStack
                    maxW={rowMaxWidth}
                    captionText={t(`index-page.${keyword}.caption`)}
                    bodyText={[
                        t(`index-page.${keyword}.body.l1`),
                        t(`index-page.${keyword}.body.l2`),
                    ]}
                    buttonText={t('learn-more')}
                    href={href}
                />
                <ImageComponent
                    ratio={ratio}
                    src={src}
                    quality={50}
                    maxW={rowMaxWidth}
                />
            </TwoColumnGrid>
        </Fade>
    );
    const rightRow = (
        <Fade>
            <TwoColumnGrid>
                <ImageComponent
                    ratio={ratio}
                    src={src}
                    quality={50}
                    maxW={rowMaxWidth}
                />
                <IndexDescriptionStack
                    maxW={rowMaxWidth}
                    captionText={t(`index-page.${keyword}.caption`)}
                    bodyText={[
                        t(`index-page.${keyword}.body.l1`),
                        t(`index-page.${keyword}.body.l2`),
                    ]}
                    buttonText={t('learn-more')}
                    href={href}
                />
            </TwoColumnGrid>
        </Fade>
    );

    return (
        <>
            {placement === 'left' && leftRow}
            {placement === 'right' && rightRow}
        </>
    );
};

export default IndexRow;