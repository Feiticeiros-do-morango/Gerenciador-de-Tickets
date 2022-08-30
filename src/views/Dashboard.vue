<template>
<div class="components">
  <Navbar />
  <Menu  />
  </div>
</template>
<script>
import Navbar from "@/components/shared/Navbar.vue";
import Menu from "@/components/Menu.vue"
export default {
  components: { Navbar,Menu },
};
</script>
<style scoped>
*{
  margin: 0;
}
</style>