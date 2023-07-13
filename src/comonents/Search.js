import React from 'react'
import {RiCustomerService2Full} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
    <div className='lg:col-span-2 flex flex-col justify-evenly'>
       <div>
       <h2>Luxury location</h2>
       <p className='py-4'> A luxury vacation offers an exquisite experience like no other, allowing you to immerse yourself in opulent accommodations, personalized services, and breathtaking destinations. It's a chance to escape the ordinary and indulge in the extraordinary. </p>
       </div>
       <div className='grid sm:grid-cols-2 gap-8 py-4'>
       
        <div className='flex flex-col lg:flex-row items-center text-center'>
        <button><MdOutlineTravelExplore size={50} /></button>
        <h3 className='py-2'>AUTOMATED BOOKING </h3>
        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
        </div>

       </div>
    </div>
    <div>
    <div className='boder text-center'>
    <p className='pt-2'>GET AN ADDITION 10% OFF</p>
    <p className='py-4'>12 HOUR LEFT</p>
    <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
    </div>
    <form className='w-full'>
        <div className='flex  flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
                <option> Maldives</option>
                <option>Carribean</option>
                <option>Phillipines</option>   
                <option>Hawaii</option>

            </select>
        </div>
        <div className='flex  flex-col my-4'>
            <label>Check-In </label>
            <input className='border rounded-md p-2' type='date' />
        </div>
        <div className='flex  flex-col my-2'>
        <label>Check Out</label>
        <input className='border rounded-md p-2' type='date' />
        </div>
        <div>
            <button className='w-full my-4 '>Rates & Availabilities</button>
        </div>
    </form>
    </div>

    </div>
  )
}

export default Search