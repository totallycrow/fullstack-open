import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from 'axios'; 

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Fetch data
  useEffect(() => {

    axios.get("http://localhost:3001/persons").then(response => {
      setPersons(response.data)
    })


  }, [])

  // INPUT HANDLERS
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const onFilterChange = (event) => setFilter(event.target.value);

  // *****************************

  // Form Handler
  const addRecord = (event) => {
    event.preventDefault();

    const newRecord = { name: newName, number: newNumber };

    persons.find((element) => element.name === newRecord.name)
      ? alert(`${newRecord.name} is already in the phonebook`)
      : setPersons(persons.concat(newRecord));

    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilterChange={onFilterChange} />

      <h2>Add New</h2>
      <PersonForm
        addRecord={addRecord}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers (Test From Remote)</h2>
      <Persons filter={filter} persons={persons} />
    </div>
  );
};

export default App;
