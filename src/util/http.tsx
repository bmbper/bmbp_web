import axios from "axios";
// Create an instance of axios
const HttpUtil = axios.create({
	baseURL: "/bmbp-api", // Replace with your base URL
	timeout: 10000, // Request timeout
});

// 添加请求拦截器
HttpUtil.interceptors.request.use(
	function (config: any) {
		config.baseURL = "/bmbp-api";
		// 在提取Token
		if (!config.headers) {
			config.headers = {};
		}
		if (!config.headers["Content-Type"]) {
			config.headers["Content-Type"] = "application/json";
		}
		const token = window.localStorage.getItem("bmbpToken");
		config.headers["Authorization"] = token;
		return config;
	},
	function (error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
HttpUtil.interceptors.response.use(
	function (response: any) {
		let data = response.data;
		if (data.error) {
			return {
				code: data.error.code,
				msg: data.error.name,
				data: response.config.url,
			};
		} else {
			return data;
		}
	},
	function (error) {
		let errJson = error.toJSON();
		return {
			code: errJson.status,
			msg: errJson.message,
			data: errJson.code,
		};
	}
);

export default HttpUtil;
