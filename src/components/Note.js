import React from "react";
import { MdDelete } from "react-icons/md";
export const Note = ({ id, text, date, handleDeleteNote }) => {
  const deleteNoteHandler = (id) => {
    handleDeleteNote(id);
  };
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDelete
          className="delete-icons"
          onClick={() => deleteNoteHandler(id)}
        ></MdDelete>
      </div>
    </div>
  );
};
