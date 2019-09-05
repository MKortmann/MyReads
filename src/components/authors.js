import React from "react";

function Authors(props) {

  return props.authors.map((author) => (
    <div style={style}>
       {author}
    </div>
  ))



}

const style = {
  margin: "0",
  fontSize: "12px"
}

export default Authors;
