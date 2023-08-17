import { Link, useHistory, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/user';

function NavBar() {
    const {user, setUser} = useContext(UserContext)
    const history = useHistory()

    const handleClick = () => {
        fetch('/logout', {
            method: "DELETE",
        }).then(() => {
            setUser(null)
        })
    }

    return (
        <nav>
            <div>
                <ul>
                    <li className='nav-links'><a href='/'>Home</a></li>
                    <li className='nav-links'><a href='/oktoberfest_about'>About</a></li>
                    <li className='nav-links'><a href='/oktoberfest_tents'>All Tents</a></li>
                </ul>
            </div>
            {user ? 
            <div>
                <ul>
                    <li className='user-links'><h4>Servus, {user.username}</h4></li>
                    <li className='user-links'><a href='/' className='signout-link' onClick={handleClick}>Logout</a></li>
                </ul>
            </div>
            :
            <div>
                <ul>
                    <li className='user-links'><a href='/sign_in' className='signin-link'>Log In</a></li>
                    <li className='user-links'><a href='/sign_up' className='signup-link'>Sign Up</a></li>
                </ul>
            </div>
            }
        </nav>
    )
}

export default NavBar