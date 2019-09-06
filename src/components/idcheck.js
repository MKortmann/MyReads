import React from "react";

function idCheck (props) {

  let shelf = "Not In Library";

  props.storedBooks.forEach((storedBook) => {

    if(storedBook.id === props.book.id) {
      shelf = storedBook.shelf;
    }

  })


    return (
      <React.Fragment>
        <p style={{textAlign: "center", width: 128, marginTop: -20, color: "white", backgroundColor:  "#007bff"}}>{shelf}</p>
      </React.Fragment>
    )

}


export default idCheck;
