import React from "react";

export default function Persons({ filter, persons }) {
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
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
}
