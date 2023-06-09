import Document, { html, Head, Main, NextScript, Html } from 'next/document'

class NewDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps =  await Document.getInitialProps(ctx)
        return { ...initialProps}
    }
    render () {
        return(
            <Html>
            <Head>
                ​<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
             </Html>
        )
    }
}

export default NewDocument
