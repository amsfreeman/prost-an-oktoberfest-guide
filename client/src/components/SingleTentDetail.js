import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleTentDetail() {
    const {id} = useParams()
    const [tent, setTent] = useState([])

    useEffect(()=>{
        fetch(`/oktoberfest_tents/${id}`)
        .then(r => r.json())
        .then(tent => setTent(tent))
    },[]) 
    
    return (
        <div className="single-tent-card-container">
            <div className="single-tent-card">
                <div className="single-tent-card-body">
                    <img src={tent.image} alt={tent.name} className="single-tent-card-img-top"/>
                    <h3 className="single-tent-card-title">{tent.name}</h3>
                    <p className="single-tent-card-text">Capacity: {tent.capacity} Festgoers</p>
                    <p className="single-tent-card-text">Tent's First Year at Oktoberfest: {tent.first_year}</p>
                    <p className="single-tent-card-text">Beer Type Sold: {tent.beer_sold}</p>
                    <p className="single-tent-card-text">{tent.details}</p>
                </div>
            </div>
        </div>
    )
}

export default SingleTentDetail