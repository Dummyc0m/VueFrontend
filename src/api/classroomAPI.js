/*
 * Copyright (c) 2016. Codetector (Yaotian Feng)
 */

import {AuthAPI} from './AuthAPI'
import {UserinfoAPI} from './UserinfoAPI'
export default {
    auth: new AuthAPI(),
    userinfo: new UserinfoAPI()
}
