import React from "react";
import ItemNotes from "./ItemNotes";

function ListItemNotArchived({ listItemNotArchived, onDelete, onArchive, undoArchive, formatDate }) {
  return (
    <>
        {
      listItemNotArchived && listItemNotArchived.length > 0 ? (
        <div className="notes-list">
          {listItemNotArchived.map((item) => (
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

export default ListItemNotArchived;