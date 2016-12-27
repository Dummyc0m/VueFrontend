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
    error: false
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
    },
    [types.AUTHENTICATION_REQUIRE_MFA] (state) {
        state.mfaAuthed = false
    },
    [types.AUTHENTICATION_MFA_ERROR] (state) {
        state.mfaAuthed = false
    },
    [types.AUTHENTICATION_MFA_PASS] (state) {
        state.mfaAuthed = true
    }
}

const actions = {
    authenticate: ({commit, dispatch}, {username, password, callback}) => {
        api.auth.authenticate(username, password).then((json) => {
            Vue.http.headers.common['Authorization'] = json.token
            commit(types.AUTHENTICATION, {token: token})
            if (!json.requireMFA) {
                commit(types.AUTHENTICATION_MFA_PASS)
            } else {
                commit(types.AUTHENTICATION_REQUIRE_MFA)
            }
            dispatch('verifyToken')
            callback(true)
        }, (response) => {
            commit(types.AUTHENTICATION_ERROR, {error: true})
            commit(types.AUTHENTICATION_FAILURE)
            callback(false)
        })
    },
    verifyToken: ({commit, dispatch}) => {
        api.auth.verify().then((success) => {
            if (success.isMfaAuthed) {
                commit(types.AUTHENTICATION_VERIFICATION_SUCCESS)
                dispatch('updateUserInfo', success.userinfo)
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
    }
}

export default {
    state,
    mutations,
    actions
}
