import React from 'react'
import ScrollToTop from "../ScrollToTop"

export default function Footer() {


    return (
        <div className='footer'>
            <div className=' '>
                <div className='footer-address'>
                    <h2>MacStore</h2>
                    <div className='footer-content'>
                        <div className='footer-content-address'>
                            <span>Địa chỉ:</span>
                            <p>Số 132, Lê Lai, P. Bến Thành, Quận 1, Tp. HCM</p>
                        </div>
                        <div className='footer-content-email'>
                            <span>Email:</span>
                            <p>phantomtiger123@gmail.com</p>
                        </div>
                        <div className='footer-content-hotline'>
                            <span>Bán hàng:</span>
                            <p>0938389406</p>
                        </div>
                        <div className='footer-content-contact'>
                            <span>Liên hệ:</span>

                        </div>
                        <div className='footer-content-introduce'>
                            <span>Giới thiệu :</span>

                        </div>
                    </div>
                </div>
                <div className='footer-support'>
                    <h2>Hỗ trợ khách hàng</h2>
                    <div>
                        <ol>
                            <li>Quy định giao hàng</li>
                            <li>Quy định bảo hành hàng mới</li>
                            <li>Quy định bảo hành hàng cũ</li>
                            <li>Mua hàng từ xa</li>
                        </ol>
                    </div>
                </div>
                <div className='footer-policy'>
                    <h2>Chính sách</h2>
                    <div>
                        <ol>
                            <li>Chính sách bảo hành</li>
                            <li>Chính sách đổi trả</li>
                            <li>Chính sách bảo mật thông tin</li>
                            <li>Chính sách vận chuyển</li>
                            <li>Sitemap</li>
                        </ol>
                    </div>
                </div>
                <div className='footer-service'>
                    <h2>Sản phẩm – Dịch vụ</h2>
                    <div>
                        <ul>
                            <li>Sửa chữa</li>
                            <li>Quẹt thẻ/Trả góp</li>
                            <li>Cài đặt phần mềm</li>
                            <li>Chính sách vận chuyển</li>
                            <li>Phục hồi dữ liệu</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-white mt-4">Copyright © 2022 - Bản quyền thuộc về localhost:3006 | Sản phẩm tại Macstore</div>
            <div className="link-fixed">
                <ScrollToTop />

            </div>
        </div>
    )
}
