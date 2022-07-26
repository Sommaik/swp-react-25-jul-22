import axios from "axios";

const httpApi = axios.create();
httpApi.defaults.baseURL = "https://jsonplaceholder.typicode.com";
httpApi.defaults.responseEncoding = "application/json";

export default httpApi;