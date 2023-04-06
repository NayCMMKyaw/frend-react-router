import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
    const params = useParams();
    return (
      <div>
        <p>
            This Student ID of user is {params.id}
        </p>
      </div>
    )
}

