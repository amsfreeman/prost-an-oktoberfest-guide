import { useHistory } from "react-router-dom"

function AllTents({id, name, image}) {
    const history = useHistory()

    function handleClick() {
        history.push(`/oktoberfest_tents/${id}`)
    }

    return (
        <div className="card" style={{width: "20rem"}}>
            <div className="card-body">
                <img src={image} alt={name} className="card-img-top"/>
                <h3 className="card-title">{name}</h3>
                <button onClick={handleClick} className="btn btn-primary">More Details!</button>
            </div>
        </div>
    )
}

export default AllTents