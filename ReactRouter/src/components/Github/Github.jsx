import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'


const Github = () => {
   const data= useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Riteshgaikwad')
    //   .then(response=>response.json())
    //   .then(data=>{
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])
    

  return (
    <div className=' text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    Github followers:{data.followers}
    <img className='' src={data.avatar_url}></img>
    </div>
  )
}

export default Github


export const githubInfoLoader=async () =>{
    const response= await fetch('https://api.github.com/users/Riteshgaikwad')
    return response.json()
}