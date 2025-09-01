import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import ToDoCard from "./components/ToDoCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <SearchPage />
      <ToDoCard />
    </>
  );
}

export default App;
