import { showFormattedDate } from "../utils/data";

export default function NoteItemContentDate({ date }) {
  return (
    <div className="note-item__date">
      <p>{showFormattedDate(date)}</p>
    </div>
  );
}
