import React from "react";
import HeaderNotes from "./Header.jsx";
import InputNotes from "./InputNotes.jsx";
import { getInitialData } from "../utils/index.js";
import ListItemNotes from "./ListItemNotes.jsx";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    initialData: getInitialData(),
    searchText: ""
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
    this.undoArchiveHandler = this.undoArchiveHandler.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onSearchHandler = this.onSearchHandler.bind(this)
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        searchText: event.target.value
      }
    });
  }

  formatDate(isoString) {
    const date = new Date(isoString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  }

  getFilteredData() {
    const { initialData, searchText } = this.state;


    const filteredData = initialData.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );

    const listItemNotArchived = filteredData.filter((item) => !item.archived);
    const listItemArchived = filteredData.filter((item) => item.archived);

    return { 
      listItemNotArchived: listItemNotArchived.map((item) => ({
        ...item,
        createdAt: this.formatDate(item.createdAt)
      })), 
      listItemArchived: listItemArchived.map((item) => ({
        ...item,
        createdAt: this.formatDate(item.createdAt)
      })) };
  }


  onAddNoteHandler({title, body}) {
    this.setState((prevState) => {
    const date = new Date();
      return {
        initialData: [
          ...prevState.initialData,
          {
            id: +date,
            title,
            body,
            createdAt: date.toISOString(),
            archived: false
          }
        ]
      }
    })
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updateData = prevState.initialData.map((item) =>
      item.id === id ? {...item, archived: true} : item)

      return { initialData: updateData };
    });
  }

  undoArchiveHandler(id) {
    this.setState((prevState) => {
      const updateData = prevState.initialData.map((item) =>
      item.id === id ? {...item, archived: false} : item)
      
      return { initialData: updateData };
    });
  }

  onDeleteHandler(id) {
    const initialData = this.state.initialData.filter(data => data.id !== id);
    this.setState({ initialData });
  }

  render() {
    const { listItemNotArchived, listItemArchived } = this.getFilteredData();

    return (
      <div className="note-app">
      <HeaderNotes onSearch={this.onSearchHandler} value={this.state.searchText}/>
      <InputNotes addNotes={this.onAddNoteHandler}/>
      <br />
      <ListItemNotes 
      listItemArchived={listItemArchived} 
      listItemNotArchived={listItemNotArchived} 
      onArchive={this.onArchiveHandler}
      undoArchive={this.undoArchiveHandler}
      onDelete={this.onDeleteHandler}/>
      </div>
    )
  }
}

export default NotesApp;