import React, { useState } from 'react'

export default function DetailTab() {

    const [tab, setTab] = useState(0)
    console.log("TAB", tab)
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
                            <ul>
                                <li>sadasd</li>
                                <li>sadasd</li>
                                <li>sadasd</li>
                                <li>sadasd</li>
                            </ul>
                        )
                    }
                    {
                        tab === 1 && (
                            <ul>
                                <li>333333</li>
                                <li>333333</li>
                                <li>333333</li>
                                <li>333333</li>
                            </ul>
                        )
                    }
                    {
                        tab === 2 && (
                            <ul>
                                <li>cccccc</li>
                                <li>cccccc</li>
                                <li>cccccc</li>
                                <li>cccccc</li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
