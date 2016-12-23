/*
 * Copyright (c) 2016. Codetector (Yaotian Feng)
 */

import * as types from '../mutation-types'
// import api from '../../api/classroomAPI'

const state = {
    name: '',
    username: ''
}

const mutations = {
    [types.USERINFO_NAME_CHANGE] (state, {name}) {
        this.nane = name
    },
    [types.USERINFO_USERNAME_CHANGE] (state, {username}) {
        this.username = username
    }
}

const actions = {
    updateUserInfo: ({dispatch, commit}) => {

    }
}

export default {
    state,
    mutations,
    actions
}
