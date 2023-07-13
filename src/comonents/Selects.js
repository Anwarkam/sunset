import React from 'react'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import maldives3 from '../assets/maldives3.jpg'
import borabora from '../assets/borabora.jpg'
import borabora2 from '../assets/borabora2.jpg'
import keywest from '../assets/keywest.jpg'
import SelectsCards from './SelectsCards'

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    
    
    <SelectsCards bg={borabora} text='Phillipines' />
    <SelectsCards bg={borabora2} text='Maldives' />
    <SelectsCards bg={maldives} text='Maldives' />
    <SelectsCards bg={maldives2} text='Hawaii' />
    <SelectsCards bg={maldives3} text='Thailand' />
    <SelectsCards bg={keywest} text='Phillipines' />
    



    </div>
  )
}

export default Selects 