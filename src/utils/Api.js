import axios from "axios";

export const backendBaseUrl = "http://localhost:5000";

export const contect = async (data) => {
  try {
    return await axios.post(
      "http://localhost:5000/api/createcontact",
      //   "https://milanbackend-7gvf.onrender.com/api/register",
      data
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const getmessage = async (data) => {
  try {
    return await axios.post(
      "http://localhost:5000/api/getcontact",
      //   "https://milanbackend-7gvf.onrender.com/api/register",
      data
    );
  } catch (error) {
    console.log(error.message);
  }
};
