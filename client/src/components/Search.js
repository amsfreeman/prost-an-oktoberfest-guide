function Search({searchKeyword, handleSearchInputChange}) {
    return (
        <div className="search-bar">
            <h4 className="main-vists-page-header">Here you can see all the visits people have already left for Oktoberfest! Feel free to use the sort or search functions below to find specific visits! Do you agree with their ratings? Have you been to Oktoberfest? If so, you can add a visit too! If signed in already, head to the add visit page. If not, sign in or sign up!</h4>
            <h5 className="main-vists-page-header">Search Visits by Username, Tent, Visit Rating, or Date Below</h5>
            <label htmlFor="search" className="main-vists-page-header">Search Here: </label>
            <input 
                type="text"
                value={searchKeyword}
                onChange={handleSearchInputChange}
            />
        </div>
    )
}

export default Search;