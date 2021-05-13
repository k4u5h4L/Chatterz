import React from "react";

import Head from "next/head";
import { Provider } from "next-auth/client";
import type { AppProps /*, AppContext */ } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "@/graphql/apolloClient";

import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
    const client = useApollo();

    return (
        <Provider session={pageProps.session}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    content="A React, TypeScript, Next.js based chat app"
                    name="description"
                />
                <meta content="Chatterz" name="title" />
                <meta name="theme-color" content="#ffffff" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link
                    rel="icon"
                    type="shortcut icon"
                    sizes="16x16"
                    href="/favicon.ico"
                />
                <link rel="manifest" href="/manifest.json" />
                <title>Chatterz</title>
            </Head>
            <NextNprogress
                color="#21aa93"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        </Provider>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
