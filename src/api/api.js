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

    getCurrentProfile(currentUserId) {
        console.warn('Obsolete method.Please profileAPI object')
        return profileAPI.getCurrentProfile(currentUserId)
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getCurrentProfile(currentUserId) {
        return instance.get(`profile/${currentUserId}`).then(response => {
            return response.data
        });
    },
    getUserStatus(currentUserId) {
        return instance.get(`profile/status/${currentUserId}`)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`,{status: status})
    }
}
