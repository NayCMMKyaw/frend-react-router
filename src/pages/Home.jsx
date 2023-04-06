import React from 'react'
//import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Home({Login}) {
  const navigate = useNavigate();
    return (
      <div>
        <h1>Hello World</h1>
        <button className='buttonStyle' 
        onClick={()=>
        {{
          Login(1);
          navigate('/admin')}}}>Login</button>
      </div>
    )
}

