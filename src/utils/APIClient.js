import axios from 'axios'

const { NEXT_PUBLIC_API_URL } = process.env

const APIClient = (authorization = '') => {
  const defaultOption = {
    headers: {
      authorization
    }
  }

  return {
    get: (url, option = {}) => axios.get(`${NEXT_PUBLIC_API_URL}${url}`, { ...defaultOption, ...option}),
    post: (url, data, option = {}) => axios.post(`${NEXT_PUBLIC_API_URL}${url}`, data, { ...defaultOption, ...option}),
    put: (url, data, option = {}) => axios.put(`${NEXT_PUBLIC_API_URL}${url}`, data, { ...defaultOption, ...option}),
    delete: (url, option = {}) => axios.delete(`${NEXT_PUBLIC_API_URL}${url}`, { ...defaultOption, ...option}),
  }
}

export default APIClient