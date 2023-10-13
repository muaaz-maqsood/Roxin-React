import React from 'react'

export default function Products_Images(props) {

  return (
    <div id='After' className='h-[39vh] w-[85%] sm:w-[45%] mx-auto md:w-[31%] relative rounded-[10px] overflow-hidden'>
        <div style={{
        backgroundImage:`url(${props.data.img})`
    }} 
    
    id='BG_IMG' className=' h-full w-ful rounded-[10px]'></div>
    </div>
  )
}

 
