

type NotesProps = {
    label: string;
    content: string;
};

const Notes = ({ label, content }: NotesProps) => (
  <div>
    <label className="notes-label">
        {label}
    </label>
    <p className="notes-content">
      {content}
    </p>
  </div>
);

export default Notes;