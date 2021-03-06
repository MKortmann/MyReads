import React from "react";

function about (props) {

  const searchWords = [  'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball',
    'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes',
    'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
    'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
    'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
    'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King',
    'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money',
    'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production',
    'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction',
    'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate',
    'Virtual Reality', 'Web Development', 'iOS'];

  return (
    <div style={{ textAlign: "center", fontSize: "25px"}}>
      <h2>About</h2>
      <div>
        <p>The Allowed Search Terms are:</p>
        <div style={{margin: "47px"}}>
          {
            searchWords.map((word, index) => {
              return <span key={index} style={{listStyle:"none"}}>{index}- {word} </span>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default about;
