import ChatHeader from "./ChatHeader";
import ChatHistory from "./ChatHistory";
import ChatMessage from "./ChatMessage";
import Contact from "./Contact";

function Chat() {

var data = 
{
  Perfil :{
        id: "1",
        Nombre: "Pepito Suarez",
        urlImg:"https://bootdey.com/img/Content/avatar/avatar7.png"
      },
  Contacts :[
    {
      id: "1",
      target: "v-pills-home",
      urlImg: "https://bootdey.com/img/Content/avatar/avatar2.png",
      indActivo: "1",
      Nombre: "William Astucuri",
      mensajes: [
        {
          id: "1",
          idUsuario: "1",
          mensaje: "hola juan",
          fecha: new Date().toLocaleString(),
        },
        {
          id: "2",
          idUsuario: "7",
          mensaje: "Todo bien",
          fecha: new Date().toLocaleString(),
        },
        {
          id: "3",
          idUsuario: "7",
          mensaje: "Sigues trabajando en casa",
          fecha: new Date().toLocaleString(),
        },
        {
          id: "4",
          idUsuario: "1",
          mensaje: "Si y tu",
          fecha: new Date().toLocaleString(),
        },
        {
          id: "5",
          idUsuario: "7",
          mensaje: "Tambien",
          fecha: new Date().toLocaleString(),
        },
      ],
    },
    {
      id: "2",
      target: "v-pills-profile",
      urlImg: "https://bootdey.com/img/Content/avatar/avatar1.png",
      indActivo: "0",
      Nombre: "Juan Lopez RRR",
      mensajes: [
   
      ],
    },
  ]
};

// console.log(data);


  return (
    <div className="card chat-app">
      <div id="plist" className="people-list">
        <div className="input-group mb-0">
          <span className="input-group-text">
            <i className="fa fa-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <ul
          className="list-unstyled chat-list mt-2 mb-0 nav-pills"
          role="tablist"
          aria-orientation="vertical"
        >
          {data.Contacts.map((el) => (
            <li
              className={`clearfix ${
                el.indActivo === "1" ? "show active" : ""
              }`}
              id={el.id}
              data-bs-toggle="pill"
              data-bs-target={`#${el.target}`}
              role="tab"
              aria-controls={el.target}
              aria-selected="false"
              key={el.id}
            >
              <Contact data={el} />
            </li>
          ))}
        </ul>
      </div>

      <div className="chat tab-content">
        {data.Contacts.map((e, index) => (
          <div
            className={`tab-pane fade ${
              e.indActivo === "1" ? "show active" : ""
            }`}
            id={e.target}
            role="tabpanel"
            key={e.id}
          >
            <ChatHeader data={e} />
            <ChatHistory key={index} contact={e} perfil={data.Perfil} />
            <ChatMessage />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
