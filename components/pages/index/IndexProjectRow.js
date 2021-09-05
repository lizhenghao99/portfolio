import logoBlack from '/public/images/logo-black.png';
import logoWhite from '/public/images/logo-white.png';
import { useColorModeValue } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import TwoColumnGrid from '../../layouts/TwoColumnGrid';
import ImageComponent from '../../media/ImageComponent';
import IndexDescriptionStack from './IndexDescriptionStack';

const IndexProjectRow = (props) => {
    const { t } = useTranslation('common');
    const { rowMaxWidth } = props;
    const logo = useColorModeValue(logoBlack, logoWhite);
    return (
        <TwoColumnGrid>
            <IndexDescriptionStack
                maxW={rowMaxWidth}
                captionText={t('index-page.project.caption')}
                bodyText={[
                    t('index-page.project.body.l1'),
                    t('index-page.project.body.l2'),
                ]}
                buttonText={t('learn-more')}
                href={'/project/project-tower'}
            />
            <ImageComponent
                ratio={1}
                src={logo}
                width={1024}
                height={1024}
                quality={50}
                maxW={rowMaxWidth}
            />
        </TwoColumnGrid>
    );
};

export default IndexProjectRow;