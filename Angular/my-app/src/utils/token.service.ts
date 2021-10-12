import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
    private token: string | undefined | null;
    constructor() {}

    setToken(token: string) {
        this.token = token
    }

    removeToken() {
        this.token = undefined
    }

    getToken() {
        return this.token
    }
}