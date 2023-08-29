import AllVisits from "./AllVisits"

function VisitsList({filteredVisits, onDelete}) {

    const visitComponents = filteredVisits.map(visit => {
        return (
            <AllVisits 
                key = {visit.id}
                visit = {visit}
                onDelete={onDelete}
                />
        )
    })
    return(
        <>
            <div className="header-container">
            </div>
            <div className="visit-card-container">
                {visitComponents}
            </div>
        </>
    )
}

export default VisitsList