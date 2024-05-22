export default function NoteInputHeader({ maxChar }) {
  return (
    <div className="note-input__header">
      <h2>Create a note.</h2>
      <p className="note-input__title__char-limit">Chars left : {maxChar}</p>
    </div>
  );
}
