import "./App.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import EntryForm from "./entryForm/entryForm.jsx";
import EntriesSection from "./entriesSection/entriesSection.jsx";

function App() {
  return (
    <div className="wrapper">
      <div className="smartphone-screen">
        <div className="screen-content">
          <Header />
          <main className="main-section">
            <EntryForm />
            <EntriesSection />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
