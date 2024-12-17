import React from "react";
import ItemNotes from "./ItemNotes";

function ListItemNotes({listItemNotArchived, listItemArchived, onDelete, onArchive, undoArchive}) {
  return (
    <>
    <h2 className="title">Your Notes</h2>
    <br />
    {
      listItemNotArchived != null || listItemNotArchived.length != 0 ? (
        <div className="notes-list">
          {listItemNotArchived.map((item) => (
            <ItemNotes {...item} key={item.id} onArchive={onArchive} onDelete={onDelete} undoArchive={undoArchive} />
          ))}
        </div>
      ) : <p className="notes-list__empty-message">Notes Empty</p>
    }
    <br />
        <h2 className="title">Archived Notes</h2>
    <br />
    {
      listItemArchived != null || listItemArchived.length != 0  ? (
        <div className="notes-list">
          {listItemArchived.map((item) => (
            <ItemNotes {...item} key={item.id} onArchive={onArchive} onDelete={onDelete} undoArchive={undoArchive}/>
          ))}
        </div>
      ) : <p className="notes-list__empty-message">Notes Empty</p>
    }
  </>
  );
}

export default ListItemNotes;