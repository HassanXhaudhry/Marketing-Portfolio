import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const NewsLetter = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-silverPrimary py-16'>
    <div className='flex flex-col items-center lg:w-4/5 mx-auto'>
      <div className='text-center mb-6'>
        <h2 className='lg:text-3xl text-3xl text-neutral-800 font-semibold lg:leading-snug'>
          Pellentesque suscipt frigilla libero eu
        </h2>
      </div>
  
      <div className="flex items-center justify-center">
        <button className="btn-primary text-md flex items-center">
          <span>Get a demo</span>
          <FaArrowRightLong className="text-md ml-1" />
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default NewsLetter
