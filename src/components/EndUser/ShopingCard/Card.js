import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
    return (
        <div className='container'>
            <h5>Giỏ hàng</h5>
            <form>
                <table className='shooping'>
                    <thead>
                        <tr className='shooping-card'>
                            <th className='shooping-card-img'>Ảnh</th>
                            <th className='shooping-card-products'>Sản Phẩm</th>
                            <th className='shooping-card-price'>Giá</th>
                            <th className='shooping-card-quantity'>Số Lượng</th>
                            <th className='shooping-card-subtotal'>Tạm tính</th>
                            <th className='shooping-card-remove'>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='card-body '>
                            <td className='card-body-img'><img src="banner1" alt="banner1" /></td>
                            <td className='card-body-name'><span>Iphone</span></td>
                            <td className='card-body-price'><span>180.000.000đ</span></td>
                            <td className='card-body-quantity '><input type="number" step="1" min="0" max="" /></td>
                            <td className='card-body-subtotal '><span>180.000.000đ</span></td>
                            <td className='card-body-remove '><ion-icon size='large' name="close-circle-outline"></ion-icon></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div className='card-collaterals'>
                <div className='card-totals'>
                    <h2>Tổng giỏ hàng</h2>
                    <div className='card-totals-info'>
                        <span>Tổng</span> <span>15.000.000đ</span>
                    </div>
                    <div className='card-totals-button'>
                        <Link to="/"><p className='btn btn-light'>Tiếp tục xem sản phẩm </p></Link>
                        <Link><p className='btn btn-outline-danger'>Tiến hành thanh toán</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
