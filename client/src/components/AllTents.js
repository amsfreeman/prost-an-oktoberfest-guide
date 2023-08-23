import { useHistory } from "react-router-dom"

function AllTents({id, name, image}) {
    const history = useHistory()

    function handleClick() {
        history.push(`/oktoberfest_tents/${id}`)
    }

    return (
        <div className="tent-card">
            <img src={image} alt={name} className="tent-card-img-top"/>
                <div>
                    <h3 className="tent-card-title">{name}</h3>
                    <button onClick={handleClick} className="btn btn-primary">More Details</button>
                </div>
        </div>
    )
}

export default AllTents