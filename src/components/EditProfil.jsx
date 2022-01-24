import {UsersConnectContext} from "../contexts/usersConnect"
import {useContext, useState} from 'react';
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import CloseIcon from '@mui/icons-material/Close';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const Shadow = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    background-color:#5b708366;
    z-index: 4;
`
const Container = styled.div`
    position: absolute;
    top:50px;
    left: 0;
    right:0;
    margin: auto;
    width: 50%;
    height: 90vh;
    padding: 15px  10px;
    background-color: black;
    display: flex;
    flex-direction: column;
    z-index: 5;
    align-items: center;
    border-radius: 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`
const PhotoContainer = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: content-box;
    margin-bottom: 35px;
`
const UserNameBtn = styled.div`
    width: 135px;
    height: 135px;
    border-radius:50%;
    position: absolute;
    background-color: rgba(201, 116, 116, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6em;
    z-index: 3;
    bottom: 10px;
    left: 20px;
    cursor: pointer;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 25px;
    // height: 100vh;
    align-items: center;

`
const Input = styled.input`
    height: 35px;
    padding-left: 25px;
    font-size: 20px;
    background-color: black;
    width: 80%;
    border: 1px solid #ffff;
    color: #ffff;
`
const BioInput = styled.input`
    height: 100px;
    padding-left: 25px;
    font-size: 20px;
    background-color: black;
    width: 80%;
    border: 1px solid #ffff;
    color: #ffff;
`
const Header = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
`
const HeaderContainer = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;
`
const SaveButton = styled.button`
    border: none;
    border-radius: 20px;
    padding: 6px 10px;
    position : absolute;
    top : 20px;
    right: 10px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }
`
const BirthContainer = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: column;
    margin-top: 10px;
    gap: 5px;
`
const BirthParagraph = styled.p`
    color: grey;
`
const BirthDate = styled.h3`
    font-size: 16px;
`
const EditProfil = ({
    setClose, 
    bioValue, 
    setBioValue, 
    locationValue, 
    setLocationValue, 
    websiteValue, 
    setWebsiteValue
}) => {
    const {user} = useContext(UsersConnectContext)
    const [nameValue, setNameValue] = useState("")
    // const [bioValue, setBioValue] = useState("")
    // const [locationValue, setLocationValue] = useState("")
    // const [websiteValue, setWebsiteValue] = useState("")

    const formik = useFormik({
        initialValues: {
            name: `${user.name}`,
            bio: `${bioValue}`,
            location: `${locationValue}`,
            website: `${websiteValue}`
        },
        onSubmit: async values => {
            setNameValue(values.name)
            setBioValue(values.bio)
            setLocationValue(values.location)
            setWebsiteValue(values.website)
            console.log(bioValue)
            console.log(locationValue); 
            console.log(websiteValue); 
            // console.log("hhelloo");
        }
    })
    const onCloseCloclick = () => {
        setClose("false")
    }


    return (
        <>
            <Shadow></Shadow>
            <Container>
                <Header>
                    <HeaderContainer>
                        <CloseIcon 
                            onClick={onCloseCloclick}
                            style = {{cursor: "pointer", fontSize: "25px"}}
                        />
                        <h2>Edit Profile</h2>
                    </HeaderContainer>
                    {/* <div>
                        <SaveButton onClick={onCloseCloclick} type="submit">Save</SaveButton>
                    </div> */}
                </Header>
                <PhotoContainer>
                    <UserNameBtn>K</UserNameBtn>
                    <AddAPhotoIcon/>
                </PhotoContainer>
                <Form onSubmit={formik.handleSubmit}>
                    
                    <Input 
                        type="text" 
                        placeholder="Name" 
                        name= "name" 
                        value= {formik.values.name}
                        onChange={formik.handleChange} 
                    />
                    <BioInput 
                        type="text" 
                        placeholder="bio" 
                        name= "bio" 
                        value= {formik.values.bio}
                        onChange={formik.handleChange} 
                    />
                    <Input 
                        type="text" 
                        placeholder="location" 
                        name= "location" 
                        value= {formik.values.location}
                        onChange={formik.handleChange} 
                    />
                    <Input 
                        type="text" 
                        placeholder="website" 
                        name= "website" 
                        value= {formik.values.website}
                        onChange={formik.handleChange} 
                    />
                    <div>
                        <SaveButton type="submit" onClick={onCloseCloclick}>Save</SaveButton>
                    </div>
                </Form>
                <BirthContainer>
                    <BirthParagraph>Birth date :</BirthParagraph>
                    <BirthDate>{user.dateOfBirth}</BirthDate>
                </BirthContainer>
            </Container>
        </>
    )
}

export default EditProfil
