import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { rules } from "../../../helpers/rules";
//import ErrorMessage from "../ErrorMessage";
import IconFace from "../../../assets/Logo/icon_face.png";
import IconGG from "../../../assets/Logo/icon_gg.png";
import Logo from "../../../assets/Logo/logo.png";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useDispatch } from "react-redux";
// import {
//     getProfile,
//     login,
//     loginAuth,
//     profile,
// } from "../../../data/slices/userSlice";
import { toast } from "react-toastify";

import { unwrapResult } from "@reduxjs/toolkit";


function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const {
        control,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // const handleSubmitForm = async (data) => {
    //     const body = {
    //         email: data.email,
    //         password: data.password.trim(),
    //     };
    //     const res = await dispatch(login(body));
    //     if (res) {
    //         if (res.payload.response?.status === 404) {
    //             toast.error("Tài khoản không tồn tại", {
    //                 position: "top-center",
    //                 autoClose: 3000,
    //             });
    //         } else if (res.payload.response?.status === 400) {
    //             toast.error("Tài khoản hoặc mật khẩu không đúng", {
    //                 position: "top-center",
    //                 autoClose: 3000,
    //             });
    //         } else {
    //             history.push("/");
    //             toast.success("Đăng nhập thành công", {
    //                 position: "top-center",
    //                 autoClose: 3000,
    //             });
    //         }
    //     } else {
    //         history.push(res.message, {
    //             position: "top-center",
    //             autoClose: 3000,
    //         });
    //     }
    // };

    //login GG
    // const responseGoogle = async (response) => {
    //     const body = {
    //         user: {
    //             name: `${response.profileObj.givenName} ${response.profileObj.familyName}`,
    //         },
    //         token: response.accessToken,
    //     };
    //     try {
    //         const res = await dispatch(loginAuth(body));
    //         unwrapResult(res);
    //         history.push("/");
    //         toast.success("Đăng nhập thành công", {
    //             position: "top-center",
    //             autoClose: 3000,
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    //login Face
    const responseFacebook = async (response) => {
        if (response.name === undefined && response.accessToken === undefined) {
            return;
        }
        const body = {
            user: {
                name: response.name,
            },
            token: response.accessToken,
        };
        // try {
        //     const res = await dispatch(loginAuth(body));
        //     unwrapResult(res);
        //     history.push("/");
        //     toast.success("Đăng nhập thành công", {
        //         position: "top-center",
        //         autoClose: 3000,
        //     });
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <div className="login container">
            <div className="login__row">
                <div className="login__form">
                    <h3 className="login__form--title">
                        <span>Apple</span>
                        <br />
                        Store
                    </h3>
                    <div className="login__social d-flex">
                        <GoogleLogin
                            clientId="94702690009-hgadrq4e0bjvfsfh0r90id8o3a299odm.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <button
                                    onClick={renderProps.onClick}
                                    className="login__google d-flex justify-content-center align-items-center"
                                >
                                    <img src={IconGG} alt="icon__google" />
                                    <p className="login__google--title">
                                        google
                                    </p>
                                </button>
                            )}
                            buttonText="Login"
                            // onSuccess={responseGoogle}
                            //  onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                        />

                        <FacebookLogin
                            appId="938714423387147"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            render={(renderProps) => (
                                <button
                                    onClick={renderProps.onClick}
                                    className="login__face d-flex justify-content-center align-items-center"
                                >
                                    <img src={IconFace} alt="icon__face" />
                                    <p className="login__face--title">
                                        faceboook
                                    </p>
                                </button>
                            )}
                        />
                    </div>
                    <div className="login__input">
                        <form action="#" >
                            <div className="form-group login__input--form">
                                <label for="form-group-account" className="font-weight-bold">
                                    Đăng nhập
                                </label>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={rules.email}
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="form-group-account"
                                            onChange={field.onChange}
                                            value={getValues("email")}
                                        />
                                    )}
                                />
                            </div>
                            {/* <ErrorMessage name="email" errors={errors} /> */}

                            <div className="form-group login__input--form">
                                <label for="form-group-password" className="font-weight-bold">
                                    Quên mật khẩu
                                </label>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={rules.password}
                                    render={({ field }) => (
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="form-group-password"
                                            onChange={field.onChange}
                                            value={getValues("password")}
                                        />
                                    )}
                                />
                            </div>
                            {/* <ErrorMessage name="password" errors={errors} /> */}

                            <div className="text-right mb-3">
                                <Link to="#" className="forgot-password">
                                    mật khẩu
                                </Link>
                            </div>
                            <button type="submit" className="submit-form">
                                đăng nhập
                            </button>
                        </form>
                    </div>
                    <div className="d-flex justify-content-around">
                        <p className="not--account">Không có tài khoản</p>
                        <Link to="/register" className="signup__link">
                            đăng ký
                        </Link>
                    </div>
                </div>
                <div className="login__introduce">
                    <div className="logo__introduce">
                        <Link to="/">
                            <img src={Logo} alt="logo--intro" />
                        </Link>
                    </div>
                    <div className="title__introdce">
                        <p className="text-center font-weight-bold">Chào mừng bạn đến với kho táo lớn nhất hành tinh</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
