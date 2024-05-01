import axios from "axios";

const URL = import.meta.env.VITE_DEPLOYED || import.meta.env.VITE_BASE;

const handleResponse = (response) => {
  console.log("Response:---->hello", response);
  const  data  = response.data;
  console.log("Data:", data);
  if ( data ) {
    return data
  } else {
    console.error("Unexpected response format!!!:", response.data);
    throw new Error("Unexpected response format ");
  }
};

const handleError = (error) => {
  console.error(error);
  throw error;
};

const getAllItems = (endpoint) => {
  return axios.get(`${URL}/${endpoint}`).then(handleResponse).catch(handleError);
};

const getItem = (endpoint, id) => {
  return axios.get(`${URL}/${endpoint}/${id}`).then(handleResponse).catch(handleError);
};

const addItem = (endpoint, data) => {
  return axios.post(`${URL}/${endpoint}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResponse).catch(handleError);
};

const updateItem = (endpoint, id, data) => {
  return axios.put(`${URL}/${endpoint}/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResponse).catch(handleError);
};

const deleteItem = (endpoint, id) => {
  return axios.delete(`${URL}/${endpoint}/${id}`).then((response) => {
    if (response.data.success) {
      return true;
    } else {
      console.error("Unexpected response format:", response.data);
      throw new Error("Unexpected response format");
    }
  }).catch(handleError);
};

export { getAllItems, getItem, addItem, updateItem, deleteItem };
