import axios from "axios";
const baseUrl = "/api/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const putUrl = `${baseUrl}/${id}`;
  const request = axios.put(putUrl, newObject);
  console.log(putUrl);

  return request.then((response) => response.data);
};

export default { getAll, create, update };
