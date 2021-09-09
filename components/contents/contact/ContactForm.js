import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Textarea,
    useBreakpointValue,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import * as Yup from 'yup';
import TwoColumnGrid from '../../layouts/TwoColumnGrid';
import BodyText from '../../texts/BodyText';
import ButtonText from '../../texts/ButtonText';

const ContactForm = (props) => {
    const { t } = useTranslation('common');
    const [submitted, setSubmitted] = useState(false);
    const inputColor = {
        borderColor: 'brand.200',
        _hover: { borderColor: 'brand.500' },
        focusBorderColor: 'brand.800',
    };
    const formAlertSpacing = useBreakpointValue({ base: '2rem', md: '5rem', xl: '10rem' });
    return (
        <Box
            // minW={['10rem', '20rem', '30rem', '30rem', '30rem']}
            alignItems={'left'}
            mx={['0rem', '2rem', '2rem', '5rem', '8rem']}>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                validationSchema={Yup.object({
                    name: Yup.string(),
                    email: Yup.string()
                        .email(t('contact-page.form.email-invalid'))
                        .required(t('contact-page.form.required')),
                    message: Yup.string(),
                })}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        actions.setSubmitting(false);
                        setSubmitted(true);
                    }, 1000);
                }}
            >
                {(props) => (
                    <Form>
                        <Field name={'name'}>
                            {({ field, form }) => (
                                <FormControl
                                    isInvalid={form.errors.name && form.touched.name}
                                >
                                    <FormLabel htmlFor={'name'}>
                                        <BodyText>
                                            {t('contact-page.form.name')}
                                        </BodyText>
                                    </FormLabel>
                                    <Input
                                        {...inputColor}
                                        {...field}
                                        id={'name'}
                                        placeholder={t('contact-page.form.name-placeholder')}/>
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name={'email'}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <TwoColumnGrid
                                        alignItems={'left'}
                                        m={0}
                                        spacingX={formAlertSpacing}
                                        columns={2}
                                    >
                                        <FormLabel htmlFor={'email'} mt={'2rem'}>
                                            <BodyText>
                                                {t('contact-page.form.email')}
                                            </BodyText>
                                        </FormLabel>
                                        <FormErrorMessage mt={'1.5rem'}>{form.errors.email}</FormErrorMessage>
                                    </TwoColumnGrid>
                                    <Input
                                        {...inputColor}
                                        {...field}
                                        id={'email'}
                                        placeholder={t('contact-page.form.email-placeholder')}
                                    />
                                </FormControl>
                            )}
                        </Field>
                        <Field name={'message'}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.message && form.touched.message}>
                                    <FormLabel htmlFor={'message'} mt={'2rem'}>
                                        <BodyText>
                                            {t('contact-page.form.message')}
                                        </BodyText>
                                    </FormLabel>
                                    <Textarea
                                        {...inputColor}
                                        {...field}
                                        id={'message'}
                                        placeholder={t('contact-page.form.message-placeholder')}/>
                                    <FormErrorMessage>{form.errors.message}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <TwoColumnGrid
                            alignItems={'left'}
                            m={0}
                            spacingX={formAlertSpacing}
                            columns={2}
                        >
                            <Button
                                mt={'5rem'}
                                type={'submit'}
                                isLoading={props.isSubmitting}
                                size={'lg'}
                                minW={'5rem'}
                                colorScheme={'brand'}
                                variant={'outline'}
                                _focus={{ outline: 'None' }}
                                {...props}
                            >
                                <ButtonText>
                                    {t('contact-page.form.submit')}
                                </ButtonText>
                            </Button>
                            {submitted && (
                                <BodyText
                                    mt={'6rem'}
                                    fontSize={{
                                        en: ['lg', 'xl'],
                                        zh: ['xl', '2xl'],
                                    }}
                                    lineHeight={{
                                        en: ['1rem'],
                                        zh: ['1rem'],
                                    }}
                                >
                                    {t('contact-page.form.submitted')}
                                </BodyText>
                            )}
                        </TwoColumnGrid>
                    </Form>
                )}
            </Formik>

        </Box>
    );
};

export default ContactForm;