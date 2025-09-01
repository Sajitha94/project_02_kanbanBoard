import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <SearchPage />
    </>
  );
}

export default App;
