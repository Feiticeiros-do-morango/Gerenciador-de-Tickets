import Vue from 'vue'
import Router from 'vue-router'

import LoginView from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Dashboard from '../views/Dashboard.vue'
import MyTickets from '../views/MyTickets.vue'
import TicketView from '../views/TicketView.vue'
import PasswordRecovery from '../views/PasswordRecovery.vue'
import Land from '../views/Land.vue'



Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    { path: "/registration", name: "registration", component: Registration },
    { path: "/login", name: "login", component: LoginView },
    { path: "/dashboard", name: "dashboard", component: Dashboard },
    { path: "/myTickets", component: MyTickets },
    { path: "/ticketView/:id", component: TicketView },
    { path: "/recovery", name: "recovery", component: PasswordRecovery },
    { path: "/", name: "land", component: Land },
  ],
});
router.beforeEach((to, from, next) => {
  if (
    to.name !== "land" &&
    to.name !== "login" &&
    to.name !== "registration" &&
    to.name !== "recovery" &&
    !localStorage.getItem("token")
  )
    next({ name: "login" });
  else next();
});

export default router;
