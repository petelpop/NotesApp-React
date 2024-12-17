import React from "react";

function ItemNotes({id, title, body, createdAt, onDelete, onArchive, undoArchive, archived, formatDate}) {
  return (
    <div className="note-item">
      <br />
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__date">{formatDate(createdAt)}</p>
      <p className="note-item__content">{body}</p>
      <button onClick={() => onDelete(id)} className="note-item__delete-button">Delete</button>
      {
      archived != true ?
      <button onClick={() => onArchive(id)} className="note-item__archive-button">Archive</button>
      : 
      <button onClick={() => undoArchive(id)} className="note-item__archive-button">Unarchive</button>
      }
    </div>
  );
}

export default ItemNotes;