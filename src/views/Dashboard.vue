<template>
  <div class="component">
    <div class="menu">
      <Menu />
    </div>
    <div class="background"></div>
  </div>
</template>
<script>
import Menu from "@/components/Menu.vue";
export default {
  components: { Menu },
};
</script>
<style scoped>
.menu {
  grid-area: cabecalho;
  width: 100%;
  height: 100%;
}

.background {
  background: url("../assets/background.png"), rgb(193, 193, 193);
  background-size: 50%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px 30px 0px 0px;
  grid-area: conteudo;
}
.component {
  display: grid;
  grid-template-rows: 2fr 10fr;

  grid-template-areas:
    "cabecalho cabecalho"
    "conteudo conteudo ";
}
</style>