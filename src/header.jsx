import React from 'react'
import IMG2 from "./images/logo.svg"
import { Link } from "react-router-dom"
import Btn from './btn'
function Header(props) {
   
    return (
        <>
            <div className='relative h-auto w-full overflow-hidden'>
                
                <div className='absolute z-[2] h-[100vh] w-full'>
                    <nav id='Nav' className='h-auto w-full flex justify-around py-7 fixed bg-black opacity-24'>
                        <img src={IMG2} alt=""  id='img' />
                        <ul id='ul' className=' h-full w-[60%] hidden lg:flex justify-around font-semibold text-white  lg-block'>
                            <Link>HOME</Link>
                            <Link>FEATURES</Link>
                            <Link>PORTFOLIO</Link>
                            <Link>ELEMENTS</Link>
                            <Link>ABOUT</Link>
                            <Link>TEAM</Link>
                            <Link>BLOG</Link>
                            <Link>CONTACT</Link>
                        </ul>
                    </nav>
                    
                    <h1 className=' text-white z-[2] mt-[20%] md:mt-[6%] text-xl sm:text-2xl sm:py-10 sm:px-14 md:text-4xl py-5 px-5  md:py-14 md:px-28 font-bold'>  Graphic . Web . Digital.  </h1>
                    <h2 className='text-white text-5xl px-6 py-2 md:text-8xl lg:text-9xl font-bold md:px-28 md:py-5 md:tracking-[20px]'> START-UP </h2>
                    <p className='text-white px-6 py-3 w-[80%] sm:w-[65%] sm:px-12  lg:px-24 lg:w-[50%] lg:py-6 font-normal tracking-[1px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptatum officiis, perferendis iste, molestiae earum voluptates beatae?</p>
                    <Btn />
                </div>
                <section className=' section1 h-[100vh] w-full'></section>
            </div>
        </>
    )
}

export default Header
