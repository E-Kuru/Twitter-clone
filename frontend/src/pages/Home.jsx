import React from 'react'
import "./home.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const Home = () => {
    return (
        <div className="container">
            <div className="left">
                <div className='element-container'>
                    <div><TwitterIcon className= "first logo"/></div>
                    <div className= "element">
                        <HomeIcon className= "logo"/>
                        <p>Home</p>
                    </div>
                    <div className= "element">
                        <p className='logo'>#</p>
                        <p>Explore</p>
                    </div>
                    <div className= "element">
                        <NotificationsNoneOutlinedIcon className= "logo"/>
                        <p>Notification</p>
                    </div>
                    <div className= "element">
                        <EmailOutlinedIcon className= "logo"/>
                        <p>Messages</p>
                    </div>
                    <div className= "element">
                        <BookmarkBorderOutlinedIcon className= "logo"/>
                        <p>Bookmarks</p>
                    </div>
                    <div className= "element">
                        <ListAltOutlinedIcon className= "logo"/>
                        <p>Lists</p>
                    </div>
                    <div className= "element">
                        <PermIdentityOutlinedIcon className= "logo"/>
                        <p>Profile</p>
                    </div>
                    <div className= "last element">
                        <MoreHorizOutlinedIcon className= "logo"/>
                        <p>More</p>
                    </div>
                    <button>Tweet</button>
                </div>
            </div>
            <div className="center">
                <div className='header'>
                    <p>Home</p>
                    <StarBorderOutlinedIcon/>
                </div>
                <div className='body'>
                    <div className='tweet'>
                        <div className='input'>
                            <button>K</button>
                            <input type="text" placeholder="What's happening ?"/>
                        </div>
                        <div className="send">
                            <button>tweet</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">right</div>
        </div>
    )
}

export default Home
