import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld';

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VCard,
  VExpansionPanel,
  VMenu,
  VDialog,
} from 'vuetify';

const localVue = createLocalVue()
Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCard,
    VExpansionPanel,
    VMenu,
    VDialog,
  },
  theme: {
    primary: '#424242',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
});

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {

    let wrapper = mount(HelloWorld, {
      localVue,
    })

    expect(wrapper.find('img').exists()).toBe(true);
  });
});
