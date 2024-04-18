import api from "../http";

export default class AuthService{
    static async login(email, password){
        return api.post('/login', {email: email, password: password})
    }

    static async registration(email, name ,password){
        return api.post('/registration', {email: email, name: name ,password: password})
    }

    static async logout(){
        return api.post('/logout')
    }
    static async refresh(){
        return api.get('http://localhost:3000/api/refresh')
    }
}