import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

function SingleTentDetail() {
    const {id} = useParams()
    const [tent, setTent] = useState(null)
    const history = useHistory()

    useEffect(()=>{
        const fetchTentData = async () => {
            const response = await fetch(`/oktoberfest_tents/${id}`)
            const data = await response.json()
            setTent(data)
        }
        fetchTentData()
    },[]) 

    if (!tent || !tent.visits) {
        return <div>Loading...</div>;
    }

    const handleClick = () => {
        history.push('/oktoberfest_visits')
    }

    return (
        <div>
            <div className="single-tent-card-container">
                <div className="single-tent-card">
                    <div className="single-tent-card-body">
                        <img src={`/static/assets/images/tent-images/tent${tent.id}.jpg`} alt={tent.name} className="single-tent-card-img-top"/>
                        <h3 className="single-tent-card-title">{tent.name}</h3>
                        <p className="single-tent-card-text">Capacity: {tent.capacity} Festgoers</p>
                        <p className="single-tent-card-text">Tent's First Year at Oktoberfest: {tent.first_year}</p>
                        <p className="single-tent-card-text">Beer Type Sold: {tent.beer_sold}</p>
                        <p className="single-tent-card-text">{tent.details}</p>
                    </div>
                </div>
            </div>
        <div>
            <h3 className="visits-list">Visits to: {tent.name} </h3>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Visit ID#</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                {tent.visits.map(visit => (
                                <tbody key={visit.id} >
                                    <tr>
                                        <th scope="row">
                                            <button onClick={handleClick} className="btn btn-light">{visit.id}</button>
                                        </th>
                                        <td>{visit.user.username}</td>
                                        <td>{visit.visit_rating}/5</td>
                                        <td>{visit.date}</td>
                                    </tr>
                                </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default SingleTentDetail