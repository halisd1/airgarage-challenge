import React, { useState } from 'react';

const SearchBar = ({ fetchList }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const onHandleSearch = (e) => {
        e.preventDefault();
        fetchList(searchTerm);
    }

    return (
        <div className="search-bar">
            <input type="text" value={searchTerm} placeholder="Enter Location" onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={(e) => onHandleSearch(e)}>Search</button>
        </div>
    )
}

export default SearchBar;