import React, { useState } from 'react'

export default function DetailTab({ detailItem }) {


    const [tab, setTab] = useState(0)

    return (
        <div className='detail-tab'>
            <div className="container tab-shadow">
                <div className="Navigationcss__DivNavigation ">
                    <div className={`nav-item ${tab === 0 ? 'active' : ''}`} onClick={() => setTab(0)}>
                        <div className="nav-item-title">
                            <i className={`fas fa-briefcase nav-icon mr-1 ${tab === 0 ? 'active' : ''}`}></i>
                            <span >Mô tả</span>
                        </div>
                    </div>
                    <div className={`nav-item ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>
                        <i className={`fas fa-user-graduate nav-icon mr-1 ${tab === 1 ? 'active' : ''}`}></i>
                        <span>Thông số kỹ thuật</span>
                    </div>
                    <div className="nav-item">
                        <i className={`fas fa-user-graduate nav-icon mr-1 ${tab === 2 ? 'active' : ''}`}></i>
                        <span className={`nav-label ${tab === 1 ? 'active' : ''}`} onClick={() => setTab(2)}>Hình ảnh</span>
                    </div>
                </div>
                <div className='Navigationcss-content position-relative'>
                    {
                        tab === 0 && (
                            <React.Fragment>
                                <p className='text-center' style={{ fontSize: '28px' }}>{detailItem?.productName}</p>
                                <p className='mt-4'>Tại sự kiện “One More Thing” vừa kết thúc, Apple trình diễn loạt máy Mac mới sử dụng chip Apple Silicon do hãng tự phát triển. Bên cạnh chiếc MacBook Air thuộc phân khúc phổ thông, Apple cũng đã công bố chiếc MacBook Pro – 13 inch mới cho những người dùng chuyên nghiệp.</p>
                                <img src="https://macstores.vn/wp-content/uploads/2020/11/macbook_pro_13inch_m1_1.jpg" alt="" />
                                <p>Máy mới bao gồm vi xử lý mới nhất đến từ Apple mang tên M1 với 8 nhân CPU và 8 nhân GPU. Máy sẽ có cấu hình mặc định với 8GB RAM và 256GB SSD lưu trữ (có thể tuỳ chọn lên đến 16GB RAM và các mức dung lượng SSD khác từ 512GB, 1TB đến 2TB).
                                    Mức giá khởi điểm của máy sẽ giữ nguyên là 1299 USD cho bản RAM 8GB/256GB SSD và 1499 USD cho bản RAM 8GB/512GB SSD</p>
                            </React.Fragment>
                        )
                    }
                    {
                        tab === 1 && (
                            <ul>
                                <li>{detailItem?.productName}</li>
                                <li>{detailItem?.cpu}</li>
                                <li>{detailItem?.weight}</li>
                                <li>{detailItem?.vga}</li>
                                <li>{detailItem?.ram}</li>
                                <li>{detailItem?.screen}</li>
                            </ul>
                        )
                    }
                    {
                        tab === 2 && (
                            <ul>
                                <iframe style={{ width: '1050px', height: '408px' }} src="https://www.youtube.com/embed/5AwdkGKmZ0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
