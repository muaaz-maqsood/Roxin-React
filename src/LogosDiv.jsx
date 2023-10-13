import React from 'react'

function LogosDiv(props) {
  return (
    <div className='h-[30vh] w-[80%] sm:w-[40%] md:w-[30%] lg:w-[16.6666%] flex justify-center items-center'>
      <img src={props.img} alt="" className=' sm:h-[10vh] sm:w-[65%] md:w-[35%] lg:w-[61%]' />
    </div>
  )
}

export default LogosDiv
