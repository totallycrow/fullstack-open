import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import axios from 'axios'; 
import recordsServices from "./services/records"

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  // Fetch data
  useEffect(() => {

    recordsServices.getAll().then(response => setPersons(response))

    // axios.get("http://localhost:3001/persons").then(response => {
    //   setPersons(response.data)
    // })

    


  }, [])

  console.log(recordsServices.getAll())

  // INPUT HANDLERS
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const onFilterChange = (event) => setFilter(event.target.value);

  

  const handleDelete = (id) => {

    if(window.confirm("u sure?")) {

    const url = `http://localhost:3001/persons/${id}`
    
    const promise = axios.delete(url)
    promise.then(setPersons(persons.filter(person => person.id !== id)))
  }
    

  }

  // *****************************

  // Form Handler
  const addRecord = (event) => {
    event.preventDefault();

    const newRecord = { name: newName, number: newNumber };

    const updateRecord = (record) => {
      if(window.confirm(`${newRecord.name} is already in the phonebook. Update?`)) {
        axios.put(`http://localhost:3001/persons/${record.id}`, {...record, number: newNumber} ).then(setPersons(persons.map(person => person.id !== record.id ? person : newRecord)))
      }
    }

    const checkedRecord = persons.find((element) => element.name === newRecord.name)


      checkedRecord ? updateRecord(checkedRecord)
      : axios
      .post('http://localhost:3001/persons', newRecord)
      .then(response => setPersons(persons.concat(response.data)))

      
      // setPersons(persons.concat(newRecord));

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
      <Persons filter={filter} persons={persons} handleDelete={handleDelete}/>
    </div>
  );
};

export default App;
