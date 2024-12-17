import React from "react";

function SearchInput({onSearch, value}) {
  return (
    <div>
   <input type="text" placeholder="Search..." onChange={onSearch} value={value}/>
 </div>
 )
}

export default SearchInput;