import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dice from "./Dice/Dice";
import Header from "./Components/Header";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dice" element={<Dice/>}></Route>
        <Route path="/header" element={<Header/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
