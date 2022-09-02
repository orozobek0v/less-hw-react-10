import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Toggle from "./components/Toggle";
import MyContext from "./context/useContext";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <div className="App ">
        <Toggle>
          <Header />
        </Toggle>
      </div>
    </MyContext.Provider>
  );
}

export default App;
