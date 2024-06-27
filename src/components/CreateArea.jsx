import { useState } from "react";

const CreateArea = ({ onAdd }) => {
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input Validation
    if (input.content == "") {
      setErrorMessage("Note cannot be empty!");
    } else {
      onAdd(input, setInput);
      setErrorMessage("");
    }
  };

  // This function handles the display of other form element based on a boolean
  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-textColor shadow-form-shadow relative mx-auto my-4 w-full max-w-[480px] rounded p-4 py-4"
    >
      {isClicked && (
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={input.title}
          onChange={handleChange}
          className="text-xl outline-none md:text-2xl"
        />
      )}

      <textarea
        name="content"
        placeholder="Take a note..."
        rows={isClicked ? 3 : 1}
        value={input.content}
        onChange={handleChange}
        onClick={handleClick}
        className="text-lg outline-none md:text-xl"
      ></textarea>

      {isClicked && <button className="button text-sm">Add</button>}

      <p className="absolute -bottom-8 text-sm text-red-600 md:text-base">
        {errorMessage}
      </p>
    </form>
  );
};

export default CreateArea;
