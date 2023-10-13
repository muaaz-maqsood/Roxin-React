import React from 'react'

function ClientsDivs(props) {
  return (
    <div id='Clients_div' className='h-[55vh] w-full sm:w-[50%] md:w-[33.33%] lg:w-[25%] flex flex-col justify-center duration-700'>
        <h1 className='text-white font-bold text-4xl text-center'>{props.data.h1}</h1>
        <p className='text-white font-thin text-2xl text-center mt-1'>{props.data.p}</p>
    </div>
  )
}

export default ClientsDivs
