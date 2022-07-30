import React from "react";
import { Search } from "react-bootstrap-icons";

const SearchBar = () => {
    return (
        <div className="SearchBarContainer">
            <input className="SearchBar" placeholder="Search" ></input>
            <Search className="SearchButton"/>
        </div>
    );
}

export default SearchBar;