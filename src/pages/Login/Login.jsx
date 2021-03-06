import "./login.css"
import { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SignupComponent from '../../components/SignupComponent';
import LoginComponent from '../../components/LoginComponent';

const Login = () => {

    const [formType, setFormType] = useState("close")

    const onSigninClick = () => {
        setFormType("signup")
    }
    const onLoginClick = () => {
        setFormType("login")
    }

    return (
        <div className="container-login">
            <div className="background"> 
                <img src= "assets/twitter.png" alt= "twitter-background"/>
            </div>
            <div className="entryFild">
                <TwitterIcon className="logo"/>
                <h1>Ça se passe maintenant</h1>
                <h2>Rejoignez Twitter dès aujourd'hui.</h2>
                <button 
                    className="signup-btn"
                    onClick={onSigninClick}
                >
                    S'inscrire
                </button>
                <h3>Vous avez déjà un compte ?</h3>
                <p><button 
                className="signup-btn"
                onClick={onLoginClick}>Se connecter</button></p>
            </div>
            {formType === "signup" && <SignupComponent setFormType= {setFormType}/>}
            {formType === "login" && <LoginComponent setFormType= {setFormType}/>}

            
        </div>
    )
}

export default Login
