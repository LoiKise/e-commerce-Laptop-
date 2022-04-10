import React, { useCallback, useEffect, useState } from 'react'

import { useSnackbar } from "notistack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DashboardControl from '../Utils/DashboardControl'
import { DataGrid } from "@mui/x-data-grid";
import CustomToolbar from '../Utils/DashboardConfigToolBar'
import CustomPagination from "../Utils/CustomPagination"
import CustomNoRowsOverlay from "../Utils/CustomNoRowsOverlay"
import CustomLoadingOverlay from "../Utils/CustomLoadingOverlay"
import DashboardDialogConfirm from "../Utils/DashboardDialogConfirm";
import requestAPI from "../../../../apis"


export default function DashboardProductTable(props) {


    const [products, setProducts] = useState([]);
    const [selection, setSelection] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    //const update = useSelector((state) => state.products.isUpdate);
    const [open, setOpen] = useState(false);

    const { enqueueSnackbar } = useSnackbar();
    // const history = useHistory();
    // const dispatch = useDispatch();


    useEffect(() => {
        setIsLoading(true);
        requestAPI("/products/getProduct", "GET", null).then((res) => {
            // console.log('cac', res.data.content[0]);
            setProducts(res.data?.content)
            setIsLoading(false);
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteOnClick = () => {
        if (selection.length > 0) {
            console.log(selection[0])

            RemoveProduct(selection)
                .then((res) => {
                    if (res) {
                        enqueueSnackbar("Xóa hóa đơn thành công", {
                            persist: false,
                            variant: "success",
                            preventDuplicate: true,
                            autoHideDuration: 3000,
                        });
                        requestAPI("/products/getProduct", "GET", null).then((res) => {
                            // console.log('cac', res.data.content[0]);
                            setProducts(res.data.content)
                            setIsLoading(false);
                        }).catch((err) => {
                            console.log(err)
                        })
                    }
                })
                .catch((err) => console.log(err));
        } else {
            enqueueSnackbar("Vui lòng chọn hóa đơn muốn xóa", {
                persist: false,
                variant: "error",
                preventDuplicate: true,
                autoHideDuration: 3000,
            });
        }

    }

    const RemoveProduct = async (id) => {

        const data = await requestAPI(`/products/deleteProduct/${id}`, "DELETE", id);
        return data
    }

    // const deleteOnClick

    const handleOpenDialogDelete = () => {
        setOpen(true);
    };
    const handleCloseDialogDelete = () => {
        setOpen(false);
    };


    return (
        <div className="topfive flex-col" style={{ width: "100%" }}>
            <div className={`headerbox flex-center ${props.color}`}>
                <FontAwesomeIcon icon={props.icon} className="icon" />
            </div>
            <div className="top-location-container">
                <div className="headerbox-header">
                    <p>{props.title}</p>
                    {/* <button onClick={RemoveProduct}>Xóa test</button> */}
                </div>
                <div className="topfive-content flex-col">
                    <DashboardControl
                        addController={props.setOpenCreateFunc}
                        deleteController={deleteOnClick}
                        // searchOnChange={searchOnChange}
                        // searchController={searchOnSubmit}
                        handleOpenDialogDelete={handleOpenDialogDelete}
                        placeholderSearch={"Tìm kiếm sản phẩm"}
                    />
                    <div style={{ height: 400, width: "100%" }}>
                        <DataGrid
                            components={{
                                Toolbar: CustomToolbar,
                                Pagination: CustomPagination,
                                NoRowsOverlay: CustomNoRowsOverlay,
                                LoadingOverlay: CustomLoadingOverlay,
                            }}
                            loading={isLoading}
                            columns={props.table}
                            rows={products}
                            getRowId={(row) => row._id}
                            pagination
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            onSelectionModelChange={(newSelectionModel) => {
                                setSelection(newSelectionModel);
                            }}
                            checkboxSelection
                        />
                    </div>
                    <DashboardDialogConfirm
                        open={open}
                        handleCloseDialogDelete={handleCloseDialogDelete}
                        handleDelete={deleteOnClick}
                    />

                </div>
            </div>
        </div>
    )
}
