
function TentDetail({id, name, image, capacity, first_year, beer_sold}) {
    return (
        <div>
            <h1>CHECK</h1>
            <h3>{name}</h3>
            <p>{capacity}</p>
            <p>{first_year}</p>
            <p>{beer_sold}</p>
        </div>
    )
}

export default TentDetail