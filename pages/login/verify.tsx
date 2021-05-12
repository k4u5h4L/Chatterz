import React from "react";

export default function Verify() {
    return (
        <>
            <div id="layout" className="theme-cyan">
                <div className="authentication">
                    <div className="container d-flex flex-column">
                        <div
                            className="
                            row
                            align-items-center
                            justify-content-center
                            no-gutters
                            min-vh-100
                        "
                        >
                            <div className="col-12 col-md-7 col-lg-5 col-xl-4 py-md-11">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-body">
                                        <h3 className="text-center">
                                            There. <br />
                                            We just sent you a link
                                            <br />
                                        </h3>

                                        <p className="text-center mb-6">
                                            A verification link has been sent to
                                            the given email. Click on it to be
                                            logged in.
                                        </p>

                                        {/* <div className="text-center mt-5">
                                                <button
                                                    type="submit"
                                                    className="btn btn-lg btn-primary"
                                                    title=""
                                                >
                                                    Logout
                                                </button>
                                            </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="signin-img d-none d-lg-block text-center">
                                <img
                                    src="/assets/images/signin-img-cyan.svg"
                                    alt="Sign In Image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
