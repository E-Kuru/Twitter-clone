import './NotFound.css'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className='text'>
            <h1>404 Not Found</h1>
            <div>
                <p>Please go <Link to="/"> Home </Link></p>
                <p>And if u are not logged, <Link to="/login"> Log In</Link></p>
            </div>
        </div>
    )
}

export default NotFound
