import React from 'react'
import Same from './Same'
import IMG from "./images/team-02.jpg"
import IMG2 from "./images/team-01.jpg"
import IMG3 from "./images/team-03.jpg"


function ThreeImages() {
    return (
        <div className='h-auto py-5 w-full  flex flex-col justify-center content-center flex-wrap md:flex-row gap-7  '>
            <Same new={{ img: IMG, id: 1 }} />
            <Same new={{ img: IMG2, id: 2 }} />
            <Same new={{ img: IMG3, id: 3 }} />
        </div>
    )
}

export default ThreeImages
