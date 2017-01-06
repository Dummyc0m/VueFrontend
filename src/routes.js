export default [
    {
        path: '/',
        name: 'index',
        component: require('components/Hello')
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: require('pages/UserAuthentication/SignIn')
    },
    {
        path: '/mfa',
        name: 'mfa',
        component: require('pages/UserAuthentication/MFA')
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: require('pages/UserAuthentication/SignUp')
    },
    {
        path: '/forgot_password',
        name: 'forgot_password',
        component: require('pages/UserAuthentication/Forgot_password')
    },
    {
        path: '/email_verify',
        name: 'email_verify',
        component: require('pages/UserAuthentication/Email_verify')
    },
    {
        path: '/i',
        name: 'user_center',
        component: require('pages/UserCenter/UserCenter')
    },
    {
        path: '/video',
        name: 'video',
        component: require('components/Video')
    },
    {
        path: '/my_class',
        name: 'user_class',
        component: require('pages/UserClass/UserClassList')
    },
    {
        path: '/*',
        redirect: '/'
    }
]
