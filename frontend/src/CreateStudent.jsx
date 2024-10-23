import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CreateStudent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost:8081/create', {name, email})
        .then(res =>{
            console.log(res);
            navigate('/');
        }).catch(err => console.log(err));
    }
  return (
    <div className='flex w-full h-full justify-center items-center'>
        <div className='w-1/2 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
            <div className='mx-auto mb-2 space-y-3'>
                <h1 className='text-3xl font-bold text-gray-700 my-5'>Add New Student</h1>
            </div>

            <div>
                <div className='relative mt-2 w-full'>
                <input type="text" className='border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0' placeholder='' onChange={e => setName(e.target.value)}/>
                <label htmlFor="name" className='absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600'>Name </label>
                </div>
            </div>

            <div>
                <div className='relative mt-2 w-full'>
                <input type="email" className='border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0' placeholder='' onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="email" className='absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600'>Email</label>
                </div>
            </div>

            <button className='btn btn-info text-white mt-3'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default CreateStudent
