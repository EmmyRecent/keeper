const Note = ({ id, title, content, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="bg-textColor shadow-note-shadow w-full rounded p-[10px] md:max-w-[400px]">
      <h1 className="mb-[6px] text-lg font-medium">{title}</h1>
      <p className="mb-[10px] whitespace-pre-wrap break-words text-base font-normal">
        {content}
      </p>
      <button
        onClick={handleClick}
        className="text-primaryColor ml-auto block cursor-pointer border-none text-base uppercase outline-none"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
