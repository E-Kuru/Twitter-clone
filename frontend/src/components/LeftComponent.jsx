import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const LeftContainer = styled.div`
    flex: 1;
    background: dark;
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
`
const ElementContainer = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const Element = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    font-size: 20px;
    // background: red;
    cursor: pointer;
    width: 75%;
    padding: 7px 10px;
    transition : all .2s ease-in;
    &:hover {
        border-radius: 20px;
        background: rgba(102, 101, 101, 0.4);
    }
`
const Button = styled.button`
    background: rgb(29, 155, 240);
    box-shadow: rgb(0 0 0 / 8%) 0px 8px 28px;
    border: none;
    padding: 16px 2px;
    margin-right: 25px;
    border-radius: 50px;
    color: #ffff;
    font-size: 17px;
    font-weight: bold;
`
const LeftComponent = () => {
    const navigate = useNavigate()

    const onHomeClick = () => {
        navigate("/home")
    }
    const onProfilClick = () => {
        navigate('/profil')
    }
    
    return (
        <LeftContainer>
            <ElementContainer>
                <div>
                    <Link to="/">
                    <TwitterIcon 
                        style={{fontSize: "34px",color: "#ffff", marginBottom: "2px"}}
                    />
                    </Link>
                </div>
                <Element 
                    className= "element"
                    onClick={onHomeClick}
                >
                    <HomeIcon 
                        className= "logo"
                        style={{fontSize: "30px"}}
                    />
                    <p>Home</p>
                </Element>
                <Element className= "element">
                    <p 
                        className='logo'
                        style={{fontSize: "30px"}}
                    >
                        #
                    </p>
                    <p>Explore</p>
                </Element>
                <Element className= "element">
                    <Badge badgeContent={4} color="primary">
                        <NotificationsNoneOutlinedIcon 
                            className= "logo"
                            style={{fontSize: "30px"}}
                        />
                    </Badge>
                    <p>Notification</p>
                </Element>
                <Element className= "element">
                    <EmailOutlinedIcon 
                        className= "logo"
                        style={{fontSize: "30px"}}
                    />
                    <p>Messages</p>
                </Element>
                <Element className= "element">
                    <BookmarkBorderOutlinedIcon 
                        className= "logo"
                        style={{fontSize: "30px"}}
                    />
                    <p>Bookmarks</p>
                </Element>
                <Element className= "element">
                    <ListAltOutlinedIcon 
                        className= "logo"
                        style={{fontSize: "30px"}}
                    />
                    <p>Lists</p>
                </Element>
                <Element className= "element" onClick={onProfilClick}>
                    <PermIdentityOutlinedIcon 
                        className= "logo"
                        style={{fontSize: "30px"}}
                    />
                    <p>Profile</p>
                </Element>
                <Element className= "last element">
                    <MoreHorizOutlinedIcon 
                        className= "logo"
                        style={{fontSize: "30px", border: "2px solid grey", borderRadius: "50%"}}
                    />
                    <p>More</p>
                </Element>
                <Button>Tweet</Button>
            </ElementContainer>
        </LeftContainer>
    )
}

export default LeftComponent
