import axios from 'axios'
 

//const BASE_URL = "https://bckendnuevo.onrender.com" 
  //const BASE_URL = "https://bckendnuevo.onrender.com"
 

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // Resto de tu código Axios
  


export const getDataAPI = async (url, token) => {
    const res = await axios.get(`${BASE_URL}/api/${url}`, {
        headers: { Authorization: token }
    });
    return res;
};

export const postDataAPI = async (url, post, token) => {
    const res = await axios.post(`${BASE_URL}/api/${url}`, post, {
        headers: { Authorization: token }
    });
    return res;
};

export const putDataAPI = async (url, post, token) => {
    const res = await axios.put(`${BASE_URL}/api/${url}`, post, {
        headers: { Authorization: token }
    });
    return res;
};

export const patchDataAPI = async (url, post, token) => {
    const res = await axios.patch(`${BASE_URL}/api/${url}`, post, {
        headers: { Authorization: token }
    });
    return res;
};

export const deleteDataAPI = async (url, token) => {
    const res = await axios.delete(`${BASE_URL}/api/${url}`, {
        headers: { Authorization: token }
    });
    return res;
};    

 