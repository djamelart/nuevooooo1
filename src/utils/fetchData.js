import axios from 'axios';

export const getDataAPI = async (url, token) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await axios.get(`${apiUrl}/api/${url}`, {
        headers: { Authorization: token }
    });
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await axios.post(`${apiUrl}/api/${url}`, post, {
        headers: { Authorization: token }
    });
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await axios.put(`${apiUrl}/api/${url}`, post, {
        headers: { Authorization: token }
    });
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await axios.patch(`${apiUrl}/api/${url}`, post, {
        headers: { Authorization: token }
    });
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await axios.delete(`${apiUrl}/api/${url}`, {
        headers: { Authorization: token }
    });
    return res;
}
