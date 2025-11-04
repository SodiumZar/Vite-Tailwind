import React from 'react';

const Search = ({ value = '', onSearch }) => {
    return (
        <div className="mb-6">
            <label className="sr-only" htmlFor="search-input">Search</label>
            <input
                id="search-input"
                type="text"
                value={value}
                onChange={(e) => onSearch && onSearch(e.target.value)}
                placeholder="Search menu by name..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F0A202]/50"
            />
        </div>
    );
};

export default Search;
