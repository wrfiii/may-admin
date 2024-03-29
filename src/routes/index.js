import Layout from '../layout/index.vue'

const routes = [
    { path: '/', component: () => import('../view/login/index.vue') },
    {
        path: '/home',
        component: Layout,
        redirect: 'home-page',
        children: [
            {
                path: '/home-page',
                name: 'home',
                component: () => import('../view/home/index.vue')
            }]
    },
    {
        path: '/article',
        component: Layout,
        redirect: 'article-page',
        children: [
            {
                path: '/article-page',
                component: () => import('../view/article/index.vue'),
                name: 'article'
            }]
    },

    {
        path: '/edit',
        component: Layout,
        redirect: 'edit-page',
        children: [
            {
                path: '/edit-page',
                component: () => import('../view/edit/index.vue'),
                name: 'edit'
            }]
    },
]


export default routes