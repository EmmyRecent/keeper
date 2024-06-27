const CreateArea = () => {
  return (
    <form className="bg-textColor shadow-form-shadow relative mx-auto my-4 w-full max-w-[480px] rounded p-4 py-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="text-xl outline-none md:text-2xl"
      />

      <textarea
        name="content"
        placeholder="Take a note..."
        rows={3}
        className="text-lg outline-none md:text-xl"
      ></textarea>

      <button className="button text-sm">Add</button>
    </form>
  );
};

export default CreateArea;
