import React from 'react'

export default function Innerdivs(props) {
    return (
        <div id='First_div' className=' h-[37vh] py-4 w-[80%] md:w-[45%] lg:w-[28%] rounded-[10px]   relative overflow-hidden'>
            <h1 id='pixel' className='text-xl font-medium text-center py-6'>{props.heading}</h1>
            <p className='text-xl font-thin text-center'>Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet</p>
            <div className='h-[60px] w-full flex justify-center items-center mt-2'>
                <button className='h-auto p-2 tracking-[1px]'>Learn More</button>
            </div>
        </div>
    )
}


