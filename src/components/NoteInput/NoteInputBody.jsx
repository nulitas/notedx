export default function NoteInputBody({ body, onBodyChange }) {
  return (
    <div className="note-input__body">
      <textarea
        typeof=""
        placeholder="your idea.."
        value={body}
        onChange={onBodyChange}
      />
    </div>
  );
}
