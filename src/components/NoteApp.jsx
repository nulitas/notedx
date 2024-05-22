import { Component } from "react";
import { getInitialData } from "./utils/data";
import NoteHeader from "./NoteUtils/NoteHeader";
import NoteBody from "./NoteUtils/NoteBody";
import "./styles/style.css";
import NotePopup from "./NoteUtils/NotePopup";

export default class NoteApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      divcontainer: false,
      notes: getInitialData(),

      title: "",
      body: "",
      resultChar: 50,

      search: "",
      isOpen: false,
      contents: {},
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onActive = this.onActive.bind(this);

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
    this.onHandleClose = this.onHandleClose.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const limit = 50;
    if (this.state.resultChar >= 0) {
      this.setState({
        title: event.target.value.slice(0, limit),
        resultChar:
          limit - event.target.value.length < 0
            ? 0
            : limit - event.target.value.length,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    if (this.state.resultChar !== " ") {
      this.setState({ body: event.target.value });
    }
  }

  onSubmit() {
    if (this.state.title !== "" && this.state.body !== "") {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes,
            {
              id: +new Date(),
              title: this.state.title,
              body: this.state.body,
              createdAt: +new Date(),
              archived: false,
            },
          ],
        };
      });
    } else {
      this.setState({
        isOpen: true,
        contents: (
          <>
            {" "}
            <h3>Judul dan isi catatan harus diisi!</h3>{" "}
          </>
        ),
      });
    }
  }

  onHandleClose() {
    this.setState({ isOpen: false });
  }

  onSearchChangeEventHandler(event) {
    this.setState({ search: event.target.value });
  }

  onDelete(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onActive(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    this.setState({ notes });
  }

  onArchive(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    this.setState({ notes });
  }

  render() {
    return (
      <div className="note-app">
        <NoteHeader
          searchtitle={this.state.search}
          onSearch={this.onSearchChangeEventHandler}
        />

        <NoteBody
          maxChar={this.state.resultChar}
          title={this.state.title}
          onTitleChange={this.onTitleChangeEventHandler}
          body={this.state.body}
          onBodyChange={this.onBodyChangeEventHandler}
          onSubmit={this.onSubmit}
          search={this.state.search}
          notes={this.state.notes}
          onDelete={this.onDelete}
          onArchive={this.onArchive}
          onActive={this.onActive}
        />
        {this.state.isOpen && (
          <NotePopup
            onHandleClose={this.onHandleClose}
            content={this.state.contents}
          />
        )}
      </div>
    );
  }
}
