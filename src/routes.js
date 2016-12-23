export default [
    {
        path: '/',
        name: 'index',
        component: require('components/Hello')
    },
    {
        path: '/login',
        name: 'login',
        component: require('components/Login')
    },
    {
        path: '/reg',
        name: 'register',
        component: require('components/Register')
    },
    {
        path: '/forgot_password',
        name: 'forgot_password',
        component: require('components/Forgot_password')
    },
    {
        path: '/email_verify',
        name: 'email_verify',
        component: require('components/Email_verify')
    },
    {
        path: '/*',
        redirect: '/'
    }
]
