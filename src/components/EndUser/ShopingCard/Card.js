import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import requestAPI from '../../../apis'
import { quantity } from '../../../data/quantityCartSlice'
import ProductNull from '../../../assets/Logo/product.png'
import { ACCESS_TOKEN } from '../../../utils/constant'
import { useHistory } from 'react-router-dom'
export default function Card() {

    const quantityCart = useSelector((state) => state.quantityCart.quantityCart);
    const productCart = useSelector((state) => state.quantityCart.productCart);
    const dispatch = useDispatch();
    const history = useHistory();


    const deleteOnclick = (e) => {
        const id = e
        const deleteProuctCart = async (e) => {
            await requestAPI(`/user/DeleteCart/${id}`, "POST").then((res) => {
                if (res) {
                    toast.success("Xóa thành công sản phẩm", {
                        position: "top-center",
                        autoClose: 3000,
                    })
                    dispatch(quantity())
                }
            })
        }
        deleteProuctCart(id)
    }

    const addToCardOnClick = (e) => {
        const id = e
        console.log(id)
        const addToCart = async (id) => {
            await requestAPI(`/user/addCart/${id}`, "POST").then((res) => {

                if (res) {
                    dispatch(quantity())

                }
            }).catch((error) => {
                toast.error(`${error.response.data.content}`, {
                    position: "top-center",
                    autoClose: 3000,
                })
            })
        }
        addToCart(id)
    }

    const minusCartOnClick = (e) => {
        const id = e
        const addToCart = async (id) => {
            await requestAPI(`/user/MinusCart/${id}`, "POST").then((res) => {
                if (res) {
                    dispatch(quantity())
                }
            }).catch((error) => {
                toast.error(`${error.response.data.content}`, {
                    position: "top-center",
                    autoClose: 3000,
                })
            })
        }
        addToCart(id)
    }

    const sumWithInitial = quantityCart.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
    );

    const payUp = () => {
        let _token = ACCESS_TOKEN();
        const payUpCart = async (_token) => {
            await requestAPI('/history/Order', "POST", _token).then((res) => {
                if (res) {
                    history.push('/')
                    toast.success("Thanh toán thành công", {
                        position: "top-center",
                        autoClose: 3000,
                    })

                }
            }).catch((error) => {
                toast.error(`${error.response.data.content}`, {
                    position: "top-center",
                    autoClose: 3000,
                })
            })
        }
        payUpCart()
    }

    return (
        <div className='container'>
            <div className="shopping-cart">
                <div className="title">
                    Shopping Bag
                </div>
                {
                    productCart[0] ? (
                        productCart?.map((item, index) => (
                            <div key={index} className="item" style={{ alignItems: 'center' }}>
                                <div className="buttons" onClick={e => deleteOnclick(item._idProduct)} style={{ cursor: 'pointer' }}>
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
                                    <button className="plus-btn" type="button" name="button" onClick={e => minusCartOnClick(item._idProduct)}>
                                        <span >-</span>
                                    </button>
                                    <span style={{ margin: '10px' }}>{item.quantity}</span>
                                    <button className="minus-btn" type="button" name="button" onClick={e => addToCardOnClick(item._idProduct)}>
                                        <span >+</span>
                                    </button>
                                </div>
                                <div className="total-price">{`${item.price.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ`}</div>
                            </div>
                        ))) :
                        (
                            <React.Fragment>
                                <div className='text-center'>
                                    <img src={ProductNull} alt="" style={{ maxWidth: '10%' }} className="mt-2 mb-4" />
                                    <p>Sản phẩm của bạn đang trống</p>
                                </div>
                            </React.Fragment>
                        )
                }
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
                <span style={{ fontWeight: '700' }}>{`Tổng tiền: ${sumWithInitial.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ`}</span>
                <div className='flex' style={{
                    gap: '20px',
                    justifyContent: 'flex-end'
                }}>
                    <Link to='/' className='btn btn-success mt-3'>Tiếp tục mua hàng</Link>
                    <p className='btn btn-dark mt-3' onClick={payUp}>Thanh toán</p>
                </div>
            </div>
        </div>
    )
}
