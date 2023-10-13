import React from 'react'
import SameThreeCards from './SameThreeCards'

function Same(props) {
    return (
        <div id='Team_01' style={{ background: `url(${props.new.img})`}}
            className=' h-[60vh] md:h-[80vh] w-[60%] md:w-[45%] lg:w-[27%] overflow-hidden'>
              {
                props.new.id==1 &&   <SameThreeCards text="JASON STRATHAM"/>
              }
               {
                props.new.id==2 &&   <SameThreeCards text="JESSICA FIZOVIC"/>
              }
               {
                props.new.id==3 &&   <SameThreeCards text="JAMES NOSS"/>
              }
              
        </div>
    )
}

export default Same
