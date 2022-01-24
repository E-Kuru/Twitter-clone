import {UsersConnectContext} from "../../contexts/usersConnect"
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftComponent from '../../components/LeftComponent'
import RightComponent from '../../components/RightComponent';
import EditProfil from '../../components/EditProfil';
import styled from 'styled-components'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';

import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

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
    padding: 8px 16px;
    border-bottom: solid 1px white;
    background-color: rgba(0, 0, 0, 0.7);
`
const ProfilBackGround = styled.div`
    width: 100%;
    background: rgba(50, 53, 57, 0.8);
    height: 200px;
`
const EditUserProfil = styled.div`
    width: 100%;
    height: 200px;
    background-color: black;
`
const Modification = styled.div`
    display: flex;
    position: relative;
    justify-content: flex-end;
`
const UserNameBtn = styled.div`
    width: 135px;
    height: 135px;
    border-radius:50%;
    border: 6px solid black;
    position: absolute;
    background-color: rgb(201, 116, 116);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6em;
    z-index: 3;
    top: -100%;
    left: 20px;
    cursor: pointer;
    &:hover {
        background-color: rgba(201, 116, 116, 0.9);
    }
`
const EditBtn = styled.button`
    color: #ffff;
    border: 2px solid #ffff;
    height: 36px;
    margin: 20px;
    padding: 0 10px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    background-color: rgb(0, 0, 0);
`
const UserInformation = styled.div`
    padding-left: 20px;
    padding-bottom: 8px;

`
const Paragraph = styled.p`
    color: grey;
`
const WebsiteContainer = styled.div`
    margin-bottom: 8px;
`
const LocationContainer = styled.div`
    display: flex;
    gap: 25px;
`
const Location = styled.div`
    display: flex;
    margin-bottom: 8px;
    gap: 7px;
    color: gray;
`
const Joined = styled.div`
    display: flex;
    margin-bottom: 8px;
    gap: 7px;
    color: gray;
`
const Follow = styled.div`
    display: flex;
    gap: 10px;
    color: gray;
`
const TweetsContainer = styled.div`
    display: flex;
    justify-content : space-between;
    margin : 30px 0;
    border-bottom: 2px solid grey;
`
const TweetTitle = styled.div`
    width: 100%; 
    display: flex;
    justify-content: center;  
    cursor: pointer;
    padding: 15px 0; 
    &:hover {
        background-color: 	rgba(248,248,248,0.1);
    }
`
const TweetSelect = styled.h4`
    color: ${props => props.isSelect === "tweet" ? "rgb(29, 155, 240)": "#ffff"} ;
`
const  ReplieSelect = styled.h4`
    color: ${props => props.isSelect === "replie" ? "rgb(29, 155, 240)": "#ffff"} ;
`
const MediaSelect = styled.h4`
    color: ${props => props.isSelect === "media" ? "rgb(29, 155, 240)": "#ffff"} ;
`
const LikesSelect = styled.h4`
    color: ${props => props.isSelect === "like" ? "rgb(29, 155, 240)": "#ffff"} ;
`
const Profil = () => {
    const {user} = useContext(UsersConnectContext)
    const [close, setClose] = useState("false")
    const navigate = useNavigate()
    const [bioValue, setBioValue] = useState("")
    const [locationValue, setLocationValue] = useState("")
    const [websiteValue, setWebsiteValue] = useState("")
    const [select, setSelect] = useState("tweet")

    useEffect ( () => {
        console.log("user", user.name)
    },[])

    const onArrowClick = () => {
        navigate("/home")
    }

    const onEditClick = () => {
        setClose("true")
    }
    const onSelect = (string) => {
        setSelect(string)
    }
    return (
        <Container>
            {close === "true" && 
                <EditProfil 
                    setClose= {setClose} 
                    bioValue={bioValue} 
                    setBioValue={setBioValue}
                    locationValue={locationValue}
                    setLocationValue={setLocationValue}
                    websiteValue={websiteValue}
                    setWebsiteValue={setWebsiteValue}
                />
            }
            <LeftComponent/>
            <Center>
                <Header>
                    <ArrowBackOutlinedIcon 
                        onClick= {onArrowClick}
                        style= {{ fontSize: "30px", cursor: "pointer"}}
                    />
                </Header>
                <ProfilBackGround></ProfilBackGround>
                <EditUserProfil>
                    <Modification>
                        <UserNameBtn>K</UserNameBtn>
                        <EditBtn onClick={onEditClick}>Edit Profil</EditBtn>
                    </Modification>
                    <UserInformation>
                        <h2>{user.name}</h2>
                        <Paragraph style={{marginBottom: "10px", color: "grey"}}>@{user.name}2</Paragraph>
                        <WebsiteContainer>
                            {bioValue && <h5>{bioValue}</h5>}
                            {websiteValue && <Paragraph><a style={{textDecoration: "underline", color: "lightblue", cursor: "pointer"}}>{websiteValue}</a></Paragraph>}
                        </WebsiteContainer>
                        <LocationContainer>
                            {locationValue && 
                                <Location>
                                    <RoomOutlinedIcon/> 
                                    <Paragraph>{locationValue}</Paragraph>
                                </Location>
                            }   
                        
                            <Joined>
                                <DateRangeOutlinedIcon/>
                                <Paragraph>{user.updatedAt}</Paragraph>
                            </Joined>
                        </LocationContainer>
                            
                        <Follow>
                            <Paragraph><strong>6</strong>Following</Paragraph>
                            <Paragraph><strong>1</strong>Follower</Paragraph>
                        </Follow>
                    </UserInformation>
                </EditUserProfil>
                <TweetsContainer>
                    <TweetTitle onClick={() => onSelect("tweet")}>
                        <TweetSelect isSelect = {select}>Tweets</TweetSelect>   
                    </TweetTitle>
                    <TweetTitle onClick={() => onSelect("replie")}>
                        <ReplieSelect isSelect = {select}>Tweet & replies</ReplieSelect>
                    </TweetTitle>
                    <TweetTitle onClick={() => onSelect("media")}>
                        <MediaSelect isSelect = {select}>Media</MediaSelect>
                    </TweetTitle>
                    <TweetTitle onClick={() => onSelect("like")}>
                        <LikesSelect isSelect = {select}>Likes</LikesSelect>
                    </TweetTitle>       
                </TweetsContainer>
            </Center>
            <RightComponent/>

        </Container>
    )
}

export default Profil
