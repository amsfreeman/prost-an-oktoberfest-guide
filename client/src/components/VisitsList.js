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
        <>
            <div className="header-container">
            <h4 className="main-vists-page-header">Here you can see all the visits people have already left for Oktoberfest! Do you agree with their ratings? Have you been to Oktoberfest? If so, you can add a visit too! If signed in already, head to the add visit page. If not, sign in or sign up!</h4>
            </div>
            <div className="visit-card-container">
                {visitComponents}
            </div>
        </>
    )
}

export default VisitsList