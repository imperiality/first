import axios from 'axios';

const ajax = axios.create({
	// baseURL: '/api',
	timeout: 5000,
});
ajax.interceptors.request.use((config) => config);

ajax.interceptors.response.use(
	(res) => {
		return res.data;
	},
	(err) => {
		console.log(err);
		return Promise.reject(err);
	}
);
export default ajax;
