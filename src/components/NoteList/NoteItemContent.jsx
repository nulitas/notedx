import NoteItemContentBody from "./NoteItemContentBody";
import NoteItemContentDate from "./NoteItemContentDate";
import NoteItemContentTitle from "./NoteItemContentTitle";

export default function NoteItemContent({ title, date, body }) {
  return (
    <div className="note-item__content">
      <NoteItemContentTitle title={title} />
      <NoteItemContentDate date={date} />
      <NoteItemContentBody body={body} />
    </div>
  );
}
