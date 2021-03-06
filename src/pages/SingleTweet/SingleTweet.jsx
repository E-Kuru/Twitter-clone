import { useState, useEffect,useContext} from "react"
import { Link,useParams } from "react-router-dom";
import {UsersConnectContext} from "../../contexts/usersConnect"
import styled from 'styled-components'
import LeftComponent from "../../components/LeftComponent";
import RightComponent from "../../components/RightComponent";

import TwitterIcon from '@mui/icons-material/Twitter';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Coment from "../../components/Coment";

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
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
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
    // padding: 15px;
    margin-top: 25px;
`
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
const WriteComent = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding:0 20px;
   height: 75px;
   border-bottom: 1px solid grey;
//    margin-top: 20px;
`
const ReplyInput = styled.div`
   display: flex;
   gap: 20px;
   align-items: center;
   height: 100%;
   width: 85%;
`
const Input = styled.input`
   background-color: transparent;
   color: #ffff;
   font-size: 20px;
   height: 70%;
   width: 80%;
   padding-left: 20px;
   border: none;
   outline: none;
   &:focus {
    border-bottom: 1px solid grey;
   }
`
const ReplyBtn = styled.button`
   background-color:${(props) => props.inputValue === "no" ? "rgba(29, 155, 240, 0.6)" : "rgb(29, 155, 240)"};
   color: #ffff;
   padding: 5px 15px;
   border-radius: 20px;
   border: none;
   font-weight: bold;
   font-size: 16px;
`
const Home = () => {

    const {id} = useParams()
    
    const {user} = useContext(UsersConnectContext)
    const [Tweet, setTweet] = useState(null)
    const [inputValue, setInputValue] = useState()
    const [coments, setComents] = useState()
    
    const getUser = (async () => {
        if(user){
            const response = await fetch (`http://localhost:5000/tweet/${id}`, {
                    credentials: 'include',
                })
            const res = await response.json()
            setTweet(res)
        }
    })
    const getComents = async () => {
        const response = await fetch(`http://localhost:5000/coments/tweet/${id}`, {
            credentials: 'include',
        })
        const data = await response.json()
        setComents(data)
    }
    
    useEffect(() => {    
        getUser()
        getComents()
    })


    const postComent = async (value) => {
        const response = await fetch(`http://localhost:5000/coments`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(value)
        })
        const data = await response.json()
        console.log(data);
        getComents()
    }

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onReplyClick = () => {

        const newComent = {
            content : inputValue,
            user_id : user._id,
            tweet_id: Tweet._id
        }
        postComent(newComent)
        setInputValue("")
    }

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
                        <LogoContainer>
                            <Logo className="far fa-comment" title= "Reply"></Logo>
                            <Logo className="fas fa-retweet" title= "Retweet"></Logo>
                            <Logo className="far fa-heart" title= "Like"></Logo>
                            <IosShareOutlinedIcon style= {{ fontSize: "24px", cursor: "pointer"}}/>
                        </LogoContainer>
                        <WriteComent>
                            <ReplyInput>
                                <UserBtn>{user.name[0]}</UserBtn>
                                <Input 
                                    type="text" 
                                    placeholder="Tweet your reply" 
                                    onChange={onInputChange}
                                    value={inputValue}
                                />
                            </ReplyInput>
                            <ReplyBtn 
                                onClick={onReplyClick}
                                inputValue= {inputValue ? "yes" : "no"}                                
                            >
                                Reply
                            </ReplyBtn>
                        </WriteComent>    

                        <Coment 
                            coments = {coments}
                        />
                        
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
