import React, { useEffect, useState } from 'react'
import { Container, Dropdown, NavDropdown } from 'react-bootstrap'
import imgLogo from "../../assets/Logo/logo.png"
import { Nav, Navbar } from "react-bootstrap";
import HeaderNavItem from './HeaderNavItem';
import { Link, useHistory } from "react-router-dom";
import classNames from "classname";
import { ACCESS_TOKEN } from "../../utils/constant"
import { useDispatch, useSelector } from "react-redux";
import { logout, profile } from '../../data/userSlice';
import { toast } from 'react-toastify';
import { color } from '@mui/system';
import requestAPI from "../../apis"
import { quantity } from '../../data/quantityCartSlice';

function Header({ isHome }) {

    const [colorChange, setColorChange] = useState(false)
    const user = useSelector((state) => state.user.user)
    const quantityCart = useSelector((state) => state.quantityCart.quantityCart);
    const history = useHistory();
    const dispatch = useDispatch();


    // useEffect(() => {
    //     dispatch(quantity())
    // }, [dispatch])



    const handleLogout = () => {
        dispatch(logout());
        history.push("/");
        toast.success("Đăng xuất thành công", {
            position: "top-center",
            autoClose: 3000,
        });
    };


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
            icon: 'home-outline',

        },
        {
            name: 'MacBook',
            link: '/',
            icon: '',
            category: "Apple"
        },
        {
            name: 'Imac',
            link: '/',
            icon: '',
            category: 'IMAC'
        },
        {
            name: 'Thinkpad',
            link: '/',
            icon: '',
            category: 'Laptop'
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
    useEffect(() => {
        let _token = ACCESS_TOKEN();
        if (_token) {
            dispatch(profile());
        } else {
            dispatch(logout());
        }
    }, [dispatch]);



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
                        <Link to="/Card">
                            <ion-icon
                                style={{ backgroundColor: 'transparent', width: '35px', height: '35px' }}
                                color="black"
                                name="notifications-circle-sharp"></ion-icon>
                            {
                                quantityCart ? (
                                    <p>{quantityCart.length}</p>
                                ) : ''
                            }

                        </Link>
                    </div>
                    <div className='chosse-account'>
                        {
                            Object.keys(user).length === 0 ? (
                                <>
                                    <ion-icon name="person-outline"></ion-icon>
                                    <Link to="/Login" type='submit'>
                                        <span>Tài Khoản</span>
                                    </Link>
                                </>
                            ) : (
                                <div className="user-login">
                                    <Dropdown>
                                        <Dropdown.Toggle className='user_login' id="dropdown-basic" style={{ backgroundColor: 'transparent', outline: 'none', border: 'none' }}>
                                            <img src="https://picsum.photos/200/300" alt="login" style={{ width: "36px", height: '36px', borderRadius: '200%' }} />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ position: 'absolute', zIndex: '999999999999999' }}>
                                            <Dropdown.Item>
                                                {user.fullName}
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Trang cá nhân</Dropdown.Item>
                                            <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            )
                        }
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
export default Header;