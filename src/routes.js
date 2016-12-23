export default [
    {
        path: '/',
        name: 'index',
        component: require('components/Hello')
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: require('components/SignIn')
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
        path: '/i',
        name: 'user_center',
        component: require('components/UserCenter')
    },
    {
        path: '/*',
        redirect: '/'
    }
]
