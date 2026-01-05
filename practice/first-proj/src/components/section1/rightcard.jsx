import React from 'react'
import RightCardContent from './rightcardconent.jsx'
const rightcard = (props) => {
    return (
        <div className='bg-yellow-300 h-full w-60 shrink-0 rounded-4xl overflow-hidden relative '>

            <img className="w-full h-full object-fit rounded-4xl" src={props.img} alt="" />
         <RightCardContent no={props.no} tag={props.tag} />
         

        </div>

    )
}

export default rightcard
