import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const [logo, setLogo] = useState(false) 
  const handelNav = () =>{
    setNav(!nav)
    setLogo(!logo)
  }

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
         <div>
        <h1  onClick={handelNav} className={logo ? 'hidden' : 'block'}>Sunset</h1>
          </div>
     <ul className='hidden md:flex cursor-pointer'>
        <li>Home</li>
        <li>Destination</li>
        <li>View</li>
        <li>Book</li>
        </ul>
        
        
        <div className='hidden md:flex z-10 cursor-pointer'>
          <BiSearch className='mr-2 gap-1' size={20}/>
          <BsPerson size={20}/>
          </div>
           <div onClick={handelNav} className='md:hidden cursor-pointer'>
           {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4   size={20}/> }
          
          </div>
          
          


         {/*mobile menu */}


          <div onClick={handelNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex-col' 
          : 'absolute left-[-100%]'}>
          <ul >
          <h1>Travel</h1>
        <li className='border-b'>Home</li>
        <li className='border-b'>Destination</li>
        <li className='border-b'>View</li>
        <li className='border-b'>Book</li>
      
        <div className='flex flex-col'>
            
            <button className='my-6'>Search</button>
            <button>Account</button>
            </div>
            <div className='flex justify-between my-6 border-b'>
                <FaFacebook  className='icon'/>
                <FaTwitter className='icon'/>
                <FaYoutube  className='icon'/>
                <FaInstagram  className='icon'/>
                <FaPinterest className='icon' />
            </div>

        
        </ul>
          </div>
    </div>
  )
}

export default Navbar