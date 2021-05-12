import React, { useState } from "react";
import { useRouter } from "next/router";
import { InfoType } from "@/types/index";

export default function NewUser() {
    const [info, setInfo] = useState<InfoType>({
        name: "",
        location: "",
        phone: "",
        bio: "",
    });

    const router = useRouter();

    // const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gim;
    const phoneRegex = /[0-9]/gim;

    const nameChangeHandler = (e: any) => {
        setInfo({ ...info, name: e.target.value });
    };

    const cityChangeHandler = (e: any) => {
        setInfo({ ...info, location: e.target.value });
    };

    const phoneChangeHandler = (e: any) => {
        setInfo({ ...info, phone: e.target.value });
    };

    const bioChangeHandler = (e: any) => {
        setInfo({ ...info, bio: e.target.value });
    };

    const submitHandler = async (e: any) => {
        e.preventDefault();

        const res = await fetch(`/api/user/info`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(info),
        });

        const data = await res.json();

        console.log(data);

        setTimeout(() => {
            router.push("/");
        }, 5000);
    };

    return (
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
                                        Tell us about yourself
                                    </h3>

                                    <p className="text-center mb-6">
                                        Don&apos;t worry, we don&apos;t sell
                                        your data.
                                    </p>

                                    <form
                                        className="mb-4 mt-5"
                                        onSubmit={(e) => submitHandler(e)}
                                    >
                                        <div className="input-group mb-2">
                                            <input
                                                type="text"
                                                className="
                                                    form-control form-control-lg
                                                "
                                                placeholder="What's your name*"
                                                required
                                                onChange={(e) =>
                                                    nameChangeHandler(e)
                                                }
                                            />
                                        </div>

                                        <div className="input-group mb-2">
                                            <input
                                                type="text"
                                                className="
                                                    form-control form-control-lg
                                                "
                                                placeholder="Which city do you live in?"
                                                onChange={(e) =>
                                                    cityChangeHandler(e)
                                                }
                                            />
                                        </div>

                                        <div className="input-group mb-4">
                                            <input
                                                type="tel"
                                                pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                                                className="
                                                    form-control form-control-lg
                                                "
                                                placeholder="What's your phone?"
                                                onChange={(e) =>
                                                    phoneChangeHandler(e)
                                                }
                                            />
                                        </div>

                                        <div className="input-group mb-4">
                                            <textarea
                                                className="
                                                    form-control form-control-lg
                                                "
                                                placeholder="What would you bio be?"
                                                onChange={(e) =>
                                                    bioChangeHandler(e)
                                                }
                                            ></textarea>
                                        </div>

                                        <div className="text-center mt-5">
                                            <button
                                                type="submit"
                                                className="btn btn-lg btn-primary"
                                                title=""
                                            >
                                                Let&apos;s go!
                                            </button>
                                        </div>
                                    </form>

                                    {/* <p className="text-center mb-0">
                                        Already have an account?
                                        <a className="link" href="signin.html">
                                            Sign in
                                        </a>
                                        .
                                    </p>

                                    <div className="mt-4 d-grid gap-1">
                                        <button
                                            type="button"
                                            className="
                                                btn btn-block btn-outline-google
                                            "
                                        >
                                            Signup with Google
                                        </button>
                                        <button
                                            type="button"
                                            className="
                                                btn
                                                btn-block
                                                btn-outline-facebook
                                            "
                                        >
                                            Signup with Facebook
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
    );
}
