import React from "react";
import { CardContent, Typography, Card } from "@material-ui/core";

import "./Message.css";

function Messages({ message, userName }) {
  const isUser = userName === message.username;
  return (
    <div className={`message ${isUser && "message_user"}`}>
      <Card class={isUser ? "message__userCard" : "messge_guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.username} : {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Messages;
