import React from 'react'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
export const Banner = () => {
    const data = [
        {
            link: <HowToRegIcon sx={{fontSize: 60}}/>,
            heading: 'Registration',
            description: "Fill out the form which helps us assess your eligibility and donation history."
        },
        {
            link: <MedicalInformationIcon sx={{fontSize: 50}}/>,
            heading: 'Health Evaluation',
            description: "Your eligibility will be tested based on the results of a general medical checkup conducted on location."
        },
        {
            link: <VolunteerActivismIcon sx={{fontSize: 50}}/>,
            heading: 'Blood Donation',
            description: "Blood donation will take about 8-10 minutes in a comfortable space to lie down."
        },
        {
            link: <StorefrontTwoToneIcon sx={{fontSize: 50}}/>,
            heading: 'Refreshment',
            description: "After the donation has been completed, you receive refreshments to bolster your energy."
        },

    ]; 
  return (
    <div className='w-full md:h-80 h-full flex flex-wrap justify-around items-center bg-black'>
        {
            data.map((items,index)=>{
                return(
                    <div key={index} className='w-80 h-56 rounded-md p-3 m-1 border-2 border-red-800 hover:bg-red-900 hover:text-white'>
                        <p className='text-center'>{items.link}</p>
                        <h1 className='text-xl md:text-2xl md:font-normal my-3 max-w-4/5 text-center'>{items.heading}</h1>
                        <p className="text-center px-3">{items.description}</p>
                    </div>
                )
            })
        }

    </div>
  )
}
