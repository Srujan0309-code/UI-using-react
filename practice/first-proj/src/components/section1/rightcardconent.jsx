import React from 'react'

const rightcardconent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
                <h1 className='  font-bold justify-items-center bg-amber-50 h-10 w-10 rounded-full px-3.5 py-2'>{props.no}</h1>
                <div>
                    <p className="text-white leading-tight text-xl " >Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet loren4
                        .</p>
                    <div className='flex justify-between items-center mt-4'>
                        <button className='bg-blue-600 p-2 rounded-2xl text-amber-50 '>{props.tag}</button>
                        <button className='bg-blue-600 p-2 rounded-2xl text-amber-50'><i className="ri-arrow-right-up-line"></i></button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default rightcardconent
