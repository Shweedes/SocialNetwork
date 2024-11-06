import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "849c7bb0-7d66-419e-a5ef-076a24f88b3d"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
       return instance.delete(`follow/${userId}`)
    },

    getAuthData() {
        return instance.get(`auth/me`)
    },

    getCurrentProfile(currentUserId) {
        return instance.get(`profile/` + currentUserId).then(response => {
            return response.data
        });
    }
}