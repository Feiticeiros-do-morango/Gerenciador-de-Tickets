<template>
  <div class="main">
    <div class="menu">
      <Menu />
    </div>
    <div class="dashboard">
    </div>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
export default {
  components: { Menu },
};
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;

  background-color: #f2f2f2;
  }
.menu {
  width: 100%;
  height: 10vh;
}

.dashboard {
  height:90vh ;
  width: 100%;
  background: url("../assets/background.png"), rgb(193, 193, 193);
  background-size: 50%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px 30px 0px 0px;
  grid-area: conteudo;
}
</style>