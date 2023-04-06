import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate();
    // const buttonStyle = {
    //     backgroundImage: "linear-gradient(to right, #3F3FBF, #7F3FBF)",
    //     borderStyle: "none",
    //     borderRadius: "4px",
    //     padding: "8px 4px",
    //     color: "white",
    //     fontSize: "10px",
    //     marginBottom: "10px",
    // }
    return (
      <div>
        <h1>This is About Page</h1>
        <button 
        className='buttonStyle'
        onClick={()=>navigate("/")}>
            Redirect
        </button>
      </div>
    )
}

