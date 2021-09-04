import useTranslation from 'next-translate/useTranslation';
import logo from '../../../public/images/logo.png';
import ImageComponent from '../../images/ImageComponent';
import IndexDescriptionStack from './IndexDescriptionStack';
import IndexGrid from './IndexGrid';

const IndexStudioRow = (props) => {
    const { t } = useTranslation('common');
    const { rowMaxWidth } = props;
    return (
        <IndexGrid>
            <ImageComponent
                ratio={1}
                src={logo}
                width={1024}
                height={1024}
                quality={50}
                maxW={rowMaxWidth}
            />
            <IndexDescriptionStack
                maxW={rowMaxWidth}
                captionText={t('index-page.studio.caption')}
                bodyText={[
                    t('index-page.studio.body.l1'),
                    t('index-page.studio.body.l2'),
                ]}
                buttonText={t('learn-more')}
                href={'/about'}
            />
        </IndexGrid>
    );
};

export default IndexStudioRow;