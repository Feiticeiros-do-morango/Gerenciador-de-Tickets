
<template>
  <div class="app">
    <div class="navbar">
      <Navbar v-if="isLogin" />
    </div>

    <div class="container">
      <router-view></router-view>
    </div>



  </div>
</template>
<script>
import Navbar from "@/components/shared/Navbar.vue";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

export default {
  components: { Navbar, TabView, TabPanel },
  data() {
    return isLogin;
  },
  computed: {
    isLogin() {
      if (this.$route.name == 'login' || this.$route.name == 'registration' || this.$route.name == 'land') {
        return false
      } else {
        return true
      }
    }
  }

};
</script>
<style>
@import "primevue/resources/themes/lara-dark-blue/theme.css ";
@import "primevue/resources/primevue.min.css";
@import "primeicons/primeicons.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
}

.app {
  display: flex;
  height: 100vh;
  width: 100%;
}

.navbar {
 width: 20%;
}

.container {
  width: 80%;
}

</style>

