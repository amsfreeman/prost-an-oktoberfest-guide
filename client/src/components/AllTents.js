
function AllTents({name, image}) {
    return (
        <div className="card" style={{width: "20rem"}}>
            <div className="card-body">
                <img src={image} alt={name} className="card-img-top"/>
                <h3 className="card-title">{name}</h3>
                <a href='/oktoberfest_tents/:id' className="btn btn-primary">More Details!</a>
            </div>
        </div>
    )
}

export default AllTents