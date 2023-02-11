import "./App.css";
import Clicker from "./hook/ClickerCount";
import ClearLocalStorageButton from "./hook/RemoveLS";

function App() {
  return (
    <>
      <div className="App">
        <Clicker />
        <ClearLocalStorageButton />
      </div>
    </>
  );
}

export default App;
