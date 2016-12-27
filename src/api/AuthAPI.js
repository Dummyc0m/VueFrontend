/*
 * Copyright (c) 2016. Codetector (Yaotian Feng)
 */

import Vue from 'vue'
import md5 from 'md5'

export class AuthAPI {
    /**
     * Authenticates with the server
     * @param username
     * @param password
     * @returns {Promise} resolve -> token, reject -> response
     */
    authenticate (username, password) {
        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', md5(password))
        return new Promise((resolve, reject) => {
            Vue.http.post('auth', formData).then((response) => {
                response.json().then((json) => {
                    resolve({token: json.token, requireMFA: json.requireMFA})
                }, (failed) => {
                    reject(failed)
                })
            }, (response) => {
                reject(response)
            })
        })
    }

    verifyMFA (code) {
        const formData = new FormData()
        formData.append('code', code)
        return new Promise((resolve, reject) => {
            Vue.http.post('auth/mfa', formData).then((valid) => {
                valid.json().then((json) => {
                    resolve(json)
                }, (f) => {
                    reject(f)
                })
            }, (failed) => {
                reject(failed)
            })
        })
    }

    register (email, realname, password) {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', md5(password))
        formData.append('fullName', realname)
        return new Promise((resolve, reject) => {
            Vue.http.post('register', formData).then((response) => {
                resolve(response)
            }, (failed) => {
                reject(failed)
            })
        })
    }

    signOut () {
        return new Promise((resolve, reject) => {
            Vue.http.get('auth/signOut').then((d) => {
                resolve()
            }, (d) => {
                resolve()
            })
        })
    }

    verify () {
        return new Promise((resolve, reject) => {
            Vue.http.post('auth/verify', new FormData()).then((response) => {
                response.json().then((json) => {
                    resolve(json)
                }, (failed) => {
                    reject(failed)
                })
            }, (failed) => {
                reject(failed)
            })
        })
    }

    changePassword (oldPassword, newPassword) {
        return new Promise((resolve, reject) => {
            const data = new FormData()
            data.append('oldpass', md5(oldPassword))
            data.append('newpass', md5(newPassword))
            Vue.http.post('auth/changepassword', data).then((response) => {
                resolve(response)
            }, (response) => {
                reject(response)
            })
        })
    }
}
