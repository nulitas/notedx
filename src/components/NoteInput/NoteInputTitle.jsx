export default function NoteInputTitle({ title, onTitleChange }) {
  return (
    <div className="note-input__title">
      <input
        type="text"
        placeholder="title..."
        value={title}
        onChange={onTitleChange}
      />
    </div>
  );
}
