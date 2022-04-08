import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GridCellExpand from '../Utils/GridCellExpand'
import DashboardTable from './DashboardProductTable'
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { EditToolbar } from "../Utils/DashboardEditToolBar";

export default function DashboardProuctTable(props) {

    const [table, setTable] = useState([]);
    //const isShowMore = useSelector((state) => state.products.showMore);
    const dispatch = useDispatch();
    console.log(table)

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setTable([
                {
                    headerName: "Mã bài viết",
                    renderCell: renderCellExpand,
                    width: 150,

                },
                {
                    headerName: "Tên sản phẩm",
                    field: "productName",
                    renderCell: renderCellExpand,
                    width: 150,

                },
                {
                    headerName: "Giá sản phẩm",
                    field: "price",
                    renderCell: renderCellExpand,
                    width: 150,

                },
                {
                    headerName: "Hình ảnh",
                    field: "img",
                    renderCell: renderCellExpand,
                    width: 150,

                },
                {
                    headerName: "Mô tả",
                    field: "detail",
                    renderCell: renderCellExpand,
                    width: 150,

                },
                {
                    headerName: "Hãng sản phẩm",
                    field: "category",
                    renderCell: renderCellExpand,
                    width: 150,

                },
                {
                    headerName: "Giảm giá",
                    field: "sale",
                    renderCell: renderCellExpand,
                    width: 150,

                },
                {
                    headerName: "Ram",
                    field: "ram",
                    renderCell: renderCellExpand,
                    width: 175,
                },
                {
                    headerName: "Màu sắc",
                    field: "color",
                    renderCell: renderCellExpand,
                    width: 175,
                },
                {
                    headerName: "Cpu",
                    field: "cpu",
                    renderCell: renderCellExpand,
                    width: 175,
                },
                {
                    headerName: "Màn hinh",
                    field: "screen",
                    renderCell: renderCellExpand,
                    width: 150,
                },
                {
                    headerName: "Bộ nhớ",
                    field: "stograge",
                    renderCell: renderCellExpand,
                    width: 150,
                },
                {
                    headerName: "Vga",
                    field: "vga",
                    renderCell: renderCellExpand,
                    width: 150,
                },
                {
                    headerName: "Cân nặng",
                    field: "weight",
                    renderCell: renderCellExpand,
                    width: 150,
                },
                {
                    headerName: "Tùy chỉnh",
                    field: "control",
                    renderCell: (params) => {
                        return (
                            <div
                                className="d-flex justify-content-between align-items-center"
                                style={{ cursor: "pointer" }}
                            >
                                {/* <EditToolbar
                                    getItem={getNewsUpdate}
                                    params={params.row}
                                    setOpenEditFunc={props.setOpenEditFunc}
                                /> */}
                            </div>
                        );
                    },
                    width: 150,
                }
            ])
        }
        else {
            setTable([
                {
                    headerName: "Mã bài viết",

                    renderCell: renderCellExpand,
                    width: 150,

                },

                {
                    headerName: "Tên sản phẩm",
                    field: "productName",
                    renderCell: renderCellExpand,
                    width: 175,

                },
                {
                    headerName: "Giá sản phẩm",
                    field: "price",
                    renderCell: renderCellExpand,
                    width: 175,

                },
                {
                    headerName: "Hình ảnh",
                    field: "img",
                    renderCell: renderCellExpand,
                    width: 175,

                },
                {
                    headerName: "Mô tả",
                    field: "detail",
                    renderCell: renderCellExpand,
                    width: 175,

                },

                {
                    headerName: "Giảm giá",
                    field: "sale",
                    renderCell: renderCellExpand,
                    width: 150,
                },
                {
                    headerName: "Ram",
                    field: "ram",
                    renderCell: renderCellExpand,
                    width: 175,
                },
                {
                    headerName: "Màu sắc",
                    field: "color",
                    renderCell: renderCellExpand,
                    width: 175,
                },
                {
                    headerName: "Cpu",
                    field: "cpu",
                    renderCell: renderCellExpand,
                    width: 175,
                },
                {
                    headerName: "Màn hinh",
                    field: "screen",
                    renderCell: renderCellExpand,
                    width: 150,
                },
                {
                    headerName: "Bộ nhớ",
                    field: "stograge",
                    renderCell: renderCellExpand,
                    width: 150,
                },
                {
                    headerName: "Vga",
                    field: "vga",
                    renderCell: renderCellExpand,
                    width: 150,
                },
                {
                    headerName: "Cân nặng",
                    field: "weight",
                    renderCell: renderCellExpand,
                    width: 150,
                },
                {
                    headerName: "Tùy chỉnh",
                    field: "control",
                    renderCell: (params) => {
                        return (
                            <div
                                className="d-flex justify-content-between align-items-center"
                                style={{ cursor: "pointer" }}
                            >
                                <EditToolbar
                                    //getItem={getNewsUpdate}
                                    params={params.row}
                                    setOpenEditFunc={props.setOpenEditFunc}
                                />
                            </div>
                        );
                    },
                    width: 150,
                }
            ])
        }
    }, [dispatch])

    function renderCellExpand(params) {
        return (
            <GridCellExpand
                value={params.formattedValue ? params.formattedValue.toString() : ""}
                width={params.colDef.computedWidth}
            />
        );
    }



    return (
        <div className="dashboard-product">
            <DashboardTable
                icon={faNewspaper}
                title="Sản phẩm"
                color="darkpurple"
                table={table}
                setOpenCreateFunc={props.setOpenCreateFunc}
                setCloseCreateFunc={props.setCloseCreateFunc}
                setOpenEditFunc={props.setOpenEditFunc}
                setCloseEditFunc={props.setCloseEditFunc}
                isChange={props.isChange}
            />
        </div>
    )
}
