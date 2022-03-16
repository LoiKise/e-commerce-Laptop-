import React, { useEffect, useState } from 'react'
import P1 from "../../../../assets/Banner/banner-imac.jpg"
import P2 from "../../../../assets/Banner/banner-macbook-air.jpg"
import P3 from "../../../../assets/Banner/banner-surface-laptop-4.jpg"
import P4 from "../../../../assets/Banner/banner_studio-display-mac-studio_1.jpg"
import P5 from "../../../../assets/Banner/banner_studio-display-mac-studio_2.jpg"
import P6 from "../../../../assets/Banner/mac_m1_banner1.jpg"


export default function Banner() {
    const [indexSlider, setIndexSlider] = useState(0);
    const sliderList = [P1, P2, P3, P4, P5, P6];
    useEffect(() => {
        const timer = setInterval(() => {
            let newIndex = indexSlider;

            if (newIndex >= sliderList.length - 1) return setIndexSlider(0);

            newIndex++;

            setIndexSlider(newIndex);
        }, 2000);
        return () => clearInterval(timer);
    }, [indexSlider]);

    return (
        <section className="banner">
            <div className="banner-overflow">
                <div
                    className={
                        indexSlider === 0
                            ? "banner_img-list banner_img-list-active"
                            : "banner_img-list"
                    }
                    style={
                        indexSlider !== 0
                            ? {
                                transform: `translate3d(-${indexSlider}00%,0,0)`,
                                transition: "transform .5s ease 0s",
                            }
                            : {}
                    }
                >
                    {sliderList.map((item, index) => (
                        <div key={index}>
                            <img key={index} className="banner_img" src={item} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="banner-dot">
                {Array(sliderList.length)
                    .fill(0)
                    .map((dot, index) => (
                        <span
                            key={index}
                            className={
                                index === indexSlider
                                    ? "banner-dot__item banner-dot__item-active"
                                    : "banner-dot__item"
                            }
                            onClick={() => setIndexSlider(index)}
                        />
                    ))}
            </div>
        </section>


    )
}
