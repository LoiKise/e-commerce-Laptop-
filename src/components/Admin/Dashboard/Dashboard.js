import React, { useEffect, useState, useCallback } from "react";
import DashboardBody from "./DashboardBody";
import DashboardMenu from "./DashboardMenu";
import {
    faHome,
    faUsers,
    faWineBottle,
    faTractor
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import { useSnackbar } from "notistack";
import { ACCESS_TOKEN } from "../../../utils/constant";
import requestAPI from "../../../apis";
function Dashboard() {
    const menuItems = [
        {
            id: "1",
            name: "Tổng Quan",
            icon: faHome,
        },
        {
            id: "2",
            name: "Sản phẩm",
            icon: faWineBottle,
        },
        {
            id: "3",
            name: "Người dùng",
            icon: faUsers,
        },
        {
            id: "4",
            name: "Đơn đặt hàng",
            icon: faTractor,
        },

    ];
    const [tabId, setTabId] = useState("1");
    const [openMenu, setOpenMenu] = useState(true);
    const [openMenuMobile, setOpenMenuMobile] = useState(true);
    const [DriverId] = useState("");
    const [orderNotice] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const history = useHistory();
    const { enqueueSnackbar } = useSnackbar();
    const setTabIdOnClick = (id) => {
        setTabId(id);
    };


    const verifyToken = useCallback(async () => {
        if (!ACCESS_TOKEN()) {
            history.push('/dashboard')
            enqueueSnackbar('Đã phát hiện lỗi truy cập, vui lòng đăng nhập lại', {
                persist: false,
                variant: 'error',
                preventDuplicate: true,
                autoHideDuration: 3000,
            })
        }
        else if (ACCESS_TOKEN()) {
            requestAPI('/user/profile', 'GET', null).then((res) => {
                if (res) {
                    console.log(res.data.content.fullName);
                    if (res.data?.content) {
                        setUserInfo(res.data?.content)
                    }
                }
            })
        }

    }, [])

    useEffect(() => {
        verifyToken()
    }, [verifyToken])



    const setOpenMenuOnClick = () => {
        if (window.innerWidth <= 1110) {
            setOpenMenu(true);
            if (openMenuMobile) setOpenMenuMobile(false);
            else setOpenMenuMobile(true);
        } else {
            if (openMenu) setOpenMenu(false);
            else setOpenMenu(true);
        }
    };

    const [openCreate, setOpenCreate] = useState(false);

    const setOpenCreateFunc = () => {
        document.body.style.overflow = "hidden";
        setOpenCreate(true);
    };

    const setCloseCreateFunc = (bool) => {
        document.body.style.overflow = "unset";
        setOpenCreate(bool);
    };

    const [openEdit, setOpenEdit] = useState(false);

    const setOpenEditFunc = (event) => {
        document.body.style.overflow = "hidden";
        setOpenEdit(true);
    };

    const setCloseEditFunc = (bool) => {
        document.body.style.overflow = "unset";
        setOpenEdit(bool);
    };

    return (
        <div className="Dashboard flex">
            <DashboardMenu
                setTabIdOnClick={setTabIdOnClick}
                setOpenMenuOnClick={setOpenMenuOnClick}
                tabId={tabId}
                menuItems={menuItems}
                openMenu={openMenu}
                openMenuMobile={openMenuMobile}
                setCloseCreateFunc={setCloseCreateFunc}
                setCloseEditFunc={setCloseEditFunc}
                userInfo={userInfo}
            />
            <DashboardBody
                tabId={tabId}
                menuItems={menuItems}
                openMenu={openMenu}
                openMenuMobile={openMenuMobile}
                openCreate={openCreate}
                openEdit={openEdit}
                setOpenMenuOnClick={setOpenMenuOnClick}
                setOpenCreateFunc={setOpenCreateFunc}
                setCloseCreateFunc={setCloseCreateFunc}
                setOpenEditFunc={setOpenEditFunc}
                setCloseEditFunc={setCloseEditFunc}
                DriverId={DriverId}
                orderNotice={orderNotice}
            />
        </div>
    );
}
export default withRouter(Dashboard);
