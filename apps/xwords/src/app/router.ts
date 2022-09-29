import { createRouter, createWebHistory } from 'vue-router';

import SignUp from '@app/views/SignUp.vue';
import Login from '@app/views/Login.vue';
import FourZeroFour from '@app/views/FourZeroFour.vue';

import UserProfile from '@app/views/UserProfile.vue';
import GamesList from '@app/views/game/GamesList.vue';
import GameWrapper from '@app/views/game/GameWrapper.vue';

import { vxm } from './store';
import { auth } from './services/firebase';

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
      path: '/:displayName',
      name: 'user',
      children: [
        {
          path: '/:displayName/games',
          name: 'games',
          component: GamesList,
        },
        {
          path: '/:displayName/game/:gameId',
          name: 'game',
          component: GameWrapper,
        },
        {
          path: '/:displayName/',
          name: 'userProfile',
          component: UserProfile,
        },
        {
          // path: "*",
          path: '/:displayName/:catchAll(.*)',
          component: FourZeroFour,
        },
      ],
    },
    {
      // path: "*",
      path: '/:catchAll(.*)',
      redirect: '/login',
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (!auth.currentUser) await vxm.user.logOut();

  if (to.name == 'game' && from.name == 'game' && !vxm.activeGame.isLoaded) {
    router.replace({ name: 'games' });
  }
});

router.afterEach((to, _from) => {
  const parent = to.matched.find((record) => record.meta.title);
  const parentTitle = parent ? parent.meta.title : null;
  document.title = to.meta.title || parentTitle || 'xwords';
});

export default router;
