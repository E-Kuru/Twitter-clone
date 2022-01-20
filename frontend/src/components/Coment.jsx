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
const Coment = ({tweetId}) => {
    const [coments, setComents] = useState()

    useEffect(()  => {
        getComents()
        // console.log(coments);
    }, [])

    const getComents = async () => {
        const response = await fetch(`http://localhost:5000/coments`, {
            credentials: 'include',
        })
        const data = await response.json()
        setComents(data)
        console.log("coments", coments);
    }

    return (
        <Container>
            <TweetUser>
                {coments.map((coment) => {
                    return <div>
                                <p>{coment.content}</p>
                            </div>
                })}
            </TweetUser>
        </Container>
    )
}

export default Coment
