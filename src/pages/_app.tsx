import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react';

import 'styles/global.scss'

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    return (
        <>
            <Head>
                <title>Christianto Chen</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
