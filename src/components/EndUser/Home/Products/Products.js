import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import banner1 from "../../../../assets/Banner/banner_imac_trang_chu.jpg"
import banner2 from "../../../../assets/Banner/banner_macbook_trang_chu.jpg"
import requestAPI from "../../../../apis"

export default function Products() {
    const [listImac, setListImac] = useState([])
    const [listLaptop, setListLaptop] = useState([])
    const [listIphone, setListIphone] = useState([])

    const [product, setProduct] = useState([])


    // const getListImac = () => {
    //     setListImac(product.filter(i => i.category === 'IMAC'))
    // }

    // const getListLaptop = () => {
    //     setListLaptop(product.filter(i => i.category === 'Laptop'))
    // }

    // const getListIphone = () => {
    //     setListIphone(product.filter(i => i.category === 'Iphone'))
    // }

    // useEffect(() => {
    //     try {
    //         const getListImac = () => {
    //             setListImac(product.filter(i => i.category === 'IMAC'))
    //         }
    //         getListImac()
    //         const getListIphone = () => {
    //             setListIphone(product.filter(i => i.category === 'IMAC'))
    //         }
    //         getListIphone()
    //     }
    //     catch (err) {

    //     }


    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])



    useEffect(() => {
        requestAPI('/products/getProduct', 'GET', null).then((res) => {
            if (res.data?.content) {
                setProduct(res.data?.content)
            }
            console.log("ressss", product);
        }).catch((err) => {
            console.log(err);
        })


    }, [])

    useEffect(() => {
        product.map(item => {
            if (item.category === 'Apple') {
                return setListIphone(prevIphone => [...prevIphone, item])
            } else if (item.category === 'IMAC') {
                return setListImac(prevImac => [...prevImac, item])
            }
            return setListLaptop(prevLaptop => [...prevLaptop, item])
        })
    }, [product])


    return (
        <React.Fragment>
            <ProductList product={listImac} type='IMAC' />
            <ProductList product={listLaptop} type='Laptop' />
            <ProductList product={listIphone} type='IPHONE' />
        </React.Fragment>
    )
}
