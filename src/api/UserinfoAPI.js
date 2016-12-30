/**
 * Created by Codetector on 2016/12/30.
 */

import Vue from 'vue'

export class UserinfoAPI {
    fetchLastLogin () {
        return new Promise((resolve, reject) => {
            Vue.http.get('usercenter/authlog').then((response) => {
                response.json().then((json) => {
                    resolve(json)
                }, (failed) => {
                    reject(failed)
                })
            }, (response) => {
                reject(response)
            })
        })
    }
}
