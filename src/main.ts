import Vue from 'vue';
import * as firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebaseConfig from '@/firebase/config';

firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
