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
    position: relative;
    top:50px;
    left: 0;
    right:0;
    margin: auto;
    width: 50%;
    height: 90vh;
    padding: 15px 10px 0 10px;
    background-color: black;
    display: flex;
    flex-direction: column;
    z-index: 5;
    align-items: center;
    border-radius: 20px;
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
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
    }
`
const EditProfil = ({setClose}) => {

    const formik = useFormik({
        initialValues: {
            name: "karimou cisse",
            bio: "",
            location: "",
            website: ""
        }
    })
    const onCloseCloclick = () => {
        setClose("false")
    }
    return (
        
        <Shadow>
            <Container>
                <Header>
                    <HeaderContainer>
                        <CloseIcon 
                            onClick={onCloseCloclick}
                            style = {{cursor: "pointer", fontSize: "25px"}}
                        />
                        <h2>Edit Profile</h2>
                    </HeaderContainer>
                    <div>
                        <SaveButton>Save</SaveButton>
                    </div>
                </Header>
                <PhotoContainer>
                    <UserNameBtn>K</UserNameBtn>
                    <AddAPhotoIcon/>
                </PhotoContainer>
                <Form>
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
                </Form>
            </Container>
        </Shadow>
    )
}

export default EditProfil
