import React from "react";
import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const promise = axios.get(baseUrl);
  const promiseData = promise.then((response) => response.data);

  return promiseData;
};

export default { getAll };
