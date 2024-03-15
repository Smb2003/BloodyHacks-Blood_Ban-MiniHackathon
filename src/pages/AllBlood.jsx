import React, { useEffect, useState } from 'react'
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import { onValue, ref } from 'firebase/database';
import { db } from '../config/firebase';


export const AllBlood = () => {
  let [Aplus, setAplus] = useState(0);
  let [Bplus, setBplus] = useState(0);
  let [Oplus, setOplus] = useState(0);
  let [ABplus, setABplus] = useState(0);
  let [Aminus, setAminus] = useState(0);
  let [Bminus, setBminus] = useState(0);
  let [Ominus, setOminus] = useState(0);
  let [ABminus, setABminus] = useState(0);
  


  let [DataOfdonor, setDataOfdonor] = useState([]);

  const bloodData = [
    {
      value: Aplus, 
      Bloodgroup: "A+",
      logo: <WaterDropIcon sx={{fontSize: 40, color:"darkred"}}/>
    },
    {
      value: Bplus, 
      Bloodgroup: "B+",
      logo: <WaterDropIcon sx={{fontSize: 40, color:"darkred"}}/>
    },
    {
      value: Oplus, 
      Bloodgroup: "O+",
      logo: <WaterDropIcon sx={{fontSize: 40, color:"darkred"}}/>
    },
    {
      value: ABplus, 
      Bloodgroup: "AB+",
      logo: <WaterDropIcon sx={{fontSize: 40, color:"darkred"}}/>
    },
    {
      value: Aminus, 
      Bloodgroup: "A-",
      logo: <WaterDropIcon sx={{fontSize: 40, color:"darkred"}}/>
    },
    {
      value: Bminus, 
      Bloodgroup: "B-",
      logo: <WaterDropIcon sx={{fontSize: 40, color:"darkred"}}/>
    },
    {
      value: Ominus, 
      Bloodgroup: "O-",
      logo: <WaterDropIcon sx={{fontSize: 40, color:"darkred"}}/>
    },
    {
      value: ABminus, 
      Bloodgroup: "AB-",
      logo: <WaterDropIcon sx={{fontSize: 40, color:"darkred"}}/>
    },
    // {
    //   value: 0, 
    //   Bloodgroup: "AB-",
    //   logo: <WaterDropIcon sx={{fontSize: 40, color:"darkred"}}/>
    // },
  ]

  const retreiveData = () => {
    const location= ref(db, "Donors/");
    onValue(location, (snapshot) => {
      const data = snapshot.val();
      const convert_to_array = Object.values(data)
      setDataOfdonor(convert_to_array)
       convert_to_array.forEach((item)=>{
            if(item.donorData.undefined == "B+"){
                Bplus = Bplus + +item.donorData.BloodinLitre;
                // console.log(item.donorData.BloodinLitre)
                setBplus(Bplus)
    
            }
            else if(item.donorData.undefined == "A+"){
              Aplus = Aplus + +item.donorData.BloodinLitre;
              // console.log(item.donorData.BloodinLitre)
              setAplus(Aplus)
            }
            else if(item.donorData.undefined == "O+"){
              Oplus = Oplus + +item.donorData.BloodinLitre;
              // console.log(item.donorData.BloodinLitre)
              setOplus(Oplus)
            }
            else if(item.donorData.undefined == "AB+"){
              ABplus = ABplus + +item.donorData.BloodinLitre;
              // console.log(item.donorData.BloodinLitre)
              setABplus(ABplus)
            }
            else if(item.donorData.undefined == "B-"){
              Bminus = Bminus + +item.donorData.BloodinLitre;
              // console.log(item.donorData.BloodinLitre)
              setBminus(Bminus)
            }
            else if(item.donorData.undefined == "A-"){
              Aminus = Aminus + +item.donorData.BloodinLitre;
              // console.log(item.donorData.BloodinLitre)
              setAminus( Aminus)
            }
            else if(item.donorData.undefined == "O-"){
              Ominus = Ominus + +item.donorData.BloodinLitre;
              // console.log(item.donorData.BloodinLitre)
              setAminus( Ominus)
            }
            else if(item.donorData.undefined == "AB-"){
              ABminus = ABminus + +item.donorData.BloodinLitre;
              // console.log(item.donorData.BloodinLitre)
              setABminus( ABminus)
            }
          })
      });
  }
  
  useEffect(()=>{
    retreiveData();
  },[])
  return (
    <div className='w-full h-screen flex flex-wrap items-center justify-center'>
      <div className='md:w-4/5 md:h-4/5 h-auto rounded-md border border-black p-2'>
        <div className='p-5 '>
          <h3 className='md:text-lg  text-2xl font-medium '>Welcome to Dashboard</h3>
        </div>
        <hr />
        <div className='px-5 py-4 flex flex-wrap justify-between'>
          <h3 className='md:text-2xl text-xl font-medium'>Available Blood per group in Litres</h3>
          <h3 className='md:text-2xl text-xl font-medium'>No of Donors: {DataOfdonor.length}</h3>
        </div>
        <div className='w-full md:h-4/5 h-auto  flex flex-wrap items-center justify-around p-2'>
          {
            bloodData.map((items,index)=>{
              return(
                <div key={index} className='md:w-1/5 md:h-32 h-20 w-full  md:flex-row rounded-md p-2 md:m-2 my-2 flex justify-around items-center border border-black bg-slate-100'>
                  <h1 className='md:text-2xl text-2xl font-medium'>{items.value}</h1>
                  <div className='flex flex-wrap items-center justify-center'>
                    <h1 className='md:text-3xl text-2xl font-medium'>{items.Bloodgroup}</h1>
                    <h1>{items.logo}</h1>
                  </div>
                </div>
              )
            })

          }
        </div>
      </div>
    </div>
  )
}
