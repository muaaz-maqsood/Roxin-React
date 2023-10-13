import React from 'react'
import Innerdivs from './Innerdivs'

export default function Section2() {
    return (
        <div className='h-auto py-10 w-full flex flex-col md:flex md:flex-row md:flex-wrap md:justify-evenly md:items-center md:content-evenly items-center gap-5'>
            <div className='h-[40vh] w-[80%] md:h-[37vh] py-4  rounded-[10px]  md:w-[45%] lg:w-[28%] '>
                <h1 className='font-thin text-[#55565B] text-3xl tracking-[1.5px] py-5 px-14'>WHAT WE DO</h1>
                <h2 className='text-5xl text-[#55565B] font-bold px-14'>EXPERTS</h2>
                <p className='font-thin text-[#55565B] text-xl px-14 py-5'><i>We build digital solutions.</i></p>
            </div>
            <Innerdivs heading="PIXEL PERFECT" />
            <Innerdivs heading="VECTOR SHAPES" />
            <Innerdivs heading="GOOGLE FONTS" />
            <Innerdivs heading="EASY LAYERS" />
            <Innerdivs heading="BOOTSTRAP GRID" />
        </div>
    )
}


