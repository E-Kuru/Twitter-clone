import { useState, useEffect,useContext} from "react"
import { Link } from "react-router-dom";
import {UsersConnectContext} from "../../contexts/usersConnect"
import styled from 'styled-components'
import LeftComponent from "../../components/LeftComponent";
import RightComponent from "../../components/RightComponent";

import TwitterIcon from '@mui/icons-material/Twitter';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { GifBoxOutlined } from "@mui/icons-material";

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
const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: black;
    color: #fff;
`
const Center = styled.div`
    overflow-y: scroll;
    flex: 2;
    background-color: dark;
    border-left: 1px solid grey;
    border-right: 1px solid grey;
    position: relative;
    &::-webkit-scrollbar {
        display: none;
    }
`
const Header = styled.div`
    display: flex;
    padding: 8px 16px;
    justify-content: space-between;
    font-size: 20px;
    font-weight: bold;
    border-bottom: solid 1px white;
    padding-bottom: 8px;
    background-color: rgba(0, 0, 0, 0.7);
`
const InputContainer = styled.div`
    margin-top: 3%;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
    padding-left: 20px;
`
const InputButton = styled.button`
    height: 48px;
    width: 48px;
    border-radius: 50%;
    font-size: 20px;
    color: #ffff;
    background-color: rgb(201, 116, 116);
    border: none;
`
const Input = styled.input`
    border: none;
    outline: none;
    width: 80%;
    background-color: black;
    font-size: 20px;
    padding-left: 15px;
    color: #ffff;
`
const SendContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 13%;
    width: 100%;
    margin: 20px 0 15px 0;
`
const SendLogos = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const MediaIcon = styled(PermMediaIcon)`
    cursor: pointer;
    color:  rgb(29, 155, 240);
    font
`
const GifIcon = styled(GifBoxOutlined)`
    cursor: pointer;
    color:  rgb(29, 155, 240);
`
const PollIcon = styled(PollOutlinedIcon)`
    cursor: pointer;
    color:  rgb(29, 155, 240);
    transform : rotate(90deg)
`
const EmojiIcon = styled(SentimentSatisfiedOutlinedIcon)`
    cursor: pointer;
    color:  rgb(29, 155, 240);
`
const AgendaIcon= styled(EventAvailableOutlinedIcon)`
    cursor: pointer;
    color:  rgb(29, 155, 240);
`
const PositionIcon = styled(FmdGoodOutlinedIcon)`
    cursor: pointer;
    color: rgba(29, 155, 240, 0.6);
`
const TweetButton = styled.button`
    background-color: ${(props => props.tweet === "yes" ? "rgb(29, 155, 240)" : "rgba(29, 155, 240, 0.6)")} ;
    box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
    border: none;
    padding: 10px 20px;
    margin-right: 25px;
    border-radius: 50px;
    color: #ffff;
    font-size: 18px;
    font-weight: bold;
`
const TweetForm = styled.form`
    border-bottom: 0.5px solid #2f3336;
    height: 15%;
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
const UnloggedTweets = styled.div`
    line-height: 2;
`
const LoggedTweets = styled.div`
    margin-top: 8%;
    height: 200px;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: space-between;
    border-bottom: #2f3336 2px solid;
`
const LoggedContent = styled.div`
    align-self: flex-start;
    margin: 5% 0 0 10%;
    color: white;
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
        getTweets() 
    },[])

    const getTweets = async () => {
        const response = await fetch(`http://localhost:5000/tweet`, {
            credentials: 'include',
        })

        const data = await response.json()
        setAllTweets(data)
    }

    const postTweet = async (values) => {

        const response = await fetch('http://localhost:5000/tweet', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
        const data = await response.json()
        getTweets()
    }

    const handleTweetChange = e => {
        setTweet(e.target.value)
    }

    if(!AllTweets){
        return <LoadingContainer>
                <TwitterIcon 
                    style={{position: 'absolute', fontSize: "45px", color: "rgb(29, 155, 240)", top: "70px"}}
                />
                <Loading></Loading>
                <h2>Please wait</h2>
            </LoadingContainer>
    }

    return (
        <>
        {user ? 
            <Container>
                <LeftComponent/>
                <Center>
                    <Header>
                        <p>Home</p>
                        <StarBorderOutlinedIcon/>
                    </Header>
                    <div>
                        <TweetForm className='tweet' onSubmit={handleSubmit}>
                            <InputContainer>
                                <InputButton>K</InputButton>
                                <Input type="text" placeholder="What's happening ?" maxLength="250" onChange={handleTweetChange}/>
                            </InputContainer>
                            <SendContainer>
                                <SendLogos>
                                    <MediaIcon/>
                                    <GifIcon/>
                                    <PollIcon/>
                                    <EmojiIcon/>
                                    <AgendaIcon/>
                                    <PositionIcon/>
                                </SendLogos>
                                <TweetButton type="submit" tweet = {Tweet ? "yes" : "no"}>tweet</TweetButton>
                            </SendContainer>
                        </TweetForm>
                        {AllTweets.map(e => (
                            <Link key={e._id + e.email} to={`/tweet/${e._id}`}>
                            <LoggedTweets>
                                <LoggedContent >
                                    <h3>{user.name}</h3>
                                    <p>{e.content}</p>
                                </LoggedContent>
                                <LogoContainer>
                                    <Logo className="far fa-comment" title= "Reply"></Logo>
                                    <Logo className="fas fa-retweet" title= "Retweet"></Logo>
                                    <Logo className="far fa-heart" title= "Like"></Logo>
                                    <IosShareOutlinedIcon style= {{ fontSize: "24px", cursor: "pointer", color: "#ffff"}} />
                                </LogoContainer>
                            </LoggedTweets>
                            </Link>
                        ))}
                    </div>
                </Center>
                <RightComponent/>
            </Container> 
        : 
            <Container>
                <LeftComponent/>
                <Center>
                    <Header>
                        <p>Home</p>
                    </Header>
                    <TweetForm className='tweet' onSubmit={handleSubmit}>
                        <InputContainer>
                            <InputButton>K</InputButton>
                            <Input type="text" placeholder="What's happening ?" maxLength="250" onChange={handleTweetChange}/>
                        </InputContainer>
                        <SendContainer>
                            <SendLogos>
                                <MediaIcon/>
                                <GifIcon/>
                                <PollIcon/>
                                <EmojiIcon/>
                                <AgendaIcon/>
                                <PositionIcon/>
                            </SendLogos>
                            <TweetButton type="submit">tweet</TweetButton>
                        </SendContainer>
                    </TweetForm>
                    <UnloggedTweets>
                        {AllTweets.map(element=> (
                            <Link key={element._id + element.email} to={`/tweet/${element._id}`}>
                                <LoggedTweets>  
                                    <LoggedContent>
                                        <h3>{user.name}</h3>
                                        <p>{element.content}</p>
                                    </LoggedContent>
                                    <LogoContainer>
                                        <Logo className="far fa-comment" title= "Reply"></Logo>
                                        <Logo className="fas fa-retweet" title= "Retweet"></Logo>
                                        <Logo className="far fa-heart" title= "Like"></Logo>
                                        <IosShareOutlinedIcon style= {{ fontSize: "24px", cursor: "pointer", color: "#ffff"}} />
                                    </LogoContainer>
                                </LoggedTweets>
                            </Link>
                        ))}
                    </UnloggedTweets>
                </Center>
                <RightComponent/>
            </Container> 
        } 
    </>
    )
}

export default Home
