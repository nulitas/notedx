import NoteSearch from "./NoteSearch";
export default function NoteHeader({ search, onSearch }) {
  return (
    <div className="note-app__header">
      <h1>note-app</h1>
      <NoteSearch search={search} onSearch={onSearch} />
    </div>
  );
}
