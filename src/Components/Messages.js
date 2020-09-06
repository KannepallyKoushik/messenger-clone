import React, { forwardRef } from "react";
import { CardContent, Typography, Card } from "@material-ui/core";

import "./Message.css";

const Messages = forwardRef(({ message, userName }, ref) => {
  const isUser = userName === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message_user"}`}>
      <Card class={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="p">
            {!isUser && `${message.username || "unknown user"} :`}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Messages;
