import "./login.css"
import TwitterIcon from '@mui/icons-material/Twitter';

const Login = () => {
    return (
        <div className="container-login">
            <div className="background"> 
                <img src= "assets/twitter.png" alt= "twitter-background"/>
            </div>
            <div className="entryFild">
                <TwitterIcon className="logo"/>
                <h1>ça se passe maintenant</h1>
                <h2>Rejoignez Twitter dès aujourd'hui.</h2>
                <button className="sigin-btn">S'inscrire</button>
                <h3>Vous avez déjà un compte ?</h3>
                <p><a href="#">Se connecter</a></p>
            </div>
        </div>
    )
}

export default Login
