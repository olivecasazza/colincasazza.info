import { mount } from '@cypress/vue';
import i18n from '@app/i18n';

import NotebookWrapper from './NotebookWrapper.vue';

const t = i18n.global.t;

it('Mounts NotebookWrapper', () => {
  const titleKey = 'name';
  mount(NotebookWrapper, { props: { titleKey }, global: { plugins: [i18n] } })
    .get('.notebookWrapper')
    .should('exist');
});
