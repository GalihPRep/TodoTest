import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Component/TodoList";
import TodoInput from "./Component/TodoInput";

function App() {
  const [date, setDate] = useState("");

  useEffect(() => {
    // Fetch data from the World Time API
    axios
      .get("https://worldtimeapi.org/api/ip")
      .then((response) => setDate(response.data.datetime))
      .catch((error) =>
        console.error("There was an error fetching the date!", error)
      );
  }, []);

  return (
    <div
      className="App"
      style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      <h3>DAFTAR TUGAS</h3>
      {date === "" ? (
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{marginTop: "4px", marginBottom: "0"}}>Memuat waktu…</p>
        </div>
      ) : (
        <div>{`Waktu saat ini: ${date}`}</div>
      )}
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
