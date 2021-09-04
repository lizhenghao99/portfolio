import useTranslation from 'next-translate/useTranslation';
import logo from '../../../public/images/logo.png';
import ImageComponent from '../../images/ImageComponent';
import IndexDescriptionStack from './IndexDescriptionStack';
import IndexGrid from './IndexGrid';

const IndexProjectRow = (props) => {
    const { t } = useTranslation('common');
    const { rowMaxWidth } = props;
    return (
        <IndexGrid>
            <IndexDescriptionStack
                maxW={rowMaxWidth}
                captionText={t('index-page.project.caption')}
                bodyText={[
                    t('index-page.project.body.l1'),
                    t('index-page.project.body.l2'),
                ]}
                buttonText={t('learn-more')}
                href={'/project'}
            />
            <ImageComponent
                ratio={1}
                src={logo}
                width={1024}
                height={1024}
                quality={50}
                maxW={rowMaxWidth}
            />

        </IndexGrid>
    );
};

export default IndexProjectRow;