import React from "react";

function ChatHistoryItem({item,perfil}) {
  return (
    <>
      {perfil.id === item.idUsuario ? (
        <li className="clearfix">
          <div className="message-data text-end">
            <span className="message-data-time">{item.fecha}</span>
          </div>
          <div className="message other-message float-right">
          {item.mensaje}
          </div>
        </li>
      ) : (
        <li className="clearfix">
          <div className="message-data">
            <span className="message-data-time">{item.fecha}</span>
          </div>
          <div className="message my-message">{item.mensaje}</div>
        </li>
      )}
    </>
  );
}

export default ChatHistoryItem;
