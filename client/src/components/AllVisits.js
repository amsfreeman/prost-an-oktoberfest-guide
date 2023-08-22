import { useContext } from 'react';
import { UserContext } from '../context/user';

function AllVisits({visit}) {
    const { user } = useContext(UserContext);
    return(
        <div className="visit-card">
            <h2 className='visit-card-info'>Visit Info</h2>
            <h3 className='visit-card-text'>
                Tentname: 
                {'\n'}
                {visit.tent.name}
            </h3>
            <h4 className='visit-card-text'>Rating: {visit.visit_rating}/5</h4>
            <h4 className='visit-card-text'>Date: {visit.date}</h4>
            <h5 className='visit-card-text'>User: {user.username}</h5>
        </div>
    )
}

export default AllVisits