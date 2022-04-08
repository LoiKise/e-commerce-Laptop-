import React from 'react'
import product1 from "../../../../assets/Banner/product1.jpg"
import { Link } from "react-router-dom";

function ProductItem({ item }) {

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
                    <p className="mt-2 mb-3 font-weight-bold">{`${item.price.toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VNĐ`}</p>
                </div>
                <div className='products-add'>
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </li>

    )
}

export default ProductItem