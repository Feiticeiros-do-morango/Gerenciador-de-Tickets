import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import PrimeVue from 'primevue/config';

Vue.use(PrimeVue, {ripple: true});



new Vue({
	router,
	render: h => h(App),
}).$mount('#app')