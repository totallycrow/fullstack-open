import axios from "axios";
import React from "react";

export default function Persons({ filter, persons, handleDelete }) {
  const recordsToShow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toUpperCase().includes(filter.toUpperCase())
        );

  return (
    <div>
      <ul>
        {recordsToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
