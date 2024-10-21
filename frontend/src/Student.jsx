import React, {useEffect, useState} from 'react'
import axios from 'axios'


function Student() {

    const [student, setStudent] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8081/')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err));
    }, [])


  return (
    <div className='w-full h-full bg-gray-300 flex justify-center items-center '>
        <div className='w-10/12 bg-white rounded p-3'>
            <button className='btn btn-info'>Add</button>
            <table className='table'>
                <thead className='text-black'>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((data, i) =>(
                            <tr>
                                <td className='text-black font-medium'>{data.Name}</td>
                                <td className='text-black font-medium'>{data.Email}</td>
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
