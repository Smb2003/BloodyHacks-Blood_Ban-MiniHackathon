import React from 'react'
import WaterDropIcon from '@mui/icons-material/WaterDrop';
export const Footer = () => {
  return (
    <div className='w-full h-50 bg-black text-white py-12'>
        <div className='flex flex-wrap justify-around items-center'>
            <div>
                <h1 className='text-3xl md:text-5xl font-extrabold  text-red-900'>BLOODY HACKS <WaterDropIcon sx={{fontSize: 50, marginBottom:2}} /></h1>
            </div>
            <div>
                <h1 className='text-xl md:text-xl md:font-normal text-center'>Address:  Head Office: Plot ST-02, Qalandaria Chowk, North Nazimabad, <br />Block T, Karachi, Pakistan.
                    <br /><br />
                    Phone No:  0314-2124348
                    
                    </h1>
            </div>

        </div>

    </div>
  )
}
