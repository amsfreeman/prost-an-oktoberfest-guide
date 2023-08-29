import { useHistory } from 'react-router-dom';
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
                    <li className='nav-links'><a href='/'>Home</a></li>
                    <li className='nav-links'><a href='/oktoberfest_about'>About</a></li>
                    <li className='nav-links'><a href='/oktoberfest_tents'>All Tents</a></li>
                    <li className='nav-links'><a href='/oktoberfest_visits'>Visits</a></li>
                    <li className='nav-links'><a href='/oktoberfest_add_visit'>Add A Visit</a></li>
                </ul>
            :
                <ul className='ul'>
                    <li className='nav-links'><a href='/'>Home</a></li>
                    <li className='nav-links'><a href='/oktoberfest_about'>About</a></li>
                    <li className='nav-links'><a href='/oktoberfest_tents'>All Tents</a></li>
                    <li className='nav-links'><a href='/oktoberfest_visits'>Visits</a></li>
                </ul>
            }
            </div>
            <div className='logo-container'>
                <img src={prostLogo} alt="Prost! An Oktoberfest Guide Logo" className='logo'/>
            </div>
            {user ? 
                <ul className='ul'>
                    <li className='loggedin-links-1'><h6 className='logged-in-user'>Servus, <br /> {user.username}</h6></li>
                    <li className='loggedin-links-2'><a href="/" className='signout-link' onClick={handleClick}>Logout</a></li>
                </ul>
            :
                <ul className='ul'>
                    <li className='user-links-1'><a href='/sign_in' className='signin-link'>Sign In</a></li>
                    <li className='user-links-2'><a href='/sign_up' className='signup-link'>Sign Up</a></li>
                </ul>
            }
        </nav>
    )
}

export default NavBar