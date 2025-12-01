import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data=useLoaderData();

    /* const [data,setData]=React.useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/Madhur2004Singh')
        .then((response)=>response.json())
        .then(data=>{
            console.log(data);
            setData(data);
            
        })
    },[]) */
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub followers:{data.followers}
      <img src="data.avatar_url" width={300} alt="avatar" />
    </div>
  )
}

export default GitHub

export const gitHubInfoLoader=async () => {
    const response=await fetch('https://api.github.com/users/Madhur2004Singh')
    return response.json();
}
