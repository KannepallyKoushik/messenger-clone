import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";

import Messages from "./Components/Messages";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([
    { username: "Architha", text: "Hi" },
    { username: "koushik", text: "endhi" },
  ]);
  const [userName, setuserName] = useState("");

  useEffect(() => {
    setuserName(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    //all the logic to send a message
    e.preventDefault();
    setmessages([...messages, { username: userName, text: input }]);
    setinput("");
  };

  return (
    <div className="App">
      <h1>Messenger App</h1>
      <h2>Hello {userName}</h2>

      <form>
        <FormControl>
          <InputLabel htmlFor="my-input">Enter your message</InputLabel>
          <Input value={input} onChange={(e) => setinput(e.target.value)} />
          <Button
            type="submit"
            color="primary"
            variant="outlined"
            disabled={!input}
            onClick={sendMessage}
          >
            Send message
          </Button>
        </FormControl>
      </form>
      {messages.map((msg) => (
        <Messages userName={userName} message={msg} />
      ))}
    </div>
  );
}

export default App;
