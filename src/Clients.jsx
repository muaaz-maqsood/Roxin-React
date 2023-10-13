import React from 'react'
import ClientsDivs from './ClientsDivs'

function Clients() {
  return (
    <div id='Clients' className='h-auto w-full flex flex-col content-center md:content-center flex-wrap sm:flex-row md:flex-row'>
      <ClientsDivs data={{h1:"505",p:"TOTAL PROJECTS"}}/>
      <ClientsDivs data={{h1:"220",p:"SATISFIED CLIENTS"}}/>
      <ClientsDivs data={{h1:"720",p:"AWARDS WON"}}/>
      <ClientsDivs data={{h1:"707",p:"MILESTONES MET"}}/>
    </div>
  )
}

export default Clients
