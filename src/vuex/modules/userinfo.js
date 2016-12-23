/*
 * Copyright (c) 2016. Codetector (Yaotian Feng)
 */

import * as types from '../mutation-types'
// import api from '../../api/classroomAPI'

const state = {
    name: '',
    email: '',
    id: -1
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
    }
}

const actions = {
    updateUserInfo: ({dispatch, commit}, params) => {
        commit(types.USERINFO_ID_CHANGE, {id: params.id})
        commit(types.USERINFO_EMAIL_CHANGE, {email: params.email})
    }
}

export default {
    state,
    mutations,
    actions
}
