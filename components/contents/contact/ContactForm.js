import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Spacer,
    Textarea,
} from '@chakra-ui/react';
import emailjs, { init } from 'emailjs-com';
import { Field, Form, Formik } from 'formik';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import * as Yup from 'yup';
import BodyText from '../../texts/BodyText';
import ButtonText from '../../texts/ButtonText';

const ContactForm = (props) => {
    init(process.env.NEXT_PUBLIC_EMAIL_USER_ID);
    const { t } = useTranslation('common');
    const [submitted, setSubmitted] = useState('');
    const inputColor = {
        borderColor: 'brand.200',
        _hover: { borderColor: 'brand.500' },
        focusBorderColor: 'brand.800',
    };

    const sendEmail = async (values, actions) => {
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
                values);
            actions.setSubmitting(false);
            setSubmitted(t('contact-page.form.submitted'));
        } catch (err) {
            actions.setSubmitting(false);
            setSubmitted(t('contact-page.form.error'));
        }
    };

    return (
        <>
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
                    onSubmit={(values, actions) => sendEmail(values, actions)}
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
                                        <Flex m={0}>
                                            <FormLabel htmlFor={'email'} mt={'2rem'}>
                                                <BodyText>
                                                    {t('contact-page.form.email')}
                                                </BodyText>
                                            </FormLabel>
                                            <Spacer/>
                                            <FormErrorMessage mt={'1.5rem'}>{form.errors.email}</FormErrorMessage>
                                        </Flex>
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
                            <Flex m={0}>
                                <Button
                                    mt={'5rem'}
                                    type={'submit'}
                                    isLoading={props.isSubmitting}
                                    size={'lg'}
                                    minW={'10rem'}
                                    colorScheme={'brand'}
                                    variant={'outline'}
                                    _focus={{ outline: 'None' }}
                                    {...props}
                                >
                                    <ButtonText>
                                        {t('contact-page.form.submit')}
                                    </ButtonText>
                                </Button>
                                <Spacer/>
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
                                    {submitted ? submitted : ''}
                                </BodyText>
                            </Flex>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>
    );
};

export default ContactForm;