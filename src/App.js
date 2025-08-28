import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dice from "./Dice/Dice";
import Header from "./Components/Header";
import { ThemeProvider } from "./context/ThemeContext";
// import themetoggle from "./Components/ThemeToggle";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dice" element={<Dice />}></Route>
          <Route path="/header" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
