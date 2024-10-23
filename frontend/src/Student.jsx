import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom';


function Student() {

    const [student, setStudent] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8081/')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = async (id) =>{
        try{
            await axios.delete('http://localhost:8081/student/'+id)
            setStudent((prevStudents) => prevStudents.filter(student => student.ID !== id));
        }catch(err){
            console.log(err);
        }
    }


  return (
    <div className='w-full h-full bg-gray-300 flex justify-center items-center '>
        <div className='w-10/12 bg-white rounded p-3'>
            <Link to="/create" className='btn btn-info flex justify-start text-white mb-3 w-20'>Add +</Link>
            <table className='table'>
                <thead className='text-black'>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data, i) =>(
                            <tr>
                                <td className='text-black font-medium'>{data.Name}</td>
                                <td className='text-black font-medium'>{data.Email}</td>
                                <td>
                                    <div className='flex justify-center'>
                                        <Link to={`update/${data.ID}`} className='btn btn-success text-white'>Update</Link>
                                        <button className='btn btn-error ms-2 text-white' onClick={() => handleDelete(data.ID)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Student
