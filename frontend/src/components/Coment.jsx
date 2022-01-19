import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 335px;
`
const TweetUser = styled.div`
    width: 300px;
    max-height: 100vh;
    overflow-y: scroll;
`
const Coment = ({tweetId, comentContent}) => {
    const [coments, setComents] = useState()
    const {id} = useParams()

    useEffect(()  => {
        getComents()

        const newComent = {
            content : comentContent,
            user_id : id,
            tweet_id: tweetId
        }
        postComent(newComent)
        console.log("coments", comentContent);
    }, [])
    const getComents = async () => {
        const response = await fetch(`http://localhost:5000/coments/${tweetId}`, {
            credentials: 'include',
        })
        const data = await response.json()
        setComents(data)
    }
    
    const postComent = async (value) => {
        const response = await fetch(`http://localhost:5000/coments/${tweetId}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(value)
        })
        const data = await response.json()
    }
    return (
        <Container>
            <TweetUser>

            </TweetUser>
        </Container>
    )
}

export default Coment
