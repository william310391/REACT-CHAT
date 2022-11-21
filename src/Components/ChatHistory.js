import ChatHistoryItem from "./ChatHistoryItem";
import { useEffect } from "react";

function ChatHistory({ contact, perfil }) {
  // console.log(contact.mensajes);

  useEffect(() => {
    const out = document.getElementById("chat-history" + contact.id);
    out.scrollTop = out.scrollHeight - out.clientHeight;
  });

  return (
    <div className="chat-history" id={`chat-history${contact.id}`}>
      <ul className="m-b-0">
        {contact.mensajes.length > 0 ? (
          contact.mensajes.map((el, index ) => (
            <ChatHistoryItem key={index} item={el} perfil={perfil} />
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}

export default ChatHistory;
