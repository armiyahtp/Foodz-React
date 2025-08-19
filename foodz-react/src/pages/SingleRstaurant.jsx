import React from 'react'
import { useParams } from 'react-router-dom'

const SingleRstaurant = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>
            hello
        </div>
    )
}

export default SingleRstaurant
