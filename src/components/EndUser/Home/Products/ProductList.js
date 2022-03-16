import React from 'react'
import banner1 from "../../../../assets/Banner/banner_macbook_trang_chu.jpg"
import banner2 from "../../../../assets/Banner/banner_imac_trang_chu.jpg"
import ProductItem from "./ProductItem"

function ProductList({ product, type }) {
    console.log('ádasdasd', product[0])
    return (
        <div className='bg-banner'>
            <div className='container'>
                {type === 'IMAC' ?
                    <img src={banner1} alt="baner1" className='mt-5' /> : type === 'IPHONE' ? <img src={banner2} alt="baner1" className='mt-5' /> : <img src={banner1} alt="baner1" className='mt-5' />
                }

                <div className='product-list-item'>
                    <ul className='products'>
                        {
                            product.map((item, index) => (
                                <ProductItem item={item} key={index} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductList