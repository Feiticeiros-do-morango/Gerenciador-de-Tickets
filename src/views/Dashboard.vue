<template>
  <div class="component">
    <div class="navbar">
      <Navbar />
    </div>

    <div class="menu">
      <Menu />
    </div>
    <div class="background">

    </div>
  </div>
</template>
<script>
import Navbar from "@/components/shared/Navbar.vue";
import Menu from "@/components/Menu.vue";
export default {
  components: { Navbar, Menu },
};
</script>
<style scoped>
* {
  margin: 0;
}
.component{
position: fixed;
bottom: 0%;
background-image: url("../assets/background.jpg");
background-size: 35vh;
margin-right:30vh ;
width: 100%;
height: 100%;

}
.component {
  display: flex;

  position: relative;
}
.menu {
  width: 100%;
  height: 40%;
}
.navbar {
  height: 100vh;
  width: 50%;
}
</style>