import React from "react";

function Authors(props) {

  if(props.authors !== undefined) {
    return props.authors.map((author) => (
      <div style={style}>
         {author}
      </div>
    ))
  } else {
    return (
      <div></div>
    )
  }
  
}

const style = {
  margin: "0",
  fontSize: "12px"
}

export default Authors;
