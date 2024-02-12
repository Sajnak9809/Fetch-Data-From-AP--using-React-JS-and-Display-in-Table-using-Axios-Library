import React, { useEffect, useState } from 'react'
import axios from  "axios";
import 'bootstrap/dist/css/bootstrap.css';


const FetchData = () => {
    const  [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data))
        
        .catch(err => console.error(err));
    },[])
  return (
    <div className='container'>
        <div className="mt-3">
            <h3 class="p-3 mb-2 bg-warning text-dark text-center">Fetch Data API in React with Axios</h3>
            <table className="table  table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user,index) => {
                            return (
                                <tr key={index}>
                                    <td> {user.id} </td>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                    <td> {user.address.city} </td>
                                </tr>
                        )})

                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default FetchData