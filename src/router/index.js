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


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/registration', component: Registration},
    { path: '/login', component: LoginView },
    { path: '/', component: Dashboard },
    { path: '/myTickets', component: MyTickets},
    { path: '/teams', component: Teams },
    { path: '/projects', component: Projects},
    { path: '/statistics', component: Statistics},
    { path: '/settings', component: Settings },
    { path: '/ticketView', component: TicketView}
  ]
})
