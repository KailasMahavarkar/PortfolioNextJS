import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import Head from "next/head";
import "@/styles/global.css";

import { Roboto } from 'next/font/google'
const roboto = Roboto({
    weight: ['500'],
    subsets: ['latin'],
})


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
            </Head>

            <Layout className={roboto.className}>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
