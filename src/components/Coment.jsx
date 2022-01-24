import { useEffect, useState } from 'react'
import styled from 'styled-components'
import TwitterIcon from '@mui/icons-material/Twitter';
import { useParams } from 'react-router-dom'

const LoadingContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction : column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    background : black;
    color: white;

    a{
        color : white;
    }
    a:hover{
        color : #1D9BF0;
        text-decoration : underline;
    }
`
const Loading = styled.div`
    width : 150px;
    height : 150px;
    border-radius: 50%;
    border-top: 3px solid rgb(29, 155, 240);
    animation: rotate 1.6s linear infinite;

    @keyframes rotate {
        0% { transform : rotate(0turn) }
        100% { transform : rotate(1turn)}
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 100%;
    gap: 20px;
    align-items: center;
`
const TweetUser = styled.div`
    width: 300px;
    max-height: 100vh;
`
const CommentElement = styled.div`
    display:flex;
    width: 100%;
    // border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    min-height: 70px;
    align-items: center;
    padding-left: 30px;
    font-size: 25px;
`

const Coment = ({coments, comentContent}) => {
    // const [coments, setComents] = useState()
    // const {id} = useParams()

    // useEffect(()  => {
    //     getComents()
    //     // console.log(coments);
    // }, [])

    // const getComents = async () => {
    //     const response = await fetch(`http://localhost:5000/coments/tweet/${tweetId}`, {
    //         credentials: 'include',
    //     })
    //     const data = await response.json()
    //     setComents(data)
    // }

    if(!coments) {
        return <LoadingContainer>
                <TwitterIcon 
                    style={{position: 'absolute', fontSize: "45px", color: "rgb(29, 155, 240)", top: "70px"}}/>
                <Loading></Loading>
                <h2>Please wait</h2>
            </LoadingContainer>
    }
    
    return (
        <Container>
            {/* <TweetUser> */}
                {coments.map(coment => {
                    return <CommentElement key= {coment._id}>
                                <p>{coment.content}</p>
                            </CommentElement>
                })}
            {/* </TweetUser> */}
        </Container>
    )
}

export default Coment