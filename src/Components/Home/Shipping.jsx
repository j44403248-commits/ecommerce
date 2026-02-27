import React from 'react';
import { FaGift, FaBuildingLock } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";

const Shipping = () => {
  return ( 
    <div className='py-5'>
    <div className='bg-black py-10 w-full '>
      <div className='max-w-6xl mx-auto flex justify-center gap-28 '>

        {/* First item */}
        <div className='flex flex-col items-center text-white'>
          <FaGift className='text-4xl mb-2' />
          <h1 className='text-center text-sm font-semibold'>
            FREE SHIPPING ABOVE RS. 3000
          </h1>
        </div>

        {/* Second item */}
        <div className='flex flex-col items-center text-white'>
          <MdOutlineWatchLater className='text-4xl mb-2' />
          <h1 className='text-center text-sm font-semibold'>
            DELIVERY IN 3-5 WORKING DAYS
          </h1>
        </div>

        {/* Third item */}
        <div className='flex flex-col items-center text-white  '>
          <FaBuildingLock className='text-4xl mb-2 mt-2' />
          <h1 className='text-center text-sm font-semibold'>
            14 DAYS EASY RETURN & EXCHANGE
          </h1>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Shipping;