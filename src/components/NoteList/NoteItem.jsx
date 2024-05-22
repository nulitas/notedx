import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

export default function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  text,
  onDelete,
  onMove,
}) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={createdAt} body={body} />
      <NoteItemAction
        id={id}
        archived={archived}
        text={text}
        onDelete={onDelete}
        onMove={onMove}
      />
    </div>
  );
}
