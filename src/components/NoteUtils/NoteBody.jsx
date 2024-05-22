import NoteInput from "../NoteInput/NoteInput";
import NoteList from "../NoteList/NoteList";

export default function NoteBody(props) {
  return (
    <div className="note-app__body">
      <NoteInput
        onCreate={props.onCreate}
        maxChar={props.maxChar}
        title={props.title}
        onTitleChange={props.onTitleChange}
        body={props.body}
        onBodyChange={props.onBodyChange}
        onSubmit={props.onSubmit}
      />
      <NoteList
        notes={props.notes}
        onDelete={props.onDelete}
        onArchive={props.onArchive}
        onActive={props.onActive}
        search={props.search}
      />
    </div>
  );
}
