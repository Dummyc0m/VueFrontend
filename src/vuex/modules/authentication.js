/*
 * Copyright (c) 2016. Codetector (Yaotian Feng)
 */

import Vue from 'vue'
import * as types from '../mutation-types'
import api from '../../api/classroomAPI'

const state = {
    token: '',
    username: '',
    authenticated: false,
    mfaAuthed: false,
    error: false,
    permissions: []
}

const mutations = {
    [types.AUTHENTICATION] (state, {token}) {
        state.token = token
        state.authenticated = true
        state.mfaAuthed = false
    },
    [types.AUTHENTICATION_FAILURE] (state) {
        state.authenticated = false
        state.mfaAuthed = false
    },
    [types.AUTHENTICATION_ERROR] (state, {error}) {
        state.error = error
    },
    [types.AUTHENTICATION_VERIFICATION_SUCCESS] () {
        state.mfaAuthed = true
    },
    [types.AUTHENTICATION_REQUIRE_MFA] (state) {
        state.mfaAuthed = false
    },
    [types.AUTHENTICATION_MFA_ERROR] (state) {
        state.mfaAuthed = false
    },
    [types.AUTHENTICATION_MFA_PASS] (state) {
        state.mfaAuthed = true
    },
    [types.AUTHENTICATION_PERMISSIONS_CHANGE] (state, {permissions}) {
        state.permissions = permissions
    }
}

const actions = {
    authenticate: ({commit, dispatch}, {username, password, callback}) => {
        api.auth.authenticate(username, password).then((json) => {
            Vue.http.headers.common['Authorization'] = json.token
            commit(types.AUTHENTICATION, {token: json.token})
            if (!json.requireMFA) {
                commit(types.AUTHENTICATION_MFA_PASS)
                dispatch('verifyToken')
            } else {
                commit(types.AUTHENTICATION_REQUIRE_MFA)
            }
            callback(true)
        }, (response) => {
            commit(types.AUTHENTICATION_ERROR, {error: true})
            commit(types.AUTHENTICATION_FAILURE)
            callback(false)
        })
    },
    fetchPermission: ({commit}) => {
        api.auth.fetchPermission().then((data) => {
            commit(types.AUTHENTICATION_PERMISSIONS_CHANGE, data)
        })
    },
    verifyToken: ({state, commit, dispatch}, extra = {simple: false}) => {
        api.auth.verify().then((success) => {
            if (success.isMfaAuthed) {
                if (extra.simple !== null && (!extra.simple)) {
                    if (!state.mfaAuthed) {
                        commit(types.AUTHENTICATION_MFA_PASS)
                    }
                    commit(types.AUTHENTICATION_VERIFICATION_SUCCESS)
                    dispatch('updateUserInfo', success.userinfo)
                }
                dispatch('fetchPermission')
            } else {
                commit(types.AUTHENTICATION_REQUIRE_MFA)
            }
        }, (response) => {
            commit(types.AUTHENTICATION_FAILURE)
        })
    },
    signOut: ({commit}) => {
        api.auth.signOut().then(() => {
            delete Vue.http.headers.common['Authorization']
            commit(types.AUTHENTICATION_FAILURE)
        })
    },
    setError ({commit}, payload) {
        commit(types.AUTHENTICATION_ERROR, payload)
    },
    verifyMFA ({commit, dispatch}, {code, callback}) {
        api.auth.verifyMFA(code).then((resolve) => {
            if (resolve.mfaResult) {
                commit(types.AUTHENTICATION_MFA_PASS)
                dispatch('verifyToken')
                callback(true)
            } else {
                commit(types.AUTHENTICATION_MFA_ERROR)
                callback(false)
            }
        }, (reject) => {
            commit(types.AUTHENTICATION_MFA_ERROR)
            callback(false)
        })
    }
}

export default {
    state,
    mutations,
    actions
}
