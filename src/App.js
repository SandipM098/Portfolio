import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dice from "./Dice/Dice";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dice" element={<Dice/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
