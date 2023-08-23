import AllVisits from "./AllVisits"

function VisitsList({visitsArray}) {
    const visitComponents = visitsArray.map(visit => {
        return (
            <AllVisits 
                key = {visit.id}
                visit = {visit}
                />
        )
    })
    return(
        <div className="visit-card-container">
            {visitComponents}
        </div>
    )
}

export default VisitsList