export default function Search({ search, onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={onSearch}
      />
    </div>
  );
}
