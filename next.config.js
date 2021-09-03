// noinspection JSValidateTypes

const nextTranslate = require('next-translate');

module.exports = nextTranslate({
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'zh'],
        defaultLocale: 'en',
    },
});


