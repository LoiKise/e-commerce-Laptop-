import { useSnackbar } from 'notistack';
import React, { useRef, useState } from 'react'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import DashboardTextInput2 from "../Utils/DashboardTextInput2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import requestAPI from '../../../../apis';
import { Upload } from "@aws-sdk/lib-storage";
import S3 from 'react-aws-s3';
import DashboardCheckboxList from '../Utils/DashboardCheckboxList';



export default function DashboardProductsCreate(props) {
    const [products, setProducts] = useState([]);
    const { enqueueSnackbar } = useSnackbar();
    const createForm = useRef();
    const typeSale = [
        {
            id: "sale",
            name: "Sale",
        },
    ];
    const [data, setData] = useState({
        productName: "",
        price: "",
        detail: "",
        percentSale: "",
        quantity: "",
        category: "",
        sale: false,
        ram: "",
        color: "",
        cpu: "",
        stograge: "",
        screen: "",
        vga: "",
        weight: "",
    });

    const [img, setImg] = useState()

    const handleChangeImage = (e) => {

        const file = e.target.files[0]

        setImg(file)
    };



    const onSubmit = async (event) => {
        event.preventDefault();
        // const body = {
        //     productName: data.productName,
        //     price: data.price,
        //     detail: data.detail,
        //     percentSale: data.percentSale,
        //     quantity: data.quantity,
        //     category: data.category,
        //     sale: data.sale,
        //     img: img
        // }
        const fd = new FormData();
        fd.append('img', img)
        fd.append("productName", data.productName)
        fd.append("price", data.price)
        fd.append("detail", data.detail)
        fd.append("percentSale", data.percentSale)
        fd.append("quantity", data.quantity)
        fd.append("category", data.category)
        fd.append("weight", data.weight)
        fd.append("ram", data.ram)
        fd.append("color", data.color)
        fd.append("cpu", data.cpu)
        fd.append("stograge", data.stograge)
        fd.append("screen", data.screen)
        fd.append("vga", data.vga)

        const createProduct = async () => {
            await requestAPI("/products/addProduct", "POST", fd).then(() => {
                props.setCloseCreateFunc(false);
                if (window.location.reload()) {
                    enqueueSnackbar("Tạo đơn thành công", {
                        persist: false,
                        variant: "success",
                        preventDuplicate: true,
                        autoHideDuration: 3000,
                    });
                }
            })
        }
        createProduct();
    }

    return (
        <div className="DashboardProductInfo">
            <div className="create-box">
                <div className="create-box-title flex">
                    <h2 className="create-box-title-text ">Thông tin công ty</h2>
                    <div
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => {
                            props.setCloseCreateFunc(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <form
                    encType="multipart/form-data"
                    onSubmit={onSubmit}
                    className="db-form-input"
                >
                    {/* Sender Infomation */}
                    <div className="db-form-input2">
                        <DashboardTextInput2
                            textType={"text"}
                            title={"Tên sản phẩm"}
                            isRequire={true}
                            data={data}
                            setData={setData}
                            objectKey={"productName"}
                        />
                        <DashboardTextInput2
                            textType={"text"}
                            title={"Ram"}
                            isRequire={true}
                            data={data}
                            setData={setData}
                            objectKey={"ram"}
                        />
                        <DashboardTextInput2
                            textType={"text"}
                            title={"Màu sắc"}
                            isRequire={true}
                            data={data}
                            setData={setData}
                            objectKey={"color"}
                        />
                        <DashboardTextInput2
                            textType={"text"}
                            title={"Cpu"}
                            isRequire={true}
                            data={data}
                            setData={setData}
                            objectKey={"cpu"}
                        />
                        <DashboardTextInput2
                            textType={"text"}
                            title={"Bộ nhớ"}
                            isRequire={true}
                            data={data}
                            setData={setData}
                            objectKey={"stograge"}
                        />
                        <DashboardTextInput2
                            textType={"text"}
                            title={"Màn hình"}
                            isRequire={true}
                            data={data}
                            setData={setData}
                            objectKey={"screen"}
                        />
                        <DashboardTextInput2
                            textType={"text"}
                            title={"Card đồ họa"}
                            isRequire={true}
                            data={data}
                            color="info"
                            setData={setData}
                            objectKey={"vga"}
                        />
                        <DashboardTextInput2
                            title={"Cân nặng"}
                            textType='number'
                            isRequire={true}
                            data={data}
                            color="success"
                            setData={setData}
                            objectKey={"weight"}
                            variant="outlined"
                        />
                        <DashboardTextInput2
                            title="Giá sản phẩm "
                            variant="outlined"
                            textType='number'
                            size="small"
                            isRequire={true}
                            color="success"
                            style={{ marginBottom: "30px" }}
                            data={data}
                            setData={setData}
                            objectKey={"price"}
                        />
                        <DashboardTextInput2
                            title="Hãng sản phẩm "
                            variant="outlined"
                            size="small"
                            isRequire={true}
                            color="success"
                            style={{ marginBottom: "30px" }}
                            data={data}
                            setData={setData}
                            objectKey={"category"}
                        />
                        <DashboardTextInput2
                            title="Mô tả sản phẩm "
                            variant="outlined"
                            size="small"
                            isRequire={true}
                            color="success"
                            style={{ marginBottom: "30px" }}
                            data={data}
                            setData={setData}
                            objectKey={"detail"}
                        />
                        <DashboardTextInput2
                            title="Phần trăm sale"
                            variant="outlined"
                            textType='number'
                            size="small"
                            color="success"
                            style={{ marginBottom: "30px" }}
                            data={data}
                            setData={setData}
                            objectKey={"percentSale"}
                        />
                        <DashboardTextInput2
                            title="Số lượng"
                            variant="outlined"
                            textType='number'
                            size="small"
                            color="success"
                            style={{ marginBottom: "30px" }}
                            data={data}
                            setData={setData}
                            objectKey={"quantity"}
                        />
                        <DashboardCheckboxList
                            title={"Sale"}
                            setData={setData}
                            data={data}
                            list={typeSale}
                        />
                    </div>
                    <div className="dashboard-form__file">
                        <div className="dashboard-form__file-select">
                            <label htmlFor="fileUpload">
                                <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="upload"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path>
                                </svg>
                                Tải logo
                                <input
                                    style={{ display: "none" }}
                                    type="file"
                                    id="fileUpload"
                                    onChange={handleChangeImage}
                                />
                            </label>
                        </div>
                        <div className="dashboard-form__file-img">
                            {/* {data.logo && <img src={data.logo} alt="" />} */}
                        </div>
                    </div>
                    <div className="button__submit">
                        <button type="submit" className="submit-form">Thêm sản phẩm</button>
                    </div>
                </form>
            </div>
        </div>

    )
}
