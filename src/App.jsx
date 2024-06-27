import CreateArea from "./components/CreateArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <section className="wrapper">
          <CreateArea />

          <div className="grid w-full grid-cols-1 place-content-center place-items-center gap-4 py-7 md:grid-cols-2 lg:grid-cols-3">
            <Note title="Note title" content="Note content" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
