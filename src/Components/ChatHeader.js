

function ChatHeader({data}) {

const {urlImg,Nombre} =data;


  return (
    <div className="chat-header clearfix">
    <div className="row">
      <div className="col-lg-6">
        <a href="!#" data-toggle="modal" data-target="#view_info">
          <img
            src={urlImg}
            alt="avatar"
          />
        </a>
        <div className="chat-about">
          <h6 className="m-b-0">{Nombre}</h6>
          <small>Last seen: 2 hours ago</small>
        </div>
      </div>
      {/* <div className="col-lg-6 hidden-sm text-end">
        <a href="!#" className="btn btn-outline-secondary">
          <i className="fa fa-camera"></i>
        </a>
        <a href="!#" className="btn btn-outline-primary">
          <i className="fa fa-image"></i>
        </a>
        <a href="!#" className="btn btn-outline-info">
          <i className="fa fa-cogs"></i>
        </a>
        <a href="!#" className="btn btn-outline-warning">
          <i className="fa fa-question"></i>
        </a>
      </div> */}
    </div>
  </div>
  )
}

export default ChatHeader
