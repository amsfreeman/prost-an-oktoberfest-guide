import AllTents from "./AllTents"

function TentsList({tents}) {
    console.log(tents)
    const tentComponents = tents.map(tent => {
        return (
        <AllTents
            key={tent.id}
            id={tent.id}
            name={tent.name}
            capacity={tent.capacity}
            first_year={tent.first_year}
            details={tent.details}
            beer_sold={tent.beer_sold}
            image={tent.image}
        />
        )
    })
    return(
        <div className="tent-card-container">
                {tentComponents}
        </div>
    )
}

export default TentsList