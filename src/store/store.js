import { makeAutoObservable } from "mobx"
// import AuthService from "../service/AuthService"
import axios from "axios";
import api from "../http"

const API_URL = 'http://localhost:3000/api'

export default class Store {
    user = {}
    isAuth = false
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    setLoading(bool) {
        this.isLoading = bool
    }

    async setUserInfo(email, name, date, city, password) {
        try {
            const response = await axios.post(`${API_URL}/setUserInfo`, { email: email, name: name, date: date, city: city, password: password })
            console.log(response)
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async getUserInfo(email) {
        try {
            const params = {
                email: email,
            };
            const response = await api.get(`${API_URL}/getUserInfo`, { params });
            console.log(response);
            return response;

        } catch (error) {
            console.log(error)
            return error;
        }
    }

    async reg(email, password) {
        try {
            const response = await axios.post(`${API_URL}/registration`, { email: email, password: password })
            console.log(response)

            this.setAuth(true)
            this.setUser(response.data.user)
            var result = response;
            return result;

        } catch (error) {
            console.log(error)
            return error;
        }
    }

    async login(email, password) {
        try {

            const response = await axios.post(`${API_URL}/login`, { email: email, password: password })
            console.log(response)

            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            localStorage.setItem('email', response.data.user.email)
            localStorage.setItem('id', response.data.user.id)
            localStorage.setItem('isActivated', response.data.user.isActivated)

            this.setAuth(true)
            this.setUser(response.data.user)
            var result = response;
            return result;

        } catch (error) {
            console.log(error)
            return error;
        }
    }

    async checkAuth() {
        this.setLoading(true)
        try {
            // const response = await AuthService.refresh()
            // var token = localStorage.getItem('refreshToken')
            // const response = await axios.post(`${API_URL}/refresh`, { refreshToken: token })
            const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
            localStorage.setItem('accessToken', response.data.accessToken)
            // localStorage.setItem('refreshToken', response.data.refreshToken)

            this.setAuth(true)
            this.setUser(response.data.user)
            console.log(response)
        } catch (error) {
            console.log(error)
        } finally {
            this.setLoading(false)
        }
    }

    async logout() {
        try {
            // const response = await AuthService.logout()
            const response = await axios.post(`${API_URL}/logout`);
            localStorage.clear()
            this.setAuth(false)
            this.setUser({})
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }
}