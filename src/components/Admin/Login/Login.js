import React, { useCallback, useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { withRouter } from "react-router-dom";
import requestAPI from "../../../apis";
import bg1 from "../../../assets/Logo/logo.png";
import bg from "../../../assets/Banner/bg_admin.jpg";
import logo from "../../../assets/Logo/logo.png";
import { useHistory } from "react-router-dom";
import { ACCESS_TOKEN } from "../../../utils/constant";
import { useSelector } from "react-redux";

function Login(props) {
    const { enqueueSnackbar } = useSnackbar();

    const [userName, setUsername] = useState("");
    const [passWord, setPassword] = useState("");

    const history = useHistory()



    const handleOnSubmit = (event) => {
        event.preventDefault();
        requestAPI("/user/signin", "POST", { userName, passWord })
            .then((res) => {
                if (res.data.content.user.admin == true) {
                    localStorage.setItem("accessToken", res.data.content.token);
                    enqueueSnackbar("Đăng nhập thành công", {
                        persist: false,
                        variant: "success",
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    });
                    history.push("/admin/dashboard");
                }
                else {
                    enqueueSnackbar("Bạn không phải là admin", {
                        persist: false,
                        variant: "error",
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    });
                    history.push("/dashboard");
                }
            })
            .catch((err) => {
                if (err) {
                    if (err.response.data.statusCode === 400) {
                        enqueueSnackbar("Mật khẩu hoặc tài khoảng chưa chính xác", {
                            persist: false,
                            variant: "error",
                            preventDuplicate: true,
                            autoHideDuration: 3000,
                        });
                    }
                }

            });
    };

    return (
        <div className="Login">
            <img className="login-bg" src={bg} alt="pic_logigisc"></img>
            <div className="login-overlay flex-center">
                <div className="login-box flex" style={{ gap: "50px" }}>
                    <div className="login-left flex-center flex-col" >
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                backgroundColor: "#DA2128",
                                borderRadius: "6px",
                                marginLeft: '16px'
                            }}
                        ></img>
                        <div className="login-title">Đăng nhập vào trang quản lý</div>
                        <form
                            className="admin-login-form flex-col"
                            onSubmit={handleOnSubmit}
                        >
                            <input
                                type="text"
                                placeholder="User Name"
                                value={userName}
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            />
                            <input
                                type="password"
                                placeholder="Mật khẩu"
                                value={passWord}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                            />
                            <button type="submit" className="btn btn-info">
                                Đăng nhập
                            </button>
                        </form>
                    </div>
                    <div className="login-right">
                        <div className="animation-overlay"></div>
                        <img src={bg1} alt="" style={{
                            backgroundColor: "#DA2128",
                            borderRadius: "6px",
                        }}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default withRouter(Login);
