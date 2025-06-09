import axios from "axios";

const localUrl = 'http://127.0.0.1:8080/api';

const axiosInstance = axios.create({
	baseURL: localUrl,
	headers: {
		"Content-Type": "application/json"
	}
});

export default axiosInstance;