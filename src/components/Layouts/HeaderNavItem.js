import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function HeaderNavItem({ headerItem }) {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    const renderNavItem = () => {
        return headerItem.map((item, index) => {
            return (
                <li className="header__nav-item" key={index}>
                    <Link className="header__nav-link" to={`category/${item.category}`
                    }>
                        <ion-icon name={item.icon}></ion-icon>
                        {item.name}
                    </Link>
                </li>
            );
        });
    };
    return <>{renderNavItem()}</>;
}