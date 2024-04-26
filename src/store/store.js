import { makeAutoObservable } from "mobx"
import AuthService from "../service/AuthService"
import axios from "axios";

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

    async reg(email, name, password) {
        try {
            //const response = await AuthService.login(username, password)
            const response = await axios.post(`${API_URL}/registration`, { email: email, name: name, password: password })
            console.log(response)
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            localStorage.setItem('email', response.data.user.email)
            localStorage.setItem('name', response.data.user.name)
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

    async login(email, password) {
        try {
            //const response = await AuthService.login(username, password)
            const response = await axios.post(`${API_URL}/login`, { email: email, password: password })
            console.log(response)
            
            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            localStorage.setItem('email', response.data.user.email)
            localStorage.setItem('name', response.data.user.name)
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
            const response = await AuthService.refresh()

            localStorage.setItem('accessToken', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)

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
            const response = await AuthService.logout()

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