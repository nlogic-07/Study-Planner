import { useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, comment };

    const response = await axios.post("http://localhost:8080/", {
      data,
    });
    console.log(response.data);
    setUsername("");
    setComment("");
  };
  return (
    <>
      <h1>HELLO Basic form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label></label>
        <input
          name="username"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <br></br>

        <textarea
          name="comment"
          placeholder="write something"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <br></br>

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
