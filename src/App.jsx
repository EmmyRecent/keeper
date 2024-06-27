const App = () => {
  return (
    <div>
      <header>
        <div>
          <h1>Keeper App</h1>
        </div>
      </header>

      <main>
        <section>
          <form>
            <input type="text" name="title" placeholder="Title" />
            <textarea
              name="content"
              placeholder="take a note..."
              rows={3}
            ></textarea>
            <button>Add</button>
          </form>

          <div>
            <h1>Note</h1>
            <p>Note content</p>
            <button>Delete</button>
          </div>
        </section>

        <footer>
          <p>Copyright C 2024</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
