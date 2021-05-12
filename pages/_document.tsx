import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="stylesheet"
                        href="/fonts/material-icon/css/material-design-iconic-font.min.css"
                    />
                    <link
                        rel="stylesheet"
                        href="/assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker.min.css"
                    />

                    <link rel="stylesheet" href="/assets/css/style.min.css" />
                    <link rel="icon" type="image/png" href="/icon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script
                        src="/assets/vendor/jquery/jquery-3.5.1.min.js"
                        type="2f67aa58bc6dff0dbcb0a602-text/javascript"
                    ></script>
                    <script
                        src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
                        type="2f67aa58bc6dff0dbcb0a602-text/javascript"
                    ></script>

                    <script
                        src="/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js"
                        type="2f67aa58bc6dff0dbcb0a602-text/javascript"
                    ></script>

                    <script
                        src="/js/template.js"
                        type="2f67aa58bc6dff0dbcb0a602-text/javascript"
                    ></script>
                    <script
                        src="https://ajax.cloudflare.com/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
                        data-cf-settings="2f67aa58bc6dff0dbcb0a602-|49"
                        defer
                    ></script>
                </body>
            </Html>
        );
    }
}
