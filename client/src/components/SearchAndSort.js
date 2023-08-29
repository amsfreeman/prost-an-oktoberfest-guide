function SearchAndSort({searchKeyword, handleSearchInputChange, sortOrder, handleSortChange}) {
    return (
        <div className="search-and-sort-area">
            <h4 className="main-visits-page-header">Here you can see all the visits people have already left for Oktoberfest! Feel free to use the sort or search functions below to find specific visits! Do you agree with their ratings? Have you been to Oktoberfest? If so, you can add a visit too! If you are signed in already, head to the add visit page. If not, sign in or sign up!</h4>
            <h5 className="main-visits-page-header-2">Search or Sort Visits by Visit Number, Visit Rating Tent, Username, or Date:</h5>
            <div className="search-sort-container">
                <div className="search-bar-container">
                    <label htmlFor="search">Search Here:</label>
                    <input 
                        type="text"
                        value={searchKeyword}
                        onChange={handleSearchInputChange}
                    />
                </div>
                <div className="sort-dropdown-container">
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

export default SearchAndSort;