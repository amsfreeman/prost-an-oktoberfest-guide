import AllVisits from "./AllVisits"

function VisitsList({visitsArray}) {
    const visitComponents = visitsArray.map(visit => {
        return (
            <AllVisits 
                key = {visit.id}
                id = {visit.id}
                visit_rating = {visit.visit_rating}
                date = {visit.date}
                tent_id = {visit.tent_id}
                user_id = {visit.user_id}
                />
        )
    })
    return(
        <div>
            {visitComponents}
        </div>
    )
}

export default VisitsList