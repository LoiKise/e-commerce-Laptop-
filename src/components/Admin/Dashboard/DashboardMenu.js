import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDown,
    faAngleUp,
    faSignOutAlt,

} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { Tooltip, Zoom } from "@mui/material";
import LOGO from "../../../assets/Logo/logo.png";
export default function DashboardMenu(props) {
    const [openUserOpt, setOpenUserOpt] = useState(false);
    const [hideText, setHideText] = useState(false);

    const clickToShowUserOpt = () => {
        if (openUserOpt) setOpenUserOpt(false);
        else setOpenUserOpt(true);
    };

    const menuItems = props.menuItems;
    const openMenu = props.openMenu;
    const openMenuMobile = props.openMenuMobile;

    useEffect(() => {
        setTimeout(() => {
            if (openMenu === false) setHideText(true);
        }, 480);
        if (openMenu === true) setHideText(false);
    }, [setHideText, openMenu]);

    return (
        <div
            className={classNames("DashboardMenu flex", {
                DashboardMenu_small: !openMenu,
                DashboardMenu_mobile: !openMenuMobile,
            })}
        >
            <div className="db-menu-overlay"></div>
            <div className="db-menu">
                <div
                    className="db-menu-logo flex"
                    style={{ justifyContent: "center", alignItems: "center", width: '30%' }}
                >
                    <img alt="Logo" src={LOGO} className="dashboard-logo"></img>
                    {hideText === false && (
                        <div
                            className="flex-center"
                            style={{ height: "50px", width: "50px", marginLeft: "12px" }}
                        >
                            <p className="logo-text">Loi's MAC</p>
                        </div>
                    )}
                </div>
                <div className="menu-line"></div>
                <div className="db-menu-user" onClick={clickToShowUserOpt}>
                    <div className="flex-center" style={{ padding: "0 5px" }}>
                        <Tooltip
                            title={props.userInfo?.fullName || " "}
                            placement="right"
                            TransitionComponent={Zoom}
                            disableHoverListener={!hideText}
                        >
                            <div className="db-menu-avt flex-center">
                                <img
                                    alt=""
                                    src="https://picsum.photos/200"
                                ></img>
                            </div>
                        </Tooltip>
                        {hideText === false && props.userInfo && (
                            <p className="db-menu-name" style={{ marginLeft: "26px" }}>
                                {props.userInfo.fullName}
                            </p>
                        )}
                        {hideText === false && openUserOpt === true && (
                            <FontAwesomeIcon icon={faAngleUp} style={{ fontSize: "18px" }} />
                        )}
                        {hideText === false && openUserOpt === false && (
                            <FontAwesomeIcon
                                icon={faAngleDown}
                                style={{ fontSize: "18px" }}
                            />
                        )}
                    </div>
                    <div
                        className={
                            openUserOpt ? "db-menu-user-opt closeOpt" : "db-menu-user-opt"
                        }
                    >
                        <Tooltip
                            title={"????ng xu???t"}
                            placement="right"
                            TransitionComponent={Zoom}
                            disableHoverListener={!hideText}
                        >
                            <div
                                className="db-menu-item flex-center"
                                style={{ margin: "0" }}
                                onClick={() => {
                                    localStorage.removeItem("accessToken");
                                    sessionStorage.removeItem("chat-id");
                                    window.location.reload(false);
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faSignOutAlt}
                                    style={{ fontSize: "18px" }}
                                    className="icon"
                                />
                                <p className="db-menu-name">????ng xu???t</p>
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <div className="menu-line"></div>
                <div className="db-menu-listitem">
                    {menuItems.map((item, index) => {
                        return (
                            <Tooltip
                                key={index}
                                title={item.name}
                                placement="right"
                                TransitionComponent={Zoom}
                                disableHoverListener={!hideText}
                            >
                                <div
                                    key={index}
                                    className={classNames("db-menu-item flex-center", {
                                        db_menu_active: props.tabId === item.id,
                                    })}
                                    style={
                                        !hideText ? { paddingLeft: "15px" } : { padding: "10px" }
                                    }
                                    onClick={() => {
                                        props.setTabIdOnClick(item.id);
                                        props.setCloseCreateFunc(false);
                                        props.setCloseEditFunc(false);
                                        if (window.innerWidth <= 1110) {
                                            props.setOpenMenuOnClick();
                                        }
                                    }}
                                >
                                    {/* //TransitionComponent={Zoom} */}
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        style={{ fontSize: "18px" }}
                                        className="icon"
                                    />
                                    {hideText === false && (
                                        <p className="db-menu-name">{item.name}</p>
                                    )}
                                </div>
                            </Tooltip>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
