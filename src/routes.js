export default [
    {
        path: '/',
        name: 'index',
        component: require('components/Hello')
    },
    {
        path: '/*',
        redirect: '/'
    }
]
