import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

import Messages from "./Components/Messages";

function App() {
  const [input, setinput] = useState("");
  const [messages, setmessages] = useState([]);
  const [userName, setuserName] = useState("");

  useEffect(() => {
    // run once when the app component loads
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setuserName(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    //all the logic to send a message
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  return (
    <div className="App">
      <img
        src={require("./img/download.png")}
        alt="messenger-logo"
        className="messenger-logo"
      />
      <h1>Facebook Messenger Clone</h1>
      <h2>Hello {userName}</h2>

      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel htmlFor="my-input">Enter your message</InputLabel>
          <Input
            className="app__input"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            onClick={sendMessage}
            type="submit"
            color="primary"
            variant="outlined"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Messages key={id} userName={userName} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
