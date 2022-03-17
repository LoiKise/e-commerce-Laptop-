import React from 'react'

export default function DetailTop() {
    return (
        <div className='container'>
            <div className='detail'>
                <div className='detail-img'>
                    <img src="https://macstores.vn/wp-content/uploads/2021/10/macbook-pro-16-inch-space-gray-m1-pro.jpg" alt="mac" />
                </div>
                <div className='detail-infor'>
                    <div className='detail-infor-title'>
                        <h2>MUHP2 Option – MacBook Pro 2019 13 inch – (Gray/i7/256GB) – New</h2>
                    </div>
                    <div className='detail-infor-description'>
                        <ul>
                            <li>Tình trạng: <span>New, Mới Nguyên Seal, Chưa Active</span></li>
                            <li>Màu: <span>Xám (Space Gray)</span></li>
                            <li>CPU: <span>Quad-core i7-1.7GHz (i5-8557U, 8MB cache, up to 4.5GHz)</span></li>
                            <li>Ram: <span>8GB 2133MHz LPDDR3 memory</span></li>
                            <li>Storage: <span>256GB on-board SSD</span></li>
                            <li>Màn hình: <span>13.3 inch Retina with True Tone (2650×1600)</span></li>
                            <li>VGA: <span> Intel Iris Plus Graphics 645</span></li>
                            <li>Interface: <span>Two Thunderbolt 3 (USB-Type C)</span></li>
                            <li>Trọng Lượng: <span> 1.37Kg</span></li>
                        </ul>
                    </div>
                    <div className='detail-infor-price'>
                        <span>33.500.000đ</span>
                    </div>
                    <div className='detail-infor-cart'>
                        <span class="down" onClick='decreaseCount(event, this)'>-</span>
                        <input type="text" value="1" />
                        <span class="up" onClick='increaseCount(event, this)'>+</span>
                    </div>
                    <button><ion-icon name="cart-outline"></ion-icon>Thêm vào giỏ hàng</button>
                </div>
                <div className='detail-support'>
                    <div className='detail-support-advisory'>
                        <h2>Tư vấn mua hàng: 0938389406</h2>
                        <div className='d-flex flex-column'>
                            <span>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                                Giao hàng hỏa tốc được áp dụng
                            </span>
                            <span>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                                Thanh toán thẻ tiền mặt hoặc chuyển khoản
                            </span>
                            <span>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                                Thanh toán cà thẻ miễn phí tại cửa hàng
                            </span>
                            <span>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                                Thanh toán khi nhận hàng
                            </span>
                        </div>
                    </div>
                    <div className='detail-support-policy'>
                        <h2>Chính sách bán hàng</h2>
                        <div className='d-flex flex-column'>
                            <span>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                                Dùng thử 07 ngày miễn phí
                            </span>
                            <span>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                                Lỗi 1 Đổi 1 trong 30 ngày đầu. (Macbook like new)
                            </span>
                            <span>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                                Giao hàng tận nhà toàn quốc
                            </span>
                            <span>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                                Thanh toán khi nhận hàng (nội thành)
                            </span>
                            <span>
                                <ion-icon name="checkmark-circle-outline"></ion-icon>
                                Hỗ trợ phần mềm trọn đời
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
