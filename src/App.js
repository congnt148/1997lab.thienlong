import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./features/Home";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
