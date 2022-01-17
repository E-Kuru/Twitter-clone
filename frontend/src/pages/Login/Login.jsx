import { useState } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import Form from "../../components/Form";
import "./login.css"

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
                <p><a href="#" onClick={onLoginClick}>Se connecter</a></p>
            </div>
            {formType != "close" && <Form className="form" formType = {formType} setFormType={setFormType}/>}
            
        </div>
    )
}

export default Login
