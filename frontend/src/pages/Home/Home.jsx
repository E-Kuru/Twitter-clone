import { useState, useEffect,useContext} from "react"
import { Link } from "react-router-dom";
import {UsersConnectContext} from "../../contexts/usersConnect"
import styled from 'styled-components'
import "./home.css"
import LeftComponent from "../../components/LeftComponent";
import RightComponent from "../../components/RightComponent";

import TwitterIcon from '@mui/icons-material/Twitter';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

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
const LogoContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    border-bottom: 1px solid grey;
    justify-content: space-around;
    height: 55px;
`
const Logo = styled.i`
   font-size: 24px;
   cursor: pointer;
   color: #ffff;
   &:hover {
       color: rgb(29, 155, 240);
   }
`
const Home = () => {

    const {user, setUser} = useContext(UsersConnectContext)
    const [Tweet, setTweet] = useState("")
    // const [LoggedTweets, setLoggedTweets] = useState(null)
    const [AllTweets, setAllTweets] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()

        const newTweet = {
            content : Tweet,
            user_id : user
        }

        postTweet(newTweet)
        setTweet("")
    }

    useEffect(async () => {
        const getPost = await fetch (`http://localhost:5000/tweet`, {
            credentials: 'include',
        })

        const res = await getPost.json()
        setAllTweets(res)
    },[])
    
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

    if(!AllTweets){
        return <LoadingContainer>
                <TwitterIcon 
                    style={{position: 'absolute', fontSize: "45px", color: "rgb(29, 155, 240)", top: "70px"}}/>
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
                        {AllTweets.map(e => (
                            <Link key={e._id + e.email} to={`/tweet/${e._id}`}>
                            <div className="loggedTweets">
                                <div className="content">
                                <h3>{user.name}</h3>
                                <p>{e.content}</p>
                                </div>
                                <LogoContainer>
                                    <Logo className="far fa-comment" title= "Reply"></Logo>
                                    <Logo className="fas fa-retweet" title= "Retweet"></Logo>
                                    <Logo className="far fa-heart" title= "Like"></Logo>
                                    <IosShareOutlinedIcon style= {{ fontSize: "24px", cursor: "pointer", color: "#ffff"}} />
                                </LogoContainer>
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <RightComponent/>
            </div> 
        : 
            <div className="container">
                <LeftComponent/>
                <div className="center">
                    <div className='header'>
                        <p>Home</p>
                    </div>
                    <div className="unloggedTweets">
                        {AllTweets.map(element=> (
                            <Link key={element._id + element.email} to={`/tweet/${element._id}`}>
                                <div className="loggedTweets">  
                                    <div className="content">
                                        <h3>{user.name}</h3>
                                        <p>{element.content}</p>
                                    </div>
                                    <LogoContainer>
                                        <Logo className="far fa-comment" title= "Reply"></Logo>
                                        <Logo className="fas fa-retweet" title= "Retweet"></Logo>
                                        <Logo className="far fa-heart" title= "Like"></Logo>
                                        <IosShareOutlinedIcon style= {{ fontSize: "24px", cursor: "pointer", color: "#ffff"}} />
                                    </LogoContainer>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <RightComponent/>
            </div> 
        } 
    </>
    )
}

export default Home
