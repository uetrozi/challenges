import "./App.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import MainSection from "./components/mainSection/mainSection.jsx";

function App() {
  return (
    <div className="wrapper">
      <div className="smartphone-screen">
        <div className="screen-content">
          <Header />
          <MainSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
