import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    "API-KEY": '"API-KEY": "8b23b97b-0e27-48dc-b457-d1766865c10d"'
});
export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
    })
        .then(response => {
            return response.data;
        })

}
