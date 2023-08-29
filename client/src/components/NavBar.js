import { useHistory, Link} from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/user';
import prostLogo from '.././assets/prost-logo.png'

function NavBar() {
    const history = useHistory()
    const {user, setUser} = useContext(UserContext)

    const handleClick = () => {
        fetch('/logout', {
            method: "DELETE",
        }).then(() => {
            setUser(null)
        })
        history.push('/')
    }

    return (
        <nav className='nav-container'>
            <div>
            {user?
                <ul className='ul'>
                    <li className='nav-links'><Link to='/'>Home</Link></li>
                    <li className='nav-links'><Link to='/oktoberfest_about'>About</Link></li>
                    <li className='nav-links'><Link to='/oktoberfest_tents'>All Tents</Link></li>
                    <li className='nav-links'><Link to='/oktoberfest_visits'>Visits</Link></li>
                    <li className='nav-links'><Link to='/oktoberfest_add_visit'>Add A Visit</Link></li>
                </ul>
            :
                <ul className='ul'>
                    <li className='nav-links'><Link to='/'>Home</Link></li>
                    <li className='nav-links'><Link to='/oktoberfest_about'>About</Link></li>
                    <li className='nav-links'><Link to='/oktoberfest_tents'>All Tents</Link></li>
                    <li className='nav-links'><Link to='/oktoberfest_visits'>Visits</Link></li>
                </ul>
            }
            </div>
            <div className='logo-container'>
                <img src={prostLogo} alt="Prost! An Oktoberfest Guide Logo" className='logo'/>
            </div>
            {user ? 
                <ul className='ul'>
                    <li className='loggedin-links-1'><h6 className='logged-in-user'>Servus, <br /> {user.username}</h6></li>
                    <li className='loggedin-links-2'><Link to="/" className='signout-link' onClick={handleClick}>Logout</Link></li>
                </ul>
            :
                <ul className='ul'>
                    <li className='user-links-1'><Link to='/sign_in' className='signin-link'>Sign In</Link></li>
                    <li className='user-links-2'><Link to='/sign_up' className='signup-link'>Sign Up</Link></li>
                </ul>
            }
        </nav>
    )
}

export default NavBar