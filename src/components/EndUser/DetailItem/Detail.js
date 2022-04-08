import React, { useEffect, useState } from 'react'

import DetailTab from './DetailTab'
import DetailTop from './DetailTop'
import { useLocation } from "react-router";
import requestAPI from '../../../apis';
export default function Detail() {

    const path = useLocation();
    const [productDetail, setProductDetail] = useState();
    const { pathname } = path;
    console.log(pathname)
    const idJob = pathname?.slice(8, pathname.length);
    const [quantity, setQuantity] = useState(1)


    useEffect(() => {
        getItemJOb(idJob);
    }, [idJob]);
    const getItemJOb = (idJob) => {
        requestAPI(`/products/getProductById/${idJob}`, "GET")
            .then((res) => {
                if (res.data.content) {
                    setProductDetail(res.data.content);
                }
            })
            .catch((err) => console.log(err.message));
    };


    return (
        <div>
            <DetailTop detailItem={productDetail} />
            <DetailTab detailItem={productDetail} />
        </div>
    )
}
