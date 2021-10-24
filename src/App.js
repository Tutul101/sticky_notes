import "./App.css";
import { useState } from "react";
import { NotesList } from "./components/NotesList";
import { nanoid } from "nanoid";
import { Search } from "./components/Search";
function App() {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "This is first note!!", date: "22/10/2021" },
    { id: nanoid(), text: "This is second note!!", date: "22/10/2021" },
    { id: nanoid(), text: "This is third note!!", date: "22/10/2021" },
    { id: nanoid(), text: "This is fourth note!!", date: "22/10/2021" },
  ]);
  const [search, setSearch] = useState("");
  // console.log(notes);
  const addNote = (text) => {
    // console.log(text);
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNode = (id) => {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
  };
  return (
    <>
      <div className="container">
        <Search handleSearchNote={setSearch} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(search)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNode}
        />
      </div>
    </>
  );
}

export default App;
