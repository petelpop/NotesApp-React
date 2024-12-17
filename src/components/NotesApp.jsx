import React from "react";
import HeaderNotes from "./Header.jsx";
import InputNotes from "./InputNotes.jsx";
import { getInitialData } from "../utils/index.js";
import ListItemNotes from "./ListItemNotes.jsx";
import Snackbar from "./Snackbar.jsx";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    initialData: getInitialData(),
    searchText: "",
    snackbarMessage: "",
    showSnackbar: false
    }

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this)
    this.undoArchiveHandler = this.undoArchiveHandler.bind(this)
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onSearchHandler = this.onSearchHandler.bind(this)
    this.formatDate = this.formatDate.bind(this)
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

    return { listItemNotArchived, listItemArchived };
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
        ],
        snackbarMessage: "Note berhasil ditambahkan!",
        showSnackbar: true,
      }
    })
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updateData = prevState.initialData.map((item) =>
      item.id === id ? {...item, archived: true} : item)

      return { 
        initialData: updateData,         
        snackbarMessage: "Note berhasil diarsipkan!",
        showSnackbar: true, };
    });
  }

  undoArchiveHandler(id) {
    this.setState((prevState) => {
      const updateData = prevState.initialData.map((item) =>
      item.id === id ? {...item, archived: false} : item)
      
      return { 
        initialData: updateData,
        snackbarMessage: "Berhasil mengembalikan Note!",
        showSnackbar: true,
      };
    });
  }

  onDeleteHandler(id) {
    const initialData = this.state.initialData.filter(data => data.id !== id);
    this.setState({ 
      initialData,
      snackbarMessage: "Note berhasil dihapus!",
      showSnackbar: true,
    });
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
      onDelete={this.onDeleteHandler}
      formatDate={this.formatDate}/>
      <Snackbar 
      message={this.state.snackbarMessage} 
      onClose={() => this.setState({ showSnackbar: false })}
      visible={this.state.showSnackbar} />
      </div>
    )
  }
}

export default NotesApp;