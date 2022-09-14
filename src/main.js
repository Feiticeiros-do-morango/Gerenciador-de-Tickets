import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0AaSG9FfTolqAxwLohQv1hBKzkejWJ0w",
  authDomain: "tcc-tickets-60ac1.firebaseapp.com",
  projectId: "tcc-tickets-60ac1",
  storageBucket: "tcc-tickets-60ac1.appspot.com",
  messagingSenderId: "1023662272898",
  appId: "1:1023662272898:web:b58565a7ea5b0988dbdf9b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
