import styled from 'styled-components'
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';

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
`

const Login = styled.div`
    margin-top : 15%;
    color : white;
    :hover{
        color : #1D9BF0;
        text-decoration : underline;
    }

`

const PleaseLog = () => {
  return ( 
        <LoadingContainer>
            <TwitterIcon 
                style={{position: 'absolute', fontSize: "45px", color: "rgb(29, 155, 240)", top: "70px"}}/>
            <Link to="/">
                <Login><h2>Please Log In</h2></Login>
            </Link>
        </LoadingContainer>
)
};

export default PleaseLog;

