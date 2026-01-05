import React from 'react'
import Rightcard from './rightcard.jsx'
const rightcontent = (props) => {
  return (
    <div className='w-2/3 h-full p-5 flex flex-nowrap gap-3   '>
        {props.user.map(function(elem){
            return <Rightcard img={elem.img} no={elem.no} tag={elem.tag} />
        })}
    </div>
  )
}

export default rightcontent
