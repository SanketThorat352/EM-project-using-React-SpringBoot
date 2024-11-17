import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'
const AddEmployee = () => {
  const [ employee, setEmployee] = useState({
        id:"",
        name:"",
        phone:"",
        email:"",
  });
  const handleChange = (e) =>{
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value})
  }
  const saveEmployee = (e) =>{
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const reset = (e) =>{
    e.preventDefault();
    setEmployee({
      id:"",
      name:"",
      phone:"",
      email:"",
    })
  }
  const Navigate = useNavigate()
  return (
    <div className='max-w-xl mx-40 bg-slate-800 my-20 rounded shadow py-4 px-8 text-black'>
        <div className='text-2xl tracking-wider font-bold text-center py-4 px-8'>
        <h1 className='text-white'>ADD EMPLOYEE</h1>
        </div>
        <div className='mx-10 my-2'>
        <input
        type='text'
        name='name'
        value={employee.name}
        onChange={(e)=> handleChange(e)}
         className='w-full py-2 my-4 text-slate-800' placeholder='Name'></input>
        <input
        type='Number'
        name='phone'
        value={employee.phone}
        onChange={(e)=> handleChange(e)}
        className='w-full py-2 my-4 text-slate-800' placeholder='Phone'></input>
        <input
        type='email'
        name='email'
        value={employee.email}
        onChange={(e)=> handleChange(e)}
        className='w-full py-2 my-4 text-slate-800' placeholder='E-mail'></input>
        </div>
        <div className='flex my-4 space-x-4 px-20'>
        <button
        onClick={saveEmployee} 
        className='bg-green-400 hover:bg-green-700 py-2 px-6 rounded font-bold'>Save</button>
        <button onClick={reset}
         className='bg-yellow-400 hover:bg-yellow-700 py-2 px-6 rounded font-bold'>Clear</button>
        <button onClick={()=>{Navigate("/")}}
         className='bg-red-400 hover:bg-red-700  py-2 px-6 rounded font-bold'>Cancle</button>
        </div>
      </div>
  )
}

export default AddEmployee
