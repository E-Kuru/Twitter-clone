import {UsersConnectContext} from "../../contexts/usersConnect"
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftComponent from '../../components/LeftComponent'
import RightComponent from '../../components/RightComponent';
import EditProfil from '../../components/EditProfil';
import styled from 'styled-components'

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
    position: fixed;
    width: 50%;
    height: 45px;
    background-color: rgba(0,0,0,0.6);
    padding: 0 20px;
    display: flex;
    align-items: center;
`
const ProfilBackGround = styled.div`
    width: 100%;
    background: rgba(50, 53, 57, 0.8);
    height: 200px;
    margin-top: 45px;
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
const Joined = styled.div`
    display: flex;
    margin-bottom: 8px;
    gap: 10px;
    color: gray;
`
const Follow = styled.div`
    display: flex;
    gap: 10px;
    color: gray;
`

const Profil = () => {
    const {user} = useContext(UsersConnectContext)
    const [close, setClose] = useState("false")
    const navigate = useNavigate()

    useEffect ( () => {
        console.log("user", user.name)
    },[])

    const onArrowClick = () => {
        navigate("/home")
    }

    const onEditClick = () => {
        setClose("true")
    }
    return (
        <Container>
            {close === "true" && <EditProfil setClose= {setClose}/>}
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
                        <Joined>
                            <DateRangeOutlinedIcon/>
                            <Paragraph>{user.updatedAt}</Paragraph>
                        </Joined>
                        <Follow>
                            <Paragraph><strong>6</strong>Following</Paragraph>
                            <Paragraph><strong>1</strong>Follower</Paragraph>
                        </Follow>
                    </UserInformation>
                </EditUserProfil>
            </Center>
            <RightComponent/>

        </Container>
    )
}

export default Profil
