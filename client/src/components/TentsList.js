import AllTents from "./AllTents"

function TentsList({tentsArray}) {
    console.log(tentsArray)
    const tentComponents = tentsArray.map(tent => {
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
    console.log(tentComponents[0])
    return(
        <div>
            {tentComponents}
        </div>
    )
}

export default TentsList