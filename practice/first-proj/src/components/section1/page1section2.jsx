import React from 'react'
import LeftContent from './leftcontent.jsx'
import RightContent from './rightcontent.jsx'
const page1section2 = (props) => {
  return (
    <div className=' h-[90vh] px-18 py-6 gap-10 flex justify-between items-center'>
        <LeftContent />
        <RightContent user={props.user} />
    </div>
  )
}

export default page1section2
