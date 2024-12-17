import React from "react";

class InputNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      archived: false,
      charLimit: 50
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
        charLimit: 50 - event.target.value.length,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    const charLimitStyle = {
      color: this.state.charLimit < 10 ? "red" : null, 
      fontWeight: this.state.charLimit < 10 ? "bold" : "normal",
  };
  
    return (
        <form onSubmit={this.onSubmitEventHandler} className="note-input">
          <br />
        <p className="note-input__title__char-limit" style={charLimitStyle}>Teks Limit: <strong>{this.state.charLimit}</strong></p>
        <input type="text" className="note-input__title" placeholder="Title..." value={this.state.title} onChange={this.onTitleChangeEventHandler} maxLength={50} />
        <textarea className="note-input__body" placeholder="Notes..." value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
        <button>Save</button>
        </form>

    );
  }
}

export default InputNotes;