import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainIndexVillage from "./Village/Village";

function App() {
  return (
    <>
      <BrowserRouter basename="/ClickerZero">
        <Routes>
          <Route path="/" element={<MainIndexVillage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
