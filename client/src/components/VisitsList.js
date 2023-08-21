import AllVisits from "./AllVisits"

function VisitsList({visitsArray}) {
    const visitComponents = visitsArray.map(visit => {
        <AllVisits 
            key = {visit.id}
            id = {visit.id}
            visit_rating = {visit.visit_rating}
            date = {visit.date}
            />
    })
    return(
        <div>
            {visitComponents}
        </div>
    )
}

export default VisitsList