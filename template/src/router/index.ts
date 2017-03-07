import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Hello from "src/components/hello";

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});

