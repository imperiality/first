import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
import * as API from './api'
Vue.prototype.$API = API;
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

import ajax from './api/ajax'
ajax.defaults.baseURL = '';
Vue.prototype.$http=ajax;
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
