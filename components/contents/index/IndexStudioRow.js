import logoBlack from '/public/images/logo-black.png';
import logoWhite from '/public/images/logo-white.png';
import { useColorModeValue } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import ButtonDescriptionStack from '../../layouts/description/ButtonDescriptionStack';
import TwoColumnGrid from '../../layouts/TwoColumnGrid';
import ImageComponent from '../../media/ImageComponent';

const IndexStudioRow = (props) => {
    const { t } = useTranslation('common');
    const { rowMaxWidth } = props;
    const logo = useColorModeValue(logoBlack, logoWhite);
    return (
        <TwoColumnGrid>
            <ImageComponent
                ratio={1}
                src={logo}
                width={1024}
                height={1024}
                quality={50}
                maxW={rowMaxWidth}
            />
            <ButtonDescriptionStack
                maxW={rowMaxWidth}
                captionText={t('index-page.studio.caption')}
                bodyText={[
                    t('index-page.studio.body.l1'),
                    t('index-page.studio.body.l2'),
                ]}
                buttonText={t('learn-more')}
                href={'/about'}
            />
        </TwoColumnGrid>
    );
};

export default IndexStudioRow;