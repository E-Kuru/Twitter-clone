import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const SingleTweet = () => {
    const {id} = useParams()

    console.log(id);
    return (
        <div>
            HEELLLOOOO
        </div>
    )
}

export default SingleTweet
