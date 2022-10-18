
<template>
  <div class="app">
    
    <div class="navbar">
      <Navbar v-show="isLogin" v-on:openPerfil="openPerfil()"  v-on:openTicket="openTicket()"/>
      
    </div>

    <div class="container">
      <Perfil ref="childPerfil" ></Perfil>
      <CriarTicket ref="childTicket" ></CriarTicket>
      <router-view></router-view>
    </div>

  </div>

</template>
<script>
import Navbar from "@/components/shared/Navbar.vue";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Perfil from "./components/Perfil.vue";
import CriarTicket from "./components/CriarTicket.vue";

export default {
  
  components: { Navbar, TabView, TabPanel, Perfil, CriarTicket, },
  data() {
    return{
      
  }
  },
  methods: {
        openPerfil() {
          this.$refs.childPerfil.openModal()
               
        },
        openTicket(){
          this.$refs.childTicket.openModal()

    },
  },
  
  computed: {
    isLogin() {
      if (this.$route.name == 'login' || this.$route.name == 'registration' 
            || this.$route.name == 'land' || this.$route.name == 'recovery') {
        return false
      } else {
        return true
      }
    }
  },


};
</script>
<style>
@import "primevue/resources/themes/lara-dark-blue/theme.css";
@import "primevue/resources/primevue.min.css";
@import "primeicons/primeicons.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
  scroll-behavior: smooth;

}

.app {
  display: flex;
  height: 100vh;
  width: 100%;
}

.navbar {
 width: auto;
}

.container {

  width: auto;
  background-color: #040414;

}

</style>

