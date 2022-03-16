import React, { useEffect, useState } from 'react'
import { Container, NavDropdown } from 'react-bootstrap'
import imgLogo from "../../assets/Logo/logo.png"
import { Nav, Navbar } from "react-bootstrap";
import HeaderNavItem from './HeaderNavItem';
import { Link } from "react-router-dom";
import classNames from "classname";


export default function Header({ isHome }) {

    const [colorChange, setColorChange] = useState(false)

    useEffect(() => {
        const changeNavbarColor = () => {
            if (isHome === true) {
                if (window.scrollY >= 80) {
                    setColorChange(true);
                } else {
                    setColorChange(false);
                }
            }
        };
        window.addEventListener("scroll", changeNavbarColor);
    }, [isHome]);
    const headerItem = [
        {
            name: 'Trang chủ',
            link: '/',
            icon: 'home-outline'
        },
        {
            name: 'Iphone',
            link: '/',
            icon: ''
        },
        {
            name: 'Ipad',
            link: '/',
            icon: ''
        },
        {
            name: 'Mac',
            link: '/',
            icon: ''
        },
        {
            name: 'Apple Wach',
            link: '/',
            icon: ''
        },
        {
            name: 'Apple Wach',
            link: '/',
            icon: ''
        },
        {
            name: 'Bảo Hành',
            link: '/',
            icon: ''
        },
        {
            name: 'Giới thiệu',
            link: '/',
            icon: ''
        },
        {
            name: 'Liên hệ',
            link: '/',
            icon: ''
        },
    ]


    return (
        <div className='header w-100'>
            <div className='header-top '>
                <div className='header-top-logo'>
                    <Link to="/">

                        <img className='logo-menu' src={imgLogo} alt="logo" />
                    </Link>
                </div>
                <div className='header-top-search'>
                    <input placeholder='Tìm kiếm....' type="text" name="search" />
                    <ion-icon size="small" name="search-outline"></ion-icon>
                </div>
                <div className='header-top-chosse'>
                    <div className='chosse-card'>
                        <ion-icon name="card-outline"></ion-icon>
                        <Link to="/Card">
                            <span>Giỏ Hàng</span>
                        </Link>
                    </div>
                    <div className='chosse-account'>
                        <ion-icon name="person-outline"></ion-icon>
                        <Link to="/Login">
                            <span>Tài Khoản</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={classNames('header-bottom', { "header--home": isHome === true })}>
                <div className={colorChange ? "colorChange" : "header__nav"}>
                    <Navbar expand="lg" className='h-100' >
                        <div className='container h-100'>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Nav className="me-auto h-100">
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <ul className="header__nav-list">
                                        <HeaderNavItem headerItem={headerItem} />
                                    </ul>
                                </Navbar.Collapse>
                            </Nav>
                        </div>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}
