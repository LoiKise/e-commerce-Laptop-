import classNames from 'classnames';
import React, { useState } from 'react'
import DashboardProductsCreate from "./Products/DashboardProductsCreate"
import DashboardHeader from "./DashboardHeader"
import DashboardMain from "./Main/DashboardMain"
import DashboardProducts from "./Products/DashboardProducts"

export default function DashboardBody(props) {

    const tabId = props.tabId;
    const [toast, setToast] = useState(false);
    const [isChange, setIsChange] = useState(false);
    const [products] = useState({});


    const setToastFunc = () => {
        setIsChange(true);
        setTimeout(() => {
            setIsChange(false);
        }, 100);
        setToast(true);
        setTimeout(() => {
            setToast(false);
        }, 3000);
    };
    const openMenuMobile = props.openMenuMobile;
    return (
        <div className={classNames("DashboardBody ", {
            DashboardBody_small: !props.openMenu,
        })}
        >{!openMenuMobile && (
            <div
                className="DashboardBody-closemenu"
                onClick={props.setOpenMenuOnClick}
            ></div>
        )}
            {props.openCreate && tabId === "2" && (
                <DashboardProductsCreate
                    setCloseCreateFunc={props.setCloseCreateFunc}
                    setToastFunc={setToastFunc}

                />
            )}

            <DashboardHeader
                itemName={props.menuItems[tabId - 1].name}
                setOpenMenuOnClick={props.setOpenMenuOnClick}
                openMenu={props.openMenu}
                orderNotice={props.orderNotice}
            />{tabId === "1" && <DashboardMain />}



            {tabId === "2" && (
                <DashboardProducts
                    setOpenCreateFunc={props.setOpenCreateFunc}
                    setOpenEditFunc={props.setOpenEditFunc}
                    toast={toast}
                    isChange={isChange}

                />
            )}
        </div>
    )
}
