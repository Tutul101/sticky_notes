import React from "react";
import { useState } from "react";
export const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const textChangeHandler = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const saveHandleClickHandler = (event) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        onChange={textChangeHandler}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <button className="save" onClick={saveHandleClickHandler}>
          Save
        </button>
      </div>
    </div>
  );
};
