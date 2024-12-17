import React from "react";
import ListItemNotArchived from "./ListItemNotArchived";
import ListItemArchived from "./ListItemArchived";

function ListItemNotes({listItemNotArchived, listItemArchived, onDelete, onArchive, undoArchive, formatDate}) {
  return (
    <>
    <h2 className="title">Your Notes</h2>
    <br />
    <ListItemNotArchived 
    formatDate={formatDate} 
    listItemNotArchived={listItemNotArchived} 
    onDelete={onDelete}
    onArchive={onArchive} 
    undoArchive={undoArchive }/>
    <br />
        <h2 className="title">Archived Notes</h2>
    <br />
    <ListItemArchived
    listItemArchived={listItemArchived}
    formatDate={formatDate} 
    onDelete={onDelete}
    onArchive={onArchive} 
    undoArchive={undoArchive}/>
  </>
  );
}

export default ListItemNotes;