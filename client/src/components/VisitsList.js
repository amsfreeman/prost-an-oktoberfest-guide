import AllVisits from "./AllVisits"

function VisitsList({filteredVisits, onDelete, onEdit}) {

    const visitComponents = filteredVisits.map(visit => {
        return (
            <AllVisits 
                key = {visit.id}
                visit = {visit}
                onDelete = {onDelete}
                onEdit = {onEdit}
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