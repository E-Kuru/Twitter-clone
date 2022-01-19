import { useState, useEffect,useContext} from "react"
import { Link,useParams } from "react-router-dom";
import {UsersConnectContext} from "../../contexts/usersConnect"
import styled from 'styled-components'
import LeftComponent from "../../components/LeftComponent";
import RightComponent from "../../components/RightComponent";

import TwitterIcon from '@mui/icons-material/Twitter';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
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
const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: black;
    color: #fff;
`
const Center = styled.div`
    flex: 2;
    border-left: 1px solid gray;
    border-right: 1px solid gray;
`
const Header = styled.div`
    height: 45px;
    background-color: rgba(0,0,0,0.6);
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Body = styled.div`
    padding: 15px;
    margin-top: 25px;
`
// const LoggedTweets = styled.div`

// `
const TweetContainer = styled.div`
    border-bottom: 1px solid grey;
    padding: 15px;
    margin-bottom: 20px;
`
const UserContainer = styled.div`
    display: flex;
    gap: 25px;
    padding-bottom: 25px;
`
const UserBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: blue;
    color: #ffff;
    font-size: 35px;
`
const TweetContent = styled.p`
    font-size: 20px;
    // margin-bottom: 20px;
`
const TweetCreation = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    padding-left: 40px;
    // margin-bottom: 20px;
    border-bottom: 1px solid grey;
    height: 55px;
`
const Paragraph = styled.p`
    color: grey;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`
const Span = styled.span`
    color : #ffff;
    font-size: 18px;
    font-weight: bold;
`
const Rating = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 40px;
    justify-content: flex-start;
    gap: 40px;
    height: 55px;
    border-bottom: 1px solid grey;
`
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid grey;
    justify-content: space-around;
    height: 55px;
`
const Logo = styled.i`
   font-size: 24px;
   cursor: pointer;
   &:hover {
       color: rgb(29, 155, 240);
   }
`
const NoComent = styled.h1`
   width: 200px;
   margin: auto;
   margin-top: 30px;
`
const Home = () => {

    const {id} = useParams()
    
    const {user, setUser} = useContext(UsersConnectContext)
    const [Tweet, setTweet] = useState(null)

    useEffect(async () => {
        if(user){
            // console.log(id);
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
            <Container>
                <LeftComponent/>
                <Center>
                    <Header>
                        <p>Home</p>
                        <StarBorderOutlinedIcon/>
                    </Header>
                    <Body>
                        {/* <LoggedTweets> */}
                                <TweetContainer>
                                    <UserContainer>
                                        <UserBtn>{user.name[0]}</UserBtn>
                                        <div>
                                            <h3>{user.name}</h3>
                                            <Paragraph>@{user.name}2</Paragraph>
                                        </div>
                                    </UserContainer>
                                    
                                    <TweetContent>{Tweet.content}</TweetContent>
                                </TweetContainer>
                                <TweetCreation>
                                    <Paragraph>{Tweet.createdAt}</Paragraph>
                                    <Paragraph>@{user.name}2</Paragraph>
                                </TweetCreation>
                                <Rating>
                                    <Paragraph><Span>{Tweet.retweets.length}</Span> Retweets</Paragraph>
                                    <Paragraph><Span>{Tweet.coments.length}</Span> Coments</Paragraph>
                                </Rating>
                                <LogoContainer>
                                    <Logo className="far fa-comment" title= "Reply"></Logo>
                                    <Logo className="fas fa-retweet" title= "Retweet"></Logo>
                                    <Logo className="far fa-heart" title= "Like"></Logo>
                                    <IosShareOutlinedIcon style= {{ fontSize: "24px", cursor: "pointer"}}/>
                                </LogoContainer>
                                {Tweet.coments.length <= 0 && <NoComent>No Coments</NoComent>}
                    </Body>
                </Center>
                <RightComponent/>
            </Container> 
        : 
        <>
            <Container>
                <LeftComponent/>
                <Center>
                    <Header>
                        <p>Home</p>
                        <StarBorderOutlinedIcon/>
                    </Header>
                    <Body>
                    </Body>
                </Center>
                <RightComponent/>
            </Container>         </>
        } 
            
    </>
    )
}

export default Home
