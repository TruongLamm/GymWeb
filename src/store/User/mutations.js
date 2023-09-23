// import baseURL from "../../utils/API_URL";
// import axios from "axios";

// async function callApiLogin(email, password) {
//   const url = baseURL + "api/login";
//   const body = {
//     username: email,
//     password: password,
//   };

//   const headers = {
//     Accept: "*/*",
//     "Content-Type": "application/json",
//   };

//   try {
//     const response = await axios.post(url, body, { headers });
//     token = response.data.token;
//     loginErr = 0;
//     return true;
//   } catch (error) {
//     loginErr++;
//     console.error(error);
//     return true;
//   }
// }

export default {
  async login(state) {
    state.username = "";
  },
};
