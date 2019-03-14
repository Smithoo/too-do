import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/pages/home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/board',
            redirect: '/board/all',
        },
        {
            path: '/board/:colomnId',
            component: () => import(/* webpackChunkName: 'board' */ './views/pages/board.vue'),
        },
        {
            path: '/terms',
            component: () => import(/* webpackChunkName: 'terms' */ './views/pages/terms.vue'),
        },
        {
            // for 404 not found page
            path: '*',
            component: () => import(/* webpackChunkName: 'not-found' */ './views/pages/not-found.vue'),
        },
    ],
});
