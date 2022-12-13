import axios from "axios";

const API_URL = "http://localhost:3002/users";

export const addUser = async (data) => {
  //post() is add the data it need two params 1st url 2nd body
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error while calling addUser Api ", error.message);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(API_URL);
  } catch (error) {
    console.log("Error while calling GetUsers Api", error.message);
  }
};

export const getUser = async (data) => {
  try {
    return await axios.get(`${API_URL}/${data}`);
  } catch (error) {
    console.log("Error while calling GetUsers Api", error.message);
  }
};

export const editUser = async (data, id) => {
  try {
    return await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.log("Error while calling GetUsers Api", error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.log("Error while calling GetUsers Api", error.message);
  }
};
