import { useContext } from 'react';
import { UserContext } from '../context/user';

function AllVisits({visit_rating, date}) {
    const { user } = useContext(UserContext);
    return (
        <div>
            <h2>Visit Info: </h2>
            <h4>{visit_rating}</h4>
            <h4>{date}</h4>
            <h5>{user.username}</h5>
        </div>
    )
}

export default AllVisits