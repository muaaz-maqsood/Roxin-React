import React from 'react'
import IMG from "./images/divider.png"
function Teamwork() {
  return (
    <div className='h-auto w-full p-6'>
        <p className='text-xl md:text-3xl px-10 pt-6 font-thin text-[#55565B] tracking-[1px]'>WHO WE ARE</p>
        <h1 className='text-xl sm:text-3xl md:text-4xl text-[#55565B] font-bold px-10 pt-3  tracking-[3px]'>TEAM WORK</h1>
        <p className='text-xl md:text-2xl font-thin px-10 pt-3 pb-4 text-[#55565B] '><i>We really love what we do & our work on every project truly reflects that.</i></p>
        <img src={IMG} alt="" className='h-1 px-10 mt-5' />
    </div>
  )
}

export default Teamwork
