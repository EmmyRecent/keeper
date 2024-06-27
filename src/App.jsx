import { useState } from "react";
import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

const App = () => {
  const [newInput, setNewInput] = useState([]);

  // A function to handle the addition of notes
  const addItem = (items, setInput) => {
    setNewInput((prevValue) => {
      return [...prevValue, items];
    });

    setInput({
      title: "",
      content: "",
    });
  };

  // A function to handle the deletion of notes
  const deleteItem = (id) => {
    setNewInput((prevValue) => {
      return prevValue.filter((value, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />

      <main>
        <section className="wrapper">
          <CreateArea onAdd={addItem} />

          <div className="grid w-full grid-cols-1 place-content-center place-items-center gap-4 py-7 md:grid-cols-2 lg:grid-cols-3">
            {newInput.map((input, index) => (
              <Note
                key={index}
                id={index}
                title={input.title}
                content={input.content}
                onDelete={deleteItem}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
