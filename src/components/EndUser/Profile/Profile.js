import React, { useEffect, useState } from 'react'
import logoProduct from "../../../assets/Logo/new-product (1).png"
import logoMoney from "../../../assets/Logo/money.png"
import logoCalender from "../../../assets/Logo/calendar.png"
import requestAPI from '../../../apis'
import { useSelector } from 'react-redux'
export default function Profile() {

    const [bills, setBills] = useState()
    const user = useSelector((state) => state.user.user)
    console.log({ user })
    useEffect(() => {
        requestAPI('/history/GetBillUser', 'GET', null).then((res) => {
            console.log("cccc", res.data.content);

            if (res.data?.content) {
                setBills(res.data.content)
            }
            console.log("ressss", bills);
        }).catch((err) => {
            console.log(err);
        })
    }, [])



    return (
        <div className="background">
            <div className="personal">
                <div className="row row-personal">
                    <div className="col-md-4 col-12 personal--left text-center">
                        <div className="personal--title">Thông tin người dùng</div>
                        <div className="personal--infor">
                            <img
                                src="https://picsum.photos/200"
                                alt=""
                                className="avatar mb-3"
                            />
                            <p className="infor--name font-weight-bold">
                                {user.fullName}
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <p className="infor--phone p-2">Số điện thoại :</p>
                                <p className="font-weight-bold">{user.phone}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-12 personal--right">
                        <div className="order--title">Lịch sử đơn hàng</div>
                        {
                            bills?.map((item) => (
                                item.allProduct.map((bill, index) => (
                                    <div className="job-itemmm mb-5" key={index}>
                                        <h2 className="job-item-title">{bill.productName}</h2>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '20px'
                                        }}>
                                            <img src={logoProduct} alt="" style={{ maxWidth: "30px" }} />
                                            <span style={{ marginRight: '145px', marginLeft: "10px", fontSize: '13px', height: "0px" }}>{`Số lượng: ${bill.quantity}`}</span>
                                            <img src={logoMoney} alt="" style={{ maxWidth: "30px" }} />
                                            <span style={{ marginRight: '145px', marginLeft: "10px", fontSize: '13px', height: "0px" }}>{`Giá tiền: ${bill.price}`}</span>
                                        </div>
                                        <div>
                                            <img src={logoCalender} alt="" style={{ maxWidth: "30px" }} />
                                            <span style={{ marginRight: '145px', marginLeft: "10px", fontSize: '13px', height: "0px" }}>{`Ngày đặt: ${item.createDate} `}</span>
                                        </div>
                                    </div>
                                ))
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
