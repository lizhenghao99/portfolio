// contents/_document.js

import theme from '/themes/theme';
import { ColorModeScript } from '@chakra-ui/react';
import { extractCritical } from '@emotion/server';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
    static async getInitialProps({ renderPage }) {
        const page = renderPage();
        const styles = extractCritical(page.html);
        return {
            ...page,
            ...styles,
        };
    }

    constructor(props) {
        super(props);
        const { __NEXT_DATA__, ids } = props;
        if (ids) {
            __NEXT_DATA__.ids = ids;
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <style dangerouslySetInnerHTML={{ __html: this.props.css }}/>
                </Head>
                <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}