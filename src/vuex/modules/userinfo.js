/*
 * Copyright (c) 2016. Codetector (Yaotian Feng)
 */

import * as types from '../mutation-types'
import api from '../../api/classroomAPI'

const state = {
    name: '',
    email: '',
    id: -1,
    loginHistory: []
}

const mutations = {
    [types.USERINFO_NAME_CHANGE] (state, {name}) {
        state.nane = name
    },
    [types.USERINFO_EMAIL_CHANGE] (state, {email}) {
        state.email = email
    },
    [types.USERINFO_ID_CHANGE] (state, {id}) {
        state.id = id
    },
    [types.USERINFO_LOGIN_HISTORY_CHANGE] (state, {newHistory}) {
        if (state.loginHistory.length > 0) {
            state.loginHistory.splice(0, state.loginHistory.length)
        }
        newHistory.forEach((item) => {
            state.loginHistory.push(item)
        })
    }
}

const actions = {
    updateUserInfo: ({dispatch, commit}, params) => {
        commit(types.USERINFO_ID_CHANGE, {id: params.id})
        commit(types.USERINFO_EMAIL_CHANGE, {email: params.email})
    },
    updateLoginHistory: ({commit}) => {
        api.userinfo.fetchLastLogin().then((resolve) => {
            commit(types.USERINFO_LOGIN_HISTORY_CHANGE, {newHistory: resolve.log})
        }, (reject) => {
            commit(types.USERINFO_LOGIN_HISTORY_CHANGE, {newHistory: []})
        })
    }
}

export default {
    state,
    mutations,
    actions
}
