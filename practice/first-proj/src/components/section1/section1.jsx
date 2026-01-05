import React from 'react'
import Navbar from './navbar.jsx'
import Page1Section2 from './page1section2.jsx'
const section1 = (props) => {
  console.log(props.user);
  return (
    <div className='h-screen w-full'>
        <Navbar />
        <Page1Section2 user={props.user} />
    </div>
  )
}

export default section1
