import React from 'react'
import product1 from "../../../../assets/Banner/product1.jpg"
import { Link } from "react-router-dom";

function ProductItem({ item }) {
    console.log(item);
    return (

        <li className='products-item'>
            <div className='products-bg'>
                <div className='products-img w-100 h-100'>
                    <Link to={`/detail/${item._id}`}
                        className="job-item-btn"
                        onChange={() => { }}>
                        <img src={item.img} alt="aloha" />
                    </Link>
                </div>
                <div className='products-info'>
                    <span>{item.name}</span>
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