import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import banner1 from "../../../../assets/Banner/banner_imac_trang_chu.jpg"
import banner2 from "../../../../assets/Banner/banner_macbook_trang_chu.jpg"

export default function Products() {
    const [listImac, setListImac] = useState([])
    const [listLaptop, setListLaptop] = useState([])
    const [listIphone, setListIphone] = useState([])

    const [product] = useState([
        {
            name: "CTO/ BTO – iMac 2020 27 inch 5K – 3.6GHz/Core i9/128GB/4TB/Pro 5700 XT",
            img: "https://picsum.photos/200/300",
            price: "14000000đ",
            category: "IMAC",
            banner: `${banner1}`
        },
        {
            name: "CTO/ BTO – iMac 2020 27 inch 5K – 3.6GHz/Core i9/128GB/4TB/Pro 5700 XT",
            img: "https://picsum.photos/200/300",
            price: "14000000đ",
            category: "IMAC",

        },
        {
            name: "CTO/ BTO – iMac 2020 27 inch 5K – 3.6GHz/Core i9/128GB/4TB/Pro 5700 XT",
            img: "https://picsum.photos/200/300",
            price: "14000000đ",
            category: "IMAC"
        },
        {
            name: "CTO/ BTO – iMac 2020 27 inch 5K – 3.6GHz/Core i9/128GB/4TB/Pro 5700 XT",
            img: "https://picsum.photos/200/300",
            price: "14000000đ",
            category: "IMAC"
        },
        {
            name: "CTO/ BTO – iMac 2020 27 inch 5K – 3.6GHz/Core i9/128GB/4TB/Pro 5700 XT",
            img: "https://picsum.photos/200/300",
            price: "14000000đ",
            category: "IMAC"
        },
        {
            name: "CTO/ BTO – iMac 2020 27 inch 5K – 3.6GHz/Core i9/128GB/4TB/Pro 5700 XT",
            img: "https://picsum.photos/200/300",
            price: "14000000đ",
            category: "Iphone"
        },
        {
            name: "CTO/ BTO – iMac 2020 27 inch 5K – 3.6GHz/Core i9/128GB/4TB/Pro 5700 XT",
            img: "https://picsum.photos/200/300",
            price: "14000000đ",
            category: "Iphone"
        },

        {
            name: "CTO/ BTO – iMac 2020 27 inch 5K – 3.6GHz/Core i9/128GB/4TB/Pro 5700 XT",
            img: "https://picsum.photos/200/300",
            price: "14000000đ",
            category: "IMAC"
        },
        {
            name: "CTO/ BTO – iMac 2020 27 inch 5K – 3.6GHz/Core i9/128GB/4TB/Pro 5700 XT",
            img: "https://picsum.photos/200/300",
            price: "14000000đ",
            category: "Laptop",
            banner: `${banner2}`
        },
    ])


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
        product.map(item => {
            if (item.category === 'Iphone') {
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
