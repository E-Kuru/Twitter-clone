import React, { useState } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import "./form.css"

const Shadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: rgba(0, 0, 0, 0.7);
`

const FormField = styled.form`
    position: absolute;
    width: 40%;
    /* min-height: 400px; */
    height: 85%;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: center;
    padding-top: 20px;
    border-radius: 20px;
    background-color: #ffff;
    z-index: 3;
`

const Input = styled.input`
    width: 70%;
    height: 38px;
    padding-left: 20px;
    font-size: 20px;
    border: 1px solid grey;
    &:focus {
        border: 2px solid rgb(28, 140, 214);
        outline: none;
    }
`
const FormButton = styled.button`
    background-color:rgb(29, 155, 240);
    padding: 8px 30px;
    color: #ffff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
`
const Form = ({formType, setFormType}) => {
    const [dateValue, setDateValue] = useState()

    const formik = useFormik({
        initialValues: {
            name: "karimou",
            password: "bestt7501"
        }
    })
    const onDateChange = (e) => {
        console.log(e.target.value);
    }
    const onCloseClick = () => {
        setFormType("close")
    }
    return (
        <>
            <Shadow className="shadow"></Shadow>
            <FormField className={formType === "login" ? "form-login" : "form-signup"}>
                <CloseOutlinedIcon className="close-icon" onClick= {onCloseClick}/>
                <TwitterIcon className="form-icon"/>
                <h1>Créer votre compte</h1>
                {formType === "signup" && <Input type="text" placeholder="Name"/>}
                <Input type="text" placeholder="email"/>
                <Input type="password" placeholder="password"/>
                
                {formType === "signup" && 
                    <>
                        <Input 
                        type="tel" 
                        pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"
                        placeholder="telephone"
                        />
                        <Input 
                            type="date" 
                            value= {dateValue}
                            min="1900-01-01"
                            max="2022-01-17"
                            onChange={onDateChange}
                        />
                    </>
                }
                
                {formType === "signup" && <FormButton className='form-btn'>Signup</FormButton>}
                {formType === "login" && <FormButton className='form-btn'>Login</FormButton>}
                
            </FormField>
        </>
    )
}

export default Form
