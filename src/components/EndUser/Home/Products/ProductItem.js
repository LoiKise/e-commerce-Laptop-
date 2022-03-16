import React from 'react'
import product1 from "../../../../assets/Banner/product1.jpg"

function ProductItem({ item }) {
    return (
        <li className='products-item'>
            <div className='products-bg'>
                <div className='products-img w-100 h-100'>
                    <img src={product1} alt="aloha" />
                </div>
                <div className='products-info'>
                    <span>{item.name}</span>
                    <p className="mt-2 mb-3 font-weight-bold">{item.price}</p>
                </div>
                <div className='products-add'>
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
        </li>
    )
}

export default ProductItem