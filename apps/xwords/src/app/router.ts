import { createRouter, createWebHistory } from 'vue-router';

import FourZeroFour from '@app/views/FourZeroFour.vue';
import Login from '@app/views/Login.vue';
import SignUp from '@app/views/SignUp.vue';

import GamesList from '@app/views/GamesList.vue';
import UserProfile from '@app/views/UserProfile.vue';

import GameWrapper from '@app/views/game/GameWrapper.vue';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
  }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve({ el: to.hash });
        }, 500);
      });
    }
    if (savedPosition) {
      return savedPosition;
    }
    if (to.meta.noScroll && from.meta.noScroll) {
      return {};
    }
    return { top: 0 };
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/:displayName/games',
      name: 'games',
      meta: { requiresAuth: true },
      component: GamesList,
    },
    {
      path: '/:displayName/game/:gameId',
      name: 'game',
      component: GameWrapper,
      meta: { requiresAuth: true },
    },
    {
      path: '/:displayName/',
      name: 'userProfile',
      component: UserProfile,
      meta: { requiresAuth: true },
    },
    {
      // path: "*",
      path: '/:displayName/:catchAll(.*)',
      component: FourZeroFour,
      meta: { requiresAuth: true },
    },
    {
      // path: "*",
      path: '/:catchAll(.*)',
      redirect: '/login',
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to, _from) => {
  const parent = to.matched.find((record) => record.meta.title);
  const parentTitle = parent ? parent.meta.title : null;
  document.title = to.meta.title || parentTitle || 'xwords';
});

export default router;
