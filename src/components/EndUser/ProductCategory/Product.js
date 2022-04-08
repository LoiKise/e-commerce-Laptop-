import React from 'react'

export default function Product() {
    return (
        <div className='container category'>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1554600740-951beab4712b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
                <h2 class="card__title">Coffee mug</h2>
                <span class="card__description">Summer outfits</span>
                <div class="card__shop">
                    <span class="card__shop__price">7.99$</span>
                    <button class="card__shop__action">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 14.002 16"
                        >
                            <g id="Bag" transform="translate(0.001)">
                                <path
                                    id="Combined_Shape"
                                    data-name="Combined Shape"
                                    d="M10.235,12H3.786A3.842,3.842,0,0,1,.733,10.958,4.283,4.283,0,0,1,.082,7.452L.687,2.5C.952.933,1.838,0,3.058,0h7.9a2.045,2.045,0,0,1,1.422.585A3.547,3.547,0,0,1,13.334,2.5l.6,4.956A4.164,4.164,0,0,1,13.2,10.87,3.791,3.791,0,0,1,10.235,12Zm-.99-9.337a.71.71,0,0,0-.688.728.688.688,0,1,0,1.374,0A.709.709,0,0,0,9.245,2.663Zm-4.5,0a.71.71,0,0,0-.688.728.689.689,0,1,0,1.375,0A.71.71,0,0,0,4.742,2.663Z"
                                    transform="translate(0 4)"
                                    fill="#fff"
                                />
                                <path
                                    id="Path_34167"
                                    d="M7.979,3.819A.4.4,0,0,1,7.944,4H6.795a.519.519,0,0,1-.035-.181,2.787,2.787,0,0,0-5.574,0,.519.519,0,0,1,0,.181H.008a.519.519,0,0,1,0-.181A4,4,0,0,1,8,3.819Z"
                                    transform="translate(3)"
                                    fill="#fff"
                                    opacity="0.4"
                                />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}
