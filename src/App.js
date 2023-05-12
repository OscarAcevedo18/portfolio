import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/footer/Footer";
// import About from "./views/About";
// import PortProvider from "./context/PortProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
