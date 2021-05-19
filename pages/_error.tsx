import React from "react";

import Error from "@/components/Error/Error";

function ErrorPage({ statusCode, errorMessage }) {
    return <p>{statusCode ? <Error message={errorMessage} /> : null}</p>;
}

ErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default ErrorPage;
