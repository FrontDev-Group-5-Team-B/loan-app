import axios from "axios";

const baseURI = "https://nodebt-application.onrender.com/api";

const headers = {
  'Content-Type': 'multipart/form-data;',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
};

export const Signup = (data) => {
  console.log(data);
  return axios.post(`${baseURI}/admins/signup`, data);
};

export const Signin = (data) => {
  return axios.post(`${baseURI}/admins/login`, data).then((res) => res.data);
};

export const GetToken = (email) => {
  console.log(email);
  return axios.get(`${baseURI}/password-reset?email=${email}`);
};

export const VerifyToken = ({ email, fiveDigitToken }) => {
  // console.log('hello', email, fiveDigitToken)
  return axios.post(
    `${baseURI}/password-reset?email=${email}`,
    { fiveDigitToken },
    {
      // headers: {
      //   "content-type": "application/json"
      // }
    }
  );
};

export const ResetPassword = ({ data }) => {
  return axios.put(
    `${baseURI}/password-reset/${localStorage.getItem("adminId")}`,
    data
  );
};

export const UpdateProfilePicture = ({ formData }) => {
  return axios.put(
    `${baseURI}/admins/647deebbc24032a06525003d/profile-picture`,
    formData
  );
};

export const DeleteProfilePicture = ({ formData }) => {
  return axios.delete(
    `${baseURI}/admins/647deebbc24032a06525003d/profile-picture`,
    formData
  );
};

export const DownloadProfilePicture = ({}) => {
  return axios.get(
    `${baseURI}/admins/647deebbc24032a06525003d/profile-picture`
  );
};
