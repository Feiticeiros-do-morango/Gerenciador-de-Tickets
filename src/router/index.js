import Vue from 'vue'
import Router from 'vue-router'

import LoginView from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Dashboard from '../views/Dashboard.vue'
import MyTickets from '../views/MyTickets.vue'
import Teams from '../views/Teams.vue'
import Projects from '../views/Projects.vue'
import Statistics from '../views/Statistics.vue'
import Settings from '../views/Settings.vue'
import TicketView from '../views/TicketView.vue'
import PasswordRecovery from '../views/PasswordRecovery.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
<<<<<<< Updated upstream
    { path: '/registration', component: Registration},
    { path: '/login', component: LoginView },
    { path: '/', component: Dashboard },
=======
    { path: '/registration', name: "registration" , component: Registration},
    { path: '/login', name: "login", component: LoginView },
    { path: '/', name: "Dashboard" ,component: Dashboard },
>>>>>>> Stashed changes
    { path: '/myTickets', component: MyTickets},
    { path: '/teams', name: "teams", component: Teams },
    { path: '/projects', component: Projects},
    { path: '/statistics', component: Statistics},
    { path: '/settings', component: Settings },
    { path: '/ticketView', component: TicketView},
    { path: '/recovery', component: PasswordRecovery}
  ]
})
