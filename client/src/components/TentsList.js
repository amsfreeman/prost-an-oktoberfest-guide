import TentDetail from "./TentDetail"

function TentsList({tentsArray}) {
    console.log(tentsArray)
    const tentComponents = tentsArray.map(tent => {
        return (
        <TentDetail
            key={tent.id}
            id={tent.id}
            name={tent.name}
            capacity={tent.capacity}
            first_year={tent.first_year}
            details={tent.details}
            beer_sold={tent.beer_sold}
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