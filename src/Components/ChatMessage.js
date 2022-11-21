import React from "react";

function ChatMessage() {
  return (
    <div className="chat-message clearfix">
      <div className="input-group mb-0">
        <span className="input-group-text">
          <i className="fa fa-send"></i>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Enter text here..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  );
}

export default ChatMessage;
