import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainIndexVillage from "./Village";
import MainApp from "./mainApp";

function App() {
  return (
    <>
      <BrowserRouter basename="/ClickerZero">
        <Routes>
          <Route path="/" element={<MainApp />}></Route>
          <Route path="/Village" element={<MainIndexVillage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
