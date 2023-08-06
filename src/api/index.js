import axios from "axios";

axios.interceptors.request.use((config) => {
  return config;
})

axios.interceptors.response.use((config) => {
  return new Promise((resolve, reject) => {
    if (config.data.status === 1000) {
      resolve(config.data);
    } else {
      reject(config.data)
    }
  });
})

export const axiosGet = (url, params) => {
  return axios({
    method: 'get',
    url: url,
    params: params
  })
}

export const axiosPost = (url, data) => {
  return axios({
    method: 'post',
    url: url,
    data: data
  })
}

