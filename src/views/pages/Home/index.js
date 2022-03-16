import React, { useEffect } from "react";
import Banner from "../../../components/EndUser/Home/Banner/Banner";
import Products from "../../../components/EndUser/Home/Products/Products";


export default function index() {

    return (
        <main className="home">
            <Banner />
            <Products />
        </main>
    );
}
