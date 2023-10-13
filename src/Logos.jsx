import React from 'react'
import LogosDiv from './LogosDiv'
import Logo from "./images/logo-01.png"
import Logo2 from "./images/logo-02.png"
import Logo3 from "./images/logo-03.png"
import Logo4 from "./images/logo-02.png"
import Logo5 from "./images/logo-01.png"
import Logo6 from "./images/logo-03.png"


function Logos() {
  return (
    <div className='h-auto w-full py-4 flex flex-col flex-wrap sm:flex-row content-center sm:justify-evenly '>
      <LogosDiv img={Logo} />
      <LogosDiv img={Logo2} />
      <LogosDiv img={Logo3} />
      <LogosDiv img={Logo4} />
      <LogosDiv img={Logo5} />
      <LogosDiv img={Logo6} />
    </div>
  )
}

export default Logos
