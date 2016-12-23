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
                    resolve(json.token)
                }, (failed) => {
                    reject(failed)
                })
            }, (response) => {
                reject(response)
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
