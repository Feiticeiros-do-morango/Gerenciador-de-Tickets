<template>
<div class="component">

  <div class="navbar">
  <Navbar />
  </div>

  <div class="menu">
  <Menu />
  </div>

  </div>
  
  
</template>
<script>
import Navbar from "@/components/shared/Navbar.vue";
import Menu from "@/components/Menu.vue"
export default {
  components: { Navbar,Menu}
};
</script>
<style scoped>
*{
  margin: 0;
}
.component{
  display: flex;
 
  position: relative;
  
}
.menu{
  width: 80%;
 
 
 
 
}
.navbar{
 height: 100vh;
 width: 20vw;
 
}
</style>