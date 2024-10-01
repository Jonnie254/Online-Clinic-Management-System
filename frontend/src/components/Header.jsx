import React from 'react'
import {assets} from '../assets/assets'

const header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* ---left side ---*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment<br/>
          with Trusted Doctors
         </p>
         <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img src={assets.group_profiles} alt=''/>
          <p>Simply browese through our extensive list of trusted doctors,
            <br/> select a doctor of your choice and book an appointment.
          </p>
         </div>
         <a href=''>
          Book Appointment <img src={assets.arrow_icon} alt=''/>
         </a>
      </div>
      {/* ---right side ---*/}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt=''/>
      </div>
    </div>
  )
}

export default header