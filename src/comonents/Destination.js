import React from 'react'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import maldives3 from '../assets/maldives3.jpg'
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora2.jpg'
 

const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
    <h1>All-Inclusive Resort</h1>
    <p className='py-4'>Best options are here</p>
    <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
    <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={maldives} alt='/'/>
    <img className='w-full h-full object-cover' src={maldives2} alt='/'/>
    <img className='w-full h-full object-cover' src={maldives3} alt='/'/>
    <img className='w-full h-full object-cover' src={borabora} alt='/'/>
    <img className='w-full h-full object-cover' src={borabora2} alt='/'/>
    

    </div>


    </div>
  )
}

export default Destination