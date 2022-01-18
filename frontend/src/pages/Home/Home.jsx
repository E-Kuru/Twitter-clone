import { useState, useEffect,useContext} from "react"
import { Link } from "react-router-dom";
import {UsersConnectContext} from "../../contexts/usersConnect"
import styled from 'styled-components'
import "./home.css"

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LeftComponent from "../../components/LeftComponent";

const LoadingContainer = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
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

    const {user, setUser} = useContext(UsersConnectContext)

    const [Tweet, setTweet] = useState("")
    const [LoggedTweets, setLoggedTweets] = useState(null)
    const [AllTweets, setAllTweets] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()

        const newTweet = {
            content : Tweet,
            user_id : user._id
        }

        postTweet(newTweet)
        setTweet("")
    }

    useEffect(async () => {
        if(user){
            console.log(user._id);
            const getLoggedPost = await fetch (`http://localhost:5000/tweet/user/${user._id}`, {
                credentials: 'include',
            })
    
            const res = await getLoggedPost.json()
            setLoggedTweets(res)
        }
        else{
            const getPost = await fetch (`http://localhost:5000/tweet`, {
                credentials: 'include',
            })
    
            const res = await getPost.json()
            setAllTweets(res)
        }
    },[user])
    
    const postTweet = async (values) => {

        const response = await fetch ('http://localhost:5000/tweet', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        const res = await response.json()
    }

    const handleTweetChange = e => {
        setTweet(e.target.value)
    }

    if(user && !LoggedTweets|| !user && !AllTweets){
        return <LoadingContainer>
                <Loading></Loading>
                <h2>Please wait</h2>
            </LoadingContainer>
    }

    return (
        <>
        {user ? 
            <div className="container">
                <LeftComponent/>
                <div className="center">
                    <div className='header'>
                        <p>Home</p>
                        <StarBorderOutlinedIcon/>
                    </div>
                    <div className='body'>
                        <form className='tweet' onSubmit={handleSubmit}>
                            <div className='input'>
                                <button>K</button>
                                <input type="text" placeholder="What's happening ?" maxLength="250" onChange={handleTweetChange}/>
                            </div>
                            <div className="send">
                                <button type="submit">tweet</button>
                            </div>
                        </form>
                        {LoggedTweets.map(e => (
                            <Link key={e._id + e.email} to={`/tweet/${e._id}`}>
                            <div className="loggedTweets">
                                <div className="content">
                                <h3>{user.name}</h3>
                                <p>{e.content}</p>
                                </div>
                                <div className="tweet-actions">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="right">right</div>
            </div> 
        : 
            <div className="container">
                <LeftComponent/>
                <div className="center">
                    <div className='header'>
                        <p>Home</p>
                    </div>
                    <div className="unloggedTweets">
                        {AllTweets.map(e => (
                            <Link key={e._id + e.email} to={`/tweet/${e._id}`}>
                                <div className="loggedTweets">  
                                    <div className="content">
                                    <h3>{user.name}</h3>
                                    <p>{e.content}</p>
                                </div>
                                <div className="tweet-actions">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>                            </Link>
                        ))}
                    </div>
                </div>
                <div className="right">right</div>
            </div> 
        } 
            
    </>
    )
}

export default Home
