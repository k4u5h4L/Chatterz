import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import Image from "next/image";

export default function Login() {
    const [session] = useSession();
    const [emailData, setEmailData] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleEmailChange = (e: any) => {
        setEmailData(e.target.value);
        console.log(emailData);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setLoading(true);

        signIn("email", {
            email: emailData,
            callbackUrl: `/login/verify/`,
            redirect: true,
        });
    };

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
                                    {!session ? (
                                        <div className="card-body">
                                            <h3 className="text-center">
                                                Welcome
                                            </h3>

                                            <p className="text-center mb-6">
                                                Please enter your email address
                                                below, and click on the link
                                                sent to be logged in. If
                                                you&apos;re new here, your
                                                account will be created
                                                automatically!
                                            </p>

                                            <form
                                                className="mb-4 mt-5"
                                                onSubmit={(e) =>
                                                    handleSubmit(e)
                                                }
                                            >
                                                <div className="input-group mb-2">
                                                    <input
                                                        type="email"
                                                        className="
                                                    form-control form-control-lg
                                                "
                                                        placeholder="Enter your email"
                                                        onChange={(e) =>
                                                            handleEmailChange(e)
                                                        }
                                                    />
                                                </div>

                                                {loading ? (
                                                    <p className="d-flex justify-content-center">
                                                        <Image
                                                            src="/loading.gif"
                                                            width={50}
                                                            height={50}
                                                        />
                                                    </p>
                                                ) : null}

                                                <div className="text-center mt-5">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-lg btn-primary"
                                                        title=""
                                                        onSubmit={(e) =>
                                                            handleSubmit(e)
                                                        }
                                                    >
                                                        Get link
                                                    </button>
                                                </div>
                                            </form>

                                            {/* <p className="text-center mb-0">
                                            Already have an account?
                                            <a
                                                className="link"
                                                href="submit.html"
                                            >
                                                Get link
                                            </a>
                                            .
                                        </p> */}
                                        </div>
                                    ) : (
                                        <div className="card-body">
                                            <h3 className="text-center">
                                                Hmmm...
                                            </h3>

                                            <p className="text-center mb-6">
                                                Not{" "}
                                                <b>
                                                    {session.user.name ||
                                                        session.user.email}
                                                </b>
                                                ? Then Logout and login again!
                                            </p>

                                            <div className="text-center mt-5">
                                                <button
                                                    type="button"
                                                    className="btn btn-lg btn-primary"
                                                    title=""
                                                    onClick={() => signOut()}
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="signin-img d-none d-lg-block text-center">
                                <img
                                    src="assets/images/signin-img-cyan.svg"
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
