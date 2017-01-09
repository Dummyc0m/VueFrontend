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
        path: '/i_courses',
        name: 'user_courses',
        component: require('pages/UserCourse/UserCourses')
    },
    {
        path: '/creator_studio',
        name: 'creator_studio',
        component: require('pages/Teacher/CreatorStudio'),
        children: [
            {
                name: 'dashboard',
                path: 'dashboard',
                component: require('components/CreatorStudio/Dashboard')
            },
            {
                name: 'my_course',
                path: 'my_course',
                component: require('components/CreatorStudio/MyCourse')
            },
            {
                name: 'edit_course',
                path: 'edit_course/:id',
                component: require('components/CreatorStudio/EditCourse')
            },
            {
                name: 'my_video',
                path: 'my_video',
                component: require('components/CreatorStudio/MyVideo')
            },
            {
                name: 'edit_test',
                path: 'edit_test/:id',
                component: require('components/CreatorStudio/EditTest')
            },
            {
                path: '/*',
                redirect: 'dashboard'
            }
        ]
    },
    {
        path: '/*',
        redirect: '/'
    }
]
