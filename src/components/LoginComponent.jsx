import { useContext } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import styled from 'styled-components'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router';
import * as Yup from 'yup'
import {UsersConnectContext} from "../contexts/usersConnect"

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
    height: 400px;
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
const LoginComponent = ({setFormType}) => {

    const {user, setUser} = useContext(UsersConnectContext)

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "kkfec@gmssssddsdail.com",
            password: "bestt7501",
        },

        onSubmit: async values => {
            const response = await fetch ('http://localhost:5000/auth/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })

            if(response.status >= 400) {
                alert("Error, this mail already exist")
            } else {
                const userLogged = await response.json()
                setUser(userLogged)
                console.log(user);
                navigate('/home')
            }
        },

        validateOnChange: false,
        validationSchema: Yup.object({
            
            password: Yup.string()
                .required("Password is required"),
            email: Yup.string()
                .required("Password is required"),
        })
    })

const onCloseClick = () => {
    setFormType("close")
}
return (
    <>
        <Shadow className="shadow"></Shadow>
        <FormField 
            onSubmit={formik.handleSubmit}
        >
            <CloseOutlinedIcon 
                className="close-icon" 
                onClick= {onCloseClick} 
                style= {{  
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    fontSize: "25px",
                    cursor: "pointer",
                    color: "black" 
                }}
            />
            <TwitterIcon className="form-icon" style= {{color: "rgb(29, 155, 240)", fontSize: "40px"}}/>
            <h1>Se connecter</h1>
            <Input 
                type="text" 
                placeholder="email" 
                name="email" 
                value= {formik.values.email}
                onChange={formik.handleChange}
            />
            <Input 
                type="password" 
                placeholder="password" 
                name= "password" 
                value= {formik.values.password}
                onChange={formik.handleChange}
            />
            
            <FormButton className='form-btn' type="submit">Login</FormButton>
            
        </FormField>
    </>
)
}

export default LoginComponent
