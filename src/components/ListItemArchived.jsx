import React from "react";
import ItemNotes from "./ItemNotes";

function ListItemArchived({listItemArchived, onDelete, onArchive, undoArchive, formatDate}) {
  return (
    <>
    {
      listItemArchived && listItemArchived.length > 0  ? (
        <div className="notes-list">
          {listItemArchived.map((item) => (
            <ItemNotes {...item} key={item.id} onArchive={onArchive} onDelete={onDelete} undoArchive={undoArchive} formatDate={formatDate}/>
          ))}
        </div>
      ) : 
      ( <div>
      <p className="notes-list__empty-message">Notes Empty</p>
      </div> )
    }
    </>
  )
}

export default ListItemArchived;