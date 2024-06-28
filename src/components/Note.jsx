import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ id, title, content, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className="w-full rounded bg-textColor p-[10px] shadow-note-shadow md:max-w-[400px]">
      <h1 className="mb-[6px] text-lg font-medium">{title}</h1>
      <p className="mb-[10px] whitespace-pre-wrap break-words text-base font-normal">
        {content}
      </p>
      <button
        onClick={handleClick}
        className="ml-auto block cursor-pointer border-none text-base text-primaryColor outline-none"
      >
        <DeleteIcon sx={{ fontSize: 28 }} />
      </button>
    </div>
  );
};

export default Note;
