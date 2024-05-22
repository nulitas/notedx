export default function NotePopup({ onHandleClose, content }) {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={onHandleClose}>
          x
        </span>
        {content}
      </div>
    </div>
  );
}
