import { createRouter, createWebHistory } from 'vue-router';
import GamesList from '@app/views/GamesList.vue';
import GameWrapper from '@app/views/GameWrapper.vue';
import UserProfile from '@app/views/UserProfile.vue';

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
      name: 'UserProfile',
      component: UserProfile,
    },
    {
      path: '/games',
      name: 'GamesList',
      component: GamesList,
    },
    {
      path: '/game/:id',
      name: 'GameWrapper',
      component: GameWrapper,
    },
  ],
});

router.afterEach((to, _from) => {
  const parent = to.matched.find((record) => record.meta.title);
  const parentTitle = parent ? parent.meta.title : null;
  document.title = to.meta.title || parentTitle || 'xwords';
});

export default router;
