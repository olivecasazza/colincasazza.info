import { createRouter, createWebHistory } from 'vue-router';
import GamesList from '@app/views/GamesList.vue';
import GameWrapper from '@app/views/GameWrapper.vue';
import UserProfile from '@app/views/UserProfile.vue';
import { vxm } from './store';

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
      path: '/user',
      name: 'user',
      component: UserProfile,
    },
    {
      path: '/games',
      name: 'games',
      component: GamesList,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: GameWrapper,
    },
    {
      // path: "*",
      path: '/:catchAll(.*)',
      redirect: '/games',
    },
  ],
});

router.beforeEach((to, _from) => {
  if (to.name == 'game' && !vxm.activeGame.isLoaded) {
    router.replace({ name: 'games' });
  }
});

router.afterEach((to, _from) => {
  const parent = to.matched.find((record) => record.meta.title);
  const parentTitle = parent ? parent.meta.title : null;
  document.title = to.meta.title || parentTitle || 'xwords';
});

export default router;
