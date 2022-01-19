import { useState, useEffect,useContext} from "react"
import { Link,useParams } from "react-router-dom";
import {UsersConnectContext} from "../../contexts/usersConnect"
import styled from 'styled-components'
import LeftComponent from "../../components/LeftComponent";
import RightComponent from "../../components/RightComponent";
import TwitterIcon from '@mui/icons-material/Twitter';

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

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

const Home = () => {

    const {id} = useParams()
    
    const {user, setUser} = useContext(UsersConnectContext)
    const [Tweet, setTweet] = useState(null)

    useEffect(async () => {
        if(user){
            console.log(id);
            const getPost = await fetch (`http://localhost:5000/tweet/${id}`, {
                credentials: 'include',
            })
            const res = await getPost.json()
            setTweet(res)
            console.log(Tweet);
            console.log(Tweet.content);
        }
    },[user])

    if(!user){
        return (
        <LoadingContainer>
            <TwitterIcon 
                style={{position: 'absolute', fontSize: "45px", color: "rgb(29, 155, 240)", top: "70px"}}/>
            <Link to="/"><h2>Please Log In</h2></Link>
        </LoadingContainer>
    )}

    if(!Tweet){
        <LoadingContainer>
            <TwitterIcon 
                style={{position: 'absolute', fontSize: "45px", color: "rgb(29, 155, 240)", top: "70px"}}/>
            <Loading></Loading>
            <h2>Please wait</h2>
        </LoadingContainer>
    }
    
    return (
        <>
        {Tweet ? 
            <div className="container">
                <LeftComponent/>
                <div className="center">
                    <div className='header'>
                        <p>Home</p>
                        <StarBorderOutlinedIcon/>
                    </div>
                    <div className='body'>
                    <div className="loggedTweets">
                                <div className="content">
                                <h3>{user.name}</h3>
                                <p>{Tweet.content}</p>
                                </div>
                                <div className="tweet-actions">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                    </div>
                </div>
                <RightComponent/>
            </div> 
        : 
        <>
            <div className="container">
                <LeftComponent/>
                <div className="center">
                    <div className='header'>
                        <p>Home</p>
                        <StarBorderOutlinedIcon/>
                    </div>
                    <div className='body'>
                    </div>
                </div>
                <RightComponent/>
            </div>         </>
        } 
            
    </>
    )
}

export default Home
