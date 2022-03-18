import React from 'react'
import Logo from '../../../assets/Logo/logo.png'
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { RuleSharp } from '@mui/icons-material';
import { rules } from '../../../helpers/rules';

export default function Register() {
    const { control, handleSubmit, getValues, formState: { errors },
    } = useForm({
        defaultValues: {
            surname: "",
            name: "",
            email: "",
            password: "",
        },
    });
    return (
        <div className="signup container">
            <div className="signup__row">
                <div className="signup__form">
                    <h3 className="signup__form--title"><span>Đăng ký</span><br />Tài Khoản</h3>
                    <div className="signup__input">
                        <form action="#" >
                            <div className="form-group signup__input--form d-flex justify-content-between">
                                <div className="signup__input--surname mr-2" style={{ width: "48%" }}>
                                    <label for="form-group-surname" className="font-weight-bold">Họ</label>
                                    <Controller
                                        name="surname"
                                        control={control}
                                        //rules={rules().surname}
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="form-group-surname"
                                                onChange={field.onChange}
                                            //value={getValues("surname")}
                                            />
                                        )}
                                    />
                                    {/* <ErrorMessage name="surname" errors={errors} /> */}
                                </div>

                                <div className="signup__input--name" style={{ width: "48%" }}>
                                    <label for="form-group-name" className="font-weight-bold">Tên</label>
                                    <Controller
                                        name="name"
                                        control={control}
                                        //rules={rules().name}
                                        render={({ field }) => (
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="form-group-name"
                                                onChange={field.onChange}
                                            //value={getValues("name")}
                                            />
                                        )}
                                    />
                                    {/* <ErrorMessage name="name" errors={errors} /> */}
                                </div>

                            </div>
                            <div className="form-group signup__input--form">
                                <label for="form-group-email" className="font-weight-bold">Email</label>
                                <Controller
                                    name="email"
                                    control={control}
                                    //rules={rules().email}
                                    render={({ field }) => (
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="form-group-email"
                                            onChange={field.onChange}
                                        //value={getValues("email")}
                                        />
                                    )}
                                />
                            </div>
                            {/* <ErrorMessage name="email" errors={errors} /> */}

                            <div className="form-group signup__input--form">
                                <label for="form-group-password" className="font-weight-bold">Mật khẩu</label>
                                <Controller
                                    name="password"
                                    control={control}
                                    //rules={rules().password}
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

                            <div className="button__submit">
                                <button type="submit" className="submit-form">Đăng ký</button>
                            </div>
                        </form>
                    </div>
                    <p className="accept--rules">Bằng cách ấn vào nút "Đăng ký", tôi đòng ý với <Link to="/">Thỏa thuận</Link> và <Link to="/"> Quy định bảo mật</Link> của MASS</p>
                    <div className="yes--account d-flex justify-content-around">
                        <span>Bạn là thành viên MASS</span>
                        <Link to="/login" class="login__link">Đăng nhập</Link>
                    </div>
                </div>
                <div className="login__introduce">
                    <div className="logo__introduce">
                        <Link to="/">
                            <img src={Logo} alt="logo--intro" />
                        </Link>
                    </div>
                    <div className="title__introdce">
                        <p className="text-center font-weight-bold">Nhanh chân trở thành hội viên để có nhiều phần quà hấp dẫn</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
