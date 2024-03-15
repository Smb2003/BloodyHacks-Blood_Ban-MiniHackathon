import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
// import { InputField } from '../components/InputFields'
import { onValue, ref } from 'firebase/database';
import { db } from '../config/firebase';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Name,Age, BloodGroup, BloodQuantity, PhoneNo,District, Address) {
  return { Name, Age ,BloodGroup, BloodQuantity,District, PhoneNo , Address};
}

export const SearchBlood = () => {
  const [searchVal, setSearchval]  = useState("");
  const [DonorRecord, setDonorRecord]  = useState([]);
  const [finalRecord,setFinalRecord] = useState([]);
  const [Isavailable,setIsAvailable] = useState(false);


  const onHandleChange = (e) => {
     setSearchval(e.target.value);
  }
  const onHandleClick = () => {
    const filter = DonorRecord.filter((item)=>{
      return( item.donorData.undefined === searchVal);
    })
    console.log(filter);
    setFinalRecord(filter)
    setIsAvailable(true)
  }
  console.log(finalRecord);
  const SearchData = () => {
    const location= ref(db, "Donors/");
    onValue(location, (snapshot) => {
      const data = snapshot.val();
      const convert_to_array = Object.values(data)
      console.log(convert_to_array);
      setDonorRecord([...convert_to_array])
    });
  }
  console.log(DonorRecord);
  console.log("Isavailable-->",Isavailable);

  useEffect(()=>{
    SearchData();
  //   onHandleClick()

  },[])
  return (
    <div className='w-full h-auto'>
      {/* <Navbar/> */}
      <div className='flex flex-wrap justify-center items-center w-full h-auto p-6 bg-black'>
        <input
        id="search"
        placeholder="Search Donor"
        type="text"
        onChange={onHandleChange}
        className='w-3/5 md:w-2/5 h-12 p-2 rounded-md'/>
        <button className='w-auto h-12 mx-4 font-medium px-3 rounded-md bg-red-700' onClick={onHandleClick}>Search</button>
      </div>
      <div className='w-full h-screen p-2'>
        {
          finalRecord.map((recordItem,index)=>{
            const rows = [
              createData(recordItem.donorData.userName,
                recordItem.donorData.age,
                recordItem.donorData.undefined,
                recordItem.donorData.BloodinLitre,
                recordItem.donorData.phoneno,
                recordItem.donorData.district,
                recordItem.donorData.Address)
             
            ];
            
            return(
              <div>
              {
              Isavailable === true ?
            
              <div> 
                  <TableContainer component={Paper} key={index}>
                    <Table aria-label="customized table">
                      <TableHead>
                        <TableRow >
                          <StyledTableCell sx={{textAlign:'center'}}>Name</StyledTableCell>
                          <StyledTableCell sx={{textAlign:'center'}}>Age</StyledTableCell>
                          <StyledTableCell sx={{textAlign:'center'}}>Blood Group</StyledTableCell>
                          <StyledTableCell sx={{textAlign:'center'}}>Blood Quantity (in litres)</StyledTableCell>
                          <StyledTableCell sx={{textAlign:'center'}}>District</StyledTableCell>
                          <StyledTableCell sx={{textAlign:'center'}}>Phone No.</StyledTableCell>
                          <StyledTableCell sx={{textAlign:'center'}}>Address</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row,index) => (
                          <StyledTableRow key={index} >
                            <StyledTableCell  sx={{textAlign:'center'}}>{row.Name}</StyledTableCell>
                            <StyledTableCell sx={{textAlign:'center'}}>{row.Age}</StyledTableCell>
                            <StyledTableCell sx={{textAlign:'center'}}>{row.BloodGroup}</StyledTableCell>
                            <StyledTableCell sx={{textAlign:'center'}}>{row.BloodQuantity}</StyledTableCell>
                            <StyledTableCell sx={{textAlign:'center'}}>{row.District}</StyledTableCell>
                            <StyledTableCell sx={{textAlign:'center'}}>{row.PhoneNo}</StyledTableCell>
                            <StyledTableCell sx={{textAlign:'center'}}>{row.Address}</StyledTableCell>

                          </StyledTableRow>
                      ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
              </div>
            : 
            <div className='bgPic w-full h-auto'>
              <h1 className='md:text-3xl'>Select donor by inserting BloodGroup</h1>
            </div>

              }
            </div>
          )}
        )}
        
      </div>
    </div>
  )
}
