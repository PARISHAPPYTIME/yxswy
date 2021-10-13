import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
    private token: string | undefined | null;
    constructor() {}

    setToken(token: string) {
        localStorage.setItem('angular_app_token', token);
        this.token = token
    }

    removeToken() {
        this.token = undefined
    }

    getToken() {
        if (this.token) return this.token
        const tokrn = localStorage.getItem('angular_app_token');
        return tokrn || ''
    }
}