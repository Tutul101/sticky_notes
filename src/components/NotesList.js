import React from "react";
import { AddNote } from "./AddNote";
import { Note } from "./Note";

export const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          ></Note>
        );
      })}
      <AddNote handleAddNote={handleAddNote}></AddNote>
    </div>
  );
};
