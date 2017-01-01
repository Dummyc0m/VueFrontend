/*
 * Copyright (c) 2016. Codetector (Yaotian Feng)
 */

import * as types from '../mutation-types'
import api from '../../api/classroomAPI'

const state = {
    phone: '',
    name: '',
    email: '',
    id: -1,
    mfaEnabled: null,
    loginHistory: []
}

const mutations = {
    [types.USERINFO_PHONE_CHANGE] (state, {phone}) {
        state.phone = phone
    },
    [types.USERINFO_NAME_CHANGE] (state, {name}) {
        state.nane = name
    },
    [types.USERINFO_EMAIL_CHANGE] (state, {email}) {
        state.email = email
    },
    [types.USERINFO_ID_CHANGE] (state, {id}) {
        state.id = id
    },
    [types.USERINFO_USER_MFA_STATUS_CHANGE] (state, {newStatus}) {
        state.mfaEnabled = newStatus
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
        dispatch('updateMFAStatus')
        dispatch('updateUserinfoDetail')
    },
    updateLoginHistory: ({commit}) => {
        api.userinfo.fetchLastLogin().then((resolve) => {
            commit(types.USERINFO_LOGIN_HISTORY_CHANGE, {newHistory: resolve.log})
        }, (reject) => {
            commit(types.USERINFO_LOGIN_HISTORY_CHANGE, {newHistory: []})
        })
    },
    updateMFAStatus: ({commit}) => {
        api.userinfo.fetchMFAStatus().then((resolve) => {
            commit(types.USERINFO_USER_MFA_STATUS_CHANGE, {newStatus: resolve})
        })
    }
}

export default {
    state,
    mutations,
    actions
}
