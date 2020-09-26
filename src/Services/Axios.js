import axios from "axios";

// export default axios.create({
//   baseURL: "https://reqaid.com/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

const mainAxios = axios.create({
    baseURL: 'https://reqaid.com/api',
    headers: {
        "Content-type": "application/json"
        }
});

const customAxios = axios.create({
    baseURL: 'https://dev.farizdotid.com/api/daerahindonesia'
});


export {
  mainAxios,
  customAxios
};