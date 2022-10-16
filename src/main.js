import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import PrimeVue from 'primevue/config';
import ToastService from "primevue/toastservice";

Vue.use(PrimeVue,{ ripple: true });
Vue.use(ToastService)




new Vue({
	router,
	render: h => h(App),
}).$mount('#app')