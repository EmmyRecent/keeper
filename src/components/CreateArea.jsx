import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

  const theme = createTheme({
    palette: {
      yellow: {
        main: "#f5ba13",
      },
    },
  });

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

      {isClicked && (
        <ThemeProvider theme={theme}>
          <Fab
            sx={{
              position: "absolute",
              bottom: "-23px",
              right: "18px",
            }}
            color="yellow"
            size="medium"
            onClick={handleSubmit}
          >
            <AddIcon sx={{ fontSize: 28 }} />
          </Fab>
        </ThemeProvider>
      )}

      <p className="absolute -bottom-8 text-sm text-red-600 md:text-base">
        {errorMessage}
      </p>
    </form>
  );
};

export default CreateArea;
