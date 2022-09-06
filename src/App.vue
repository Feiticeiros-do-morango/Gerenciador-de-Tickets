<template>
  <div>
    <div class="component">
      <div class="navbar">
        <Navbar />
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/shared/Navbar.vue";
export default {
  components: { Navbar },
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
.navbar {
  grid-area: navegacao;
}
.container{
    grid-area: container;
   
}
.component {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 2fr 10fr;

  grid-template-areas:
    "navegacao container";
}
</style>