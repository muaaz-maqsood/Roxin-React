import React from 'react'
import Products_Images from './ProductsImages'
import IMG1 from "./images/img-37.jpg"
import IMG2 from "./images/img-36.jpg"
import IMG3 from "./images/img-35.jpg"
import IMG4 from "./images/img-34.jpg"
import IMG5 from "./images/img-33.jpg"
import IMG6 from "./images/img-32.jpg"

export default function Products() {
    return (
        <div className='h-auto w-full p-4 flex justify-center flex-wrap gap-6'>
            <Products_Images data={{ img: IMG1 }} />
            <Products_Images data={{ img: IMG2 }} />
            <Products_Images data={{ img: IMG3 }} />
            <Products_Images data={{ img: IMG4 }} />
            <Products_Images data={{ img: IMG5 }} />
            <Products_Images data={{ img: IMG6 }} />
        </div>
    )
}


