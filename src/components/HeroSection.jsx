import React from 'react'
import BloodPic from '../assets/BloodHero.png'
import WaterDropIcon from '@mui/icons-material/WaterDrop';
export const HeroSection = () => {
  return (
    <div className='w-auto h-screen flex flex-wrap '>
        <div className='md:w-3/5 w-full h-auto  md:h-full md:p-7 p-7 md:px-15 flex flex-wrap flex-col justify-center items-center '>
            <div>

            <h1 className='text-3xl md:text-6xl md:font-medium  text-red-900'>A BLOODY HACKS <WaterDropIcon sx={{fontSize: 50, marginBottom:2}} /></h1>
            <h2 className='text-xl md:text-2xl md:font-normal max-w-4/5'><b>A non-profit healthcare organization & the blood bank firm</b>, serving the community by providing high quality affordable medical services in Pakistan.</h2>
            <h3 className='text-xl md:text-xl my-6 md:font-normal max-w-4/5'>Started in 1979, Bloody Hacks was formed with the aim to provide safe blood to our communities. The vision of Husaini has since grown to become a holistic healthcare services organization. In line with this vision, the service offerings have expanded into multiple distinct divisions.</h3>
            </div>
        </div>
        <div className='md:w-2/5 md:h-full w-full h-auto '>
            <img src={BloodPic} alt="" className='md:w-full  md:h-full h-auto '/>
        </div>
    </div>
  )
}
