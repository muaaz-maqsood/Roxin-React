import React from 'react'

function SameThreeCards(props) {
  console.log(props.text,"test here");
  return (
    <div id='card_1' className='h-[20vh] w-full mt-[153%] duration-700 opacity-[0] flex flex-col justify-center '>
            <p className='text-white text-xl font-semibold tracking-[2px] text-center'>{props.text}</p>
            <p className='text-white text-sm tracking-[2px] text-center mt-1'><i>UI/UX GURU</i></p>
    </div>
  )
}

export default SameThreeCards
