// noinspection HtmlRequiredTitleElement

import { Box } from '@chakra-ui/react';

import useTranslation from 'next-translate/useTranslation';
import ContactForm from '../components/contents/contact/ContactForm';
import DescriptionStack from '../components/layouts/description/DescriptionStack';
import TwoColumnGrid from '../components/layouts/TwoColumnGrid';

const Contact = (props) => {
    const { t } = useTranslation('common');
    const captionText = t('contact-page.caption');
    const bodyText = [
        '', '', '', '', '', '', '', '',
        t('contact-page.body.l1'),
        t('contact-page.body.l2'),
        '', '', '', '',
        t('contact-page.body.l3'),
        t('contact-page.body.l4'),
    ];
    return (
        <>
            <TwoColumnGrid
                spacingX={0}
                spacingY={'5rem'}
                mt={['3rem', '5rem']}
                mb={'5rem'}
                alignItems={'top'}
            >
                <Box
                    alignItems={'top'}
                    mx={['0rem', '2rem', '2rem', '5rem', '8rem']}
                >
                    <DescriptionStack
                        mt={0}
                        spacing={'0.5rem'}
                        captionText={captionText}
                        bodyText={bodyText}
                    />
                </Box>
                <ContactForm/>
            </TwoColumnGrid>
        </>
    );
};

export default Contact;