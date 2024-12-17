import React from "react";
import SearchInput from "./SearchInput";

function HeaderNotes({onSearch, value}) {
  return (
    <header className="note-app__header">
      <h1>Notes App</h1>
      <SearchInput onSearch={onSearch} value={value}/>
    </header>
  )
}

export default HeaderNotes;