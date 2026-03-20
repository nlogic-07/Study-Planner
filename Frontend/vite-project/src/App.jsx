import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);

  //fetching data from backend
  const fetchData = async () => {
    const res = await axios.get("http://localhost:8080/");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, comment };

    const response = await axios.post("http://localhost:8080/", {
      data,
    });
    console.log(response.data);
    setUsername("");
    setComment("");
    fetchData();
  };
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-500"> Basic form</h1>
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

      <h3>All comments!!</h3>

      {data.map((item, index) => (
        <div key={index}>
          <p>
            {" "}
            {item.username} ---{item.comment}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
