import React from 'react';

const SearchBox = (props) =>{
    return(
        <div className="col col-sm-4"
        // 4 twelveth of the page
        value = {props.value}
        onChange={(e)=>props.setSearchValue(e.target.value)}>
            {/* whenever the input changes we update the setSearch
             */}
            <input className="form-control" placeholder="type to search..">
            </input>
        </div>
    )
};
export default SearchBox;