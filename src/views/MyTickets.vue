<template>

<div class="components">
  <TicketMin />
  <TicketMin />
  <TicketMin />

  
</div>
  
</template>

<script>
import TicketMinVue from "@/components/Ticket-Min.vue";
import TicketMin from "@/components/Ticket-Min.vue";
import Perfil from "@/components/Perfil.vue";

export default {
  components: { TicketMinVue, TicketMin, Perfil },
};
</script>

<style scoped>
  .components{
    display: flex;
    flex-direction: row;
    width: 80vw;
    height: 100vh;
    padding: 2vh;
  }

</style>