import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import requestAPI from '../../../apis'

export default function Card() {

    const [cart, setCart] = useState()
    const quantityCart = useSelector((state) => state.quantityCart.quantityCart);

    useEffect(() => {
        requestAPI("/user/profile", "GET").then((res) => {
            setCart(res.data.content.cart);
            console.log(res.data.content.cart);
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteOnclick = (e) => {
        const id = e

        const deleteProuctCart = async (e) => {
            await requestAPI(`/user/DeleteCart/${id}`, "POST").then((res) => {
                if (res) {
                    toast.success("Xóa thành công sản phẩm", {
                        position: "top-center",
                        autoClose: 3000,
                    })
                }
                requestAPI("/user/profile", "GET").then((res) => {
                    setCart(res.data.content.cart);

                })
            })
        }
        deleteProuctCart(id)
    }

    const sumWithInitial = quantityCart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
    );


    return (
        <div classNameName='container'>
            <div className="shopping-cart">
                <div className="title">
                    Shopping Bag
                </div>
                {
                    cart?.map((item, index) => (
                        <div key={index} className="item" style={{ alignItems: 'center' }}>
                            <div className="buttons" onClick={e => deleteOnclick(item._idProduct)}>
                                <ion-icon size='large' name="close-circle-outline" ></ion-icon>
                                {/* <span onClick={e => deleteOnclick(item._idProduct)} >X</span> */}
                            </div>
                            <div className="image">
                                <img src={item.img} alt="" style={{ width: '100px', height: '100px', borderRadius: "20px" }} />
                            </div>
                            <div className="description">
                                <span>{item.productName}</span>
                            </div>
                            <div className="quantity">
                                <button className="plus-btn" type="button" name="button">
                                    <span>-</span>
                                </button>
                                <span style={{ margin: '10px' }}>{item.quantity}</span>
                                <button className="minus-btn" type="button" name="button">
                                    <span>+</span>
                                </button>
                            </div>
                            <div className="total-price">{`${item.price.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ`}</div>
                        </div>
                    ))
                }
            </div>
            <span>{`${sumWithInitial.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ`}</span>
        </div>
    )
}
