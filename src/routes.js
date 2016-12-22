export default [
    {
        path: '/',
        name: 'index',
        component: require('components/Hello')
    },
    {
        path: '/test',
        name: 'test',
        component: require('components/Hello')
    },
    {
        path: '/*',
        redirect: '/'
    }
]
