import NoteListActive from "./NoteListActive";
import NoteListArchived from "./NoteListArchived";

export default function NoteList({
  notes,
  onDelete,
  onArchive,
  onActive,
  search,
}) {
  return (
    <div className="note-list">
      <NoteListActive
        notes={notes}
        onDelete={onDelete}
        onArchive={onArchive}
        search={search}
      />
      <NoteListArchived
        notes={notes}
        onDelete={onDelete}
        onActive={onActive}
        search={search}
      />
    </div>
  );
}
