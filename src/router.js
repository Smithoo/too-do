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
            component: () => import(/* webpackChunkName: 'board' */ './views/pages/board/board.vue'),
            children: [
                {
                    path: 'all',
                    component: () => import(/* webpackChunkName: 'board' */ './views/pages/board/all.vue'),
                },
                {
                    path: ':pipeId',
                    component: () => import(/* webpackChunkName: 'board' */ './views/pages/board/pipe-view.vue'),
                },
            ],
            redirect: '/board/all',
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
