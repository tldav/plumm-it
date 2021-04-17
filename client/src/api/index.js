import axios from "axios";

const api = {
    get: route => axios.get(`axios.get/${route}`),
    post: (route, data) => axios.post(`api/${route}`, data)
};

export async function getThreads() {
    return await api.get("threads");
}