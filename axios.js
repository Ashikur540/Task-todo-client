import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:5000/api/v1",
});


instance.interceptors.request.use(
    (config) => {
        // Add common headers to every request
        config.headers["content-type"] = "application/json";
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default instance;