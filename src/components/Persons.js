import axios from "axios";
import React from "react";

export default function Persons({ filter, persons }) {
  const recordsToShow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toUpperCase().includes(filter.toUpperCase())
        );

  const handleDelete = (id) => {

    axios.delete(`http://localhost:3001/persons/${id}`)
    

    

  }
  return (
    <div>
      <ul>
        {recordsToShow.map((person) => (
          <li key={person.name}>
          {person.name} {person.number} <button onClick={handleDelete}>Delete</button>
        </li>
          
        ))}
      </ul>
    </div>
  );
}
