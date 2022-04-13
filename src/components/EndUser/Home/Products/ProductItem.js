import React from 'react'
import product1 from "../../../../assets/Banner/product1.jpg"
import { Link } from "react-router-dom";
import requestAPI from '../../../../apis';
import { useSnackbar } from 'notistack';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { quantity } from '../../../../data/quantityCartSlice';
import { toast } from 'react-toastify';

function ProductItem({ item }) {
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch();

    const addToCardOnClick = (e) => {
        const id = item._id
        const addToCart = async (id) => {
            await requestAPI(`/user/addCart/${id}`, "POST").then((res) => {

                if (res) {
                    dispatch(quantity())
                    toast.success("Đã thêm sản phẩm vào giỏ hàng", {
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
        addToCart(id)
    }

    const convertPrice = () => item.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    return (

        <li className='products-item'>
            <div className='products-bg'>
                <div className='products-img' style={{ width: '100%', height: '100%' }}>
                    <Link to={`/detail/${item._id}`}
                        className="job-item-btn"
                        onChange={() => { }}>
                        <img src={item.img} alt="aloha" style={{ height: '345px' }} />
                    </Link>
                </div>
                <div className='products-info'>
                    <span>{item.productName}</span>
                    <p className="mt-2 mb-3 font-weight-bold">{convertPrice()}  VND </p>
                </div>
                <div className='products-add'>
                    <button onClick={addToCardOnClick}>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </li>

    )
}

export default ProductItem