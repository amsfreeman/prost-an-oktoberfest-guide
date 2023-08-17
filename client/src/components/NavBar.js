import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/user';

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
                    <li className='user-links'><a href='/sign_in' className='signin-link'>Sign In</a></li>
                    <li className='user-links'><a href='/sign_up' className='signup-link'>Sign Up</a></li>
                </ul>
            </div>
            }
        </nav>
    )
}

export default NavBar