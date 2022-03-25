import React, { useState, useEffect, useCallback } from "react";
import {
    faFileInvoice,
    faMoneyBillWave,
    faTshirt,
    faUser,
    faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import DashboardTotalCount from "./DashboardTotalCount";
import DashboardTopFive from "./DashboardTopFive";
// import requestAPI from "../../../../apis";
import { CircularProgress } from "@mui/material";
// import { getReportByCountry } from "../../../../apis";

export default function DashboardMain() {
    const [confirmed, setConfirmed] = useState(null);
    const [Deaths, setDeaths] = useState(null);
    const [Active, setActive] = useState(null);
    const [Recovered, setRecovered] = useState(null);



    // useEffect(() => {

    //     getReportByCountry('vn').then((res) => {
    //         // xóa đi phần tử cuối cùng trong res.data		
    //         // res.data.pop();
    //         setConfirmed(res.data[res.data.length - 1].Confirmed);
    //         setDeaths(res.data[res.data.length - 1].Deaths);
    //         setActive(res.data[res.data.length - 1].Active);
    //         setRecovered(res.data[res.data.length - 1].Recovered);
    //     })
    // }, []);
    const totalCount = [
        {
            id: 1,
            title: "Tổng Khách hàng",
            count: confirmed ? confirmed : <CircularProgress />,
            percent: 30,
            isDecrease: false,
            color: "darkpurple",
            icon: faFileInvoice,
        },
        {
            id: 2,
            title: "Tổng loại sản phẩm",
            count: Deaths ? Deaths : <CircularProgress />,
            percent: 10,
            isDecrease: true,
            color: "darkred",
            icon: faShoppingBag,
        },
        {
            id: 3,
            title: "Doanh thu tháng",
            count: Active ? Active : <CircularProgress />,
            percent: 20,
            isDecrease: false,
            color: "darkblue",
            icon: faMoneyBillWave,
        },
        {
            id: 4,
            title: "Tổng doanh thu năm",
            count: 500,
            percent: 19,
            isDecrease: true,
            color: "lightblue",
            icon: faUser,
        },
    ];

    return (
        <div className="dashboard-main">
            <div className="row flex">
                {totalCount.map((item, index) => {
                    return <DashboardTotalCount key={index} item={item} />;
                })}
            </div>

            <div className="row flex">
                <DashboardTopFive
                    icon={faUser}
                    title="Sản phẩm bán chạy"
                    color="lightblue"
                    // data={topAppliedCompany}
                    table={[
                        {
                            title: "Tên sản phẩm",
                        },
                        {
                            title: "Số lượng",
                        },
                    ]}
                />
                <DashboardTopFive
                    icon={faTshirt}
                    title="Sản phẩm bán chậm"
                    color="pink"
                    // data={topAppliedJob}
                    table={[
                        {
                            title: "Tên sản phẩm",
                        },
                        {
                            title: "Số lượng",
                        },
                    ]}
                />
            </div>
        </div>
    );
}
