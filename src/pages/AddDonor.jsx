import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react'
import { Button } from '../components/Button';
import { child, push, ref, set } from 'firebase/database';
import { db } from '../config/firebase';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export const AddDonor = () => {
    const [donorData,setDonorData] = useState({}); 
    const [FindLength,setFindLength] = useState([]); 

    const navigate = useNavigate();

    const onHandleChange = (e) => {
        const {id,value} = e.target;
        setDonorData({
            ...donorData, [id]:value
        })
    }
    const SubmitData =(e) =>{
        e.preventDefault();
        console.log(donorData);
        // console.log(FindLength);
        if(FindLength.length < 1){
            const newPostKey = push(child(ref(db), 'Donors')).key;
            set(ref(db,`Donors/${newPostKey}`),{
                donorData: donorData,
            })
            setFindLength(...FindLength,FindLength.push(donorData))
          Swal.fire ({
            position: "top-center",
            icon: "success",
            title: "Registered Successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/')
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Error...",
                text: "User can donote blood only 1 time in in ID!",
                
            });
            navigate('/')
            console.log(donorData);

        }
    }
    console.log(FindLength);
  return (
      <div className='w-full h-full flex flex-wrap justify-center items-center  bgPic'>
        {/* <Navbar/> */}
        <div className='md:w-2/3 w-full rounded-md h-auto p-3 bg-slate-100'>
            <div className='my-4'>
            <h1 className="text-xl md:text-3xl font-medium text-center ">Registration Form</h1>
            <p className="text-lg md:text-xl font-medium text-center ">Be the part of the donor! </p>
            </div>
            <div className='w-full h-full'>
                <form onSubmit={SubmitData}>

                        <div className='gap-x-6 flex flex-col md:flex-row'>
                            <TextField
                                id="firstName"
                                label="First Name"
                                type="type"
                                className="md:w-1/2 w-full"
                                sx={{marginY:2, borderColor:'white'}}
                                autoComplete=""
                                onChange={onHandleChange}
                                />
                            <TextField
                                id="LastName"
                                label="Last Name"
                                type="text"
                                autoComplete=""
                                sx={{marginY:2, borderColor:'white'}}
                                className="md:w-1/2 w-full"
                                onChange={onHandleChange}
                                />
                        </div>
                        <TextField
                            id="userName"
                            label="User Name"
                            type="text"
                            autoComplete=""
                            required={true}
                            sx={{marginY:2, borderColor:'white'}}
                            onChange={onHandleChange}
                            className="w-full my-2"
                        />
                            <TextField
                                id="email"
                                label="Email Address"
                                type="email"
                                autoComplete=""
                                required={true}
                                sx={{marginY:2}}
                                onChange={onHandleChange}
                                className="w-full my-2"
                            />
                            <TextField
                                id="age"
                                label="Age"
                                type="text"
                                required={true}
                                autoComplete=""
                                sx={{marginY:2}}
                                onChange={onHandleChange}
                                className="w-full my-2"
                            />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Blood Group</InputLabel>
                            <Select
                            labelId="simple-select-label"
                            id="Blood Group"
                            // value={}
                            required={true}
                            onChange={onHandleChange}
                            label="Age"
                            // onChange={handleChange}
                            >
                            <MenuItem value={"A+"}>A+</MenuItem>
                            <MenuItem value={"A-"}>A-</MenuItem>
                            <MenuItem value={"B+"}>B+</MenuItem>
                            <MenuItem value={"B-"}>B-</MenuItem>
                            <MenuItem value={"O+"}>O+</MenuItem>
                            <MenuItem value={"O-"}>O-</MenuItem>
                            <MenuItem value={"AB+"}>AB+</MenuItem>
                            <MenuItem value={"AB-"}>AB-</MenuItem>

                            </Select>
                        </FormControl>
                        <TextField
                            id="BloodinLitre"
                            label="Blood Quantity (in litres)"
                            type="number"
                            required={true}
                            autoComplete=""
                            sx={{marginY:2}}
                            onChange={onHandleChange}
                            className="w-full my-2"
                        />
                        <TextField
                            id="phoneno"
                            label="Phone Number"
                            type="number"
                            required={true}
                            autoComplete="current.number"
                            sx={{marginY:2}}
                            onChange={onHandleChange}
                            className="w-full my-2"
                        />
                        <TextField
                            id="district"
                            label="District"
                            required={true}
                            type="type"
                            autoComplete=""
                            sx={{marginY:2}}
                            className="w-full my-2"
                            onChange={onHandleChange}

                        />
                        <TextField
                            id="Address"
                            label="Address"
                            type="type"
                            required={true}
                            autoComplete=""
                            sx={{marginY:2}}
                            className="w-full my-2"
                            onChange={onHandleChange}
                        />
                         <Button label={"Submit"}/> 
                    </form>
                </div>
        </div>
    </div>
  )
}
