import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { rules } from "../../../helpers/rules";
import ErrorMessage from "../ErrorMessage";
import IconFace from "../../../assets/Logo/icon_face.png";
import IconGG from "../../../assets/Logo/icon_gg.png";
import Logo from "../../../assets/Logo/logo.png";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useDispatch } from "react-redux";
import {
    login,
} from "../../../data/userSlice";
import { toast } from "react-toastify";

import { unwrapResult } from "@reduxjs/toolkit";
import requestAPI from "../../../apis";


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
            userName: "",
            passWord: "",
        },
    });

    const handleSubmitForm = async (data) => {
        const body = {
            userName: data.userName,
            passWord: data.passWord.trim(),
        };


        try {
            const res = await requestAPI("/user/signin", "POST", body)
            dispatch(login(res.data));
            history.push("/");
            toast.success("Đăng nhập thành công", {
                position: "top-center",
                autoClose: 3000,
            });

        } catch (error) {
            if (error.response.status === 400) {
                toast.error("Tài khoản hoặc mật khẩu không đúng", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
            console.log(error.response.status)
        }

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
                            //callback={responseFacebook}
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
                        <form onSubmit={handleSubmit(handleSubmitForm)}>
                            <div className="form-group login__input--form">
                                <label for="form-group-account" className="font-weight-bold">
                                    Đăng nhập
                                </label>
                                <Controller
                                    name="userName"
                                    control={control}
                                    rules={rules.username}
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="form-group-account"
                                            onChange={field.onChange}
                                            value={getValues("userName")}
                                        />
                                    )}
                                />
                            </div>
                            <ErrorMessage name="userName" errors={errors} />

                            <div className="form-group login__input--form">
                                <label for="form-group-password" className="font-weight-bold">
                                    Mật khẩu
                                </label>
                                <Controller
                                    name="passWord"
                                    control={control}
                                    rules={rules.password}
                                    render={({ field }) => (
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="form-group-password"
                                            onChange={field.onChange}
                                            value={getValues("passWord")}
                                        />
                                    )}
                                />
                            </div>
                            <ErrorMessage name="password" errors={errors} />

                            <div className="text-right mb-3">
                                <Link to="#" className="forgot-password">
                                    Quên mật khẩu
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
