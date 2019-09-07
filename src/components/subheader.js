import React from "react";

function subHeader (props) {

  let title = props.title;

  let style = {
    textAlign: "center",
    color: "white",
    backgroundColor: "#dc3545",
    opacity: "0.7"
  }

  switch(props.title) {
    case "Currently Reading":
      style = {textAlign: "center",color: "white", backgroundColor: "#007bff", opacity: "0.8"}
      break;
    case "Want To Read":
      style = {textAlign: "center",color: "white", backgroundColor: "#dc3545", opacity: "0.7"}
      break;
    case "Read":
      style = {textAlign: "center",color: "white", backgroundColor: "#6c757d", opacity: "0.7"}
      break;
    default:
    return false;
  }

  return (
    <React.Fragment>
      <h2 className="bookshelf-title" style={style}>{title}</h2>
    </React.Fragment>
  )

}


export default subHeader;
