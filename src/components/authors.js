import React from "react";
const uuidv4 = require('uuid/v4');

function Authors(props) {

  if(props.authors !== undefined) {
    return props.authors.map((author) => (
      <div key={uuidv4()} style={style}>
         {author}
      </div>
    ))
  } else {
    return (
      <div key={uuidv4()}></div>
    )
  }

}

const style = {
  margin: "0",
  fontSize: "12px"
}

export default Authors;
