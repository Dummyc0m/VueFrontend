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
        path: '/mfa',
        name: 'mfa',
        component: require('components/Mfa')
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: require('components/SignUp')
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
        path: '/video',
        name: 'video',
        component: require('components/Video')
    },
    {
        path: '/*',
        redirect: '/'
    }
]
