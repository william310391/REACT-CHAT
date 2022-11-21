import React from "react";

function Contact({data}) {
const { Nombre, urlImg } = data;
  return (
    <>
      <img
        src={urlImg}
        alt="avatar"
      />
      <div className="about">
        <div className="name">{Nombre}</div>
        <div className="status">
          <i className="fa fa-circle online"></i> online
        </div>
      </div>
    </>
  );
}

export default Contact;
