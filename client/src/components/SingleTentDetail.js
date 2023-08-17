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
        <div className="card" style={{width: "40rem"}}>
            <div className="card-body">
                <img src={tent.image} alt={tent.name} className="card-img-top"/>
                <h3 className="card-title">{tent.name}</h3>
                <p>Capacity: {tent.capacity} Festgoers</p>
                <p>Tent's First Year at Oktoberfest: {tent.first_year}</p>
                <p>Beer Type Sold: {tent.beer_sold}</p>
                <p>{tent.details}</p>
            </div>
        </div>
    )
}

export default SingleTentDetail