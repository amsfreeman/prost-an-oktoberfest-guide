function Search({searchKeyword, handleSearchInputChange, sortOrder, handleSortChange}) {
    return (
        <div className="search-and-sort-area">
            <h4 className="main-visits-page-header">Here you can see all the visits people have already left for Oktoberfest! Feel free to use the sort or search functions below to find specific visits! Do you agree with their ratings? Have you been to Oktoberfest? If so, you can add a visit too! If signed in already, head to the add visit page. If not, sign in or sign up!</h4>
            <h5 className="main-visits-page-header">Search or Sort Visits by Visit Number, Visit Rating Tent, Username, or Date Below</h5>
            <h6 className="main-visits-text">Sorting is done as follows:</h6>
            <p className="main-visits-text"> - Descending: Visit Rating</p>
            <p className="main-visits-text"> - Ascending: Visit Date, Visit Number, Tent Name, and Username</p>
            <div className="search-sort-container">
                <div className="search-bar">
                    <label htmlFor="search">Search Here: </label>
                    <input 
                        type="text"
                        value={searchKeyword}
                        onChange={handleSearchInputChange}
                    />
                </div>
                <div className="sort-dropdown">
                    <label>Sort by:</label>
                    <select value={sortOrder} onChange={(e) => handleSortChange(e.target.value)}>
                        <option value="id">Visit by Number</option>
                        <option value="visit_rating">Visit by Rating</option>
                        <option value="tent_id">Visit by Tent Name</option>
                        <option value="user.username">Visit by Username</option>
                        <option value='date'>Visit by Date</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Search;