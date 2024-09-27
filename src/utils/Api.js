import axios from "axios";

export const backendBaseUrl = "http://localhost:5000";

export const contect = async (data) => {
  try {
    return await axios.post(
      // "http://localhost:5000/api/createcontact",
      "https://techdriveserver.onrender.com/api/createcontact",
      data
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const getmessage = async (data) => {
  try {
    return await axios.post(
      // "http://localhost:5000/api/getcontact",
      "https://techdriveserver.onrender.com/api/getcontact",
      data
    );
  } catch (error) {
    console.log(error.message);
  }
};
