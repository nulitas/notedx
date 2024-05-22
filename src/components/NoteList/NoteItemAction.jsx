export default function NoteItemAction({ id, text, onDelete, onMove }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className="note-item__archive-button" onClick={() => onMove(id)}>
        {text}
      </button>
    </div>
  );
}
