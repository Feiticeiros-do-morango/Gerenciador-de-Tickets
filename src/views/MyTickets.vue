<template>

<div class="components">
  <TicketMin />
  <TicketMin />
  <TicketMin />
  <TicketMin />
  <TicketMin />
</div>
  
</template>

<script>
import TicketMinVue from "@/components/Ticket-Min.vue";
import TicketMin from "@/components/Ticket-Min.vue";

export default {
  components: { TicketMinVue, TicketMin },
};
</script>

<style scoped>
  .components{
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 60%;
    gap:2vh;
    padding: 2vh;
  }

</style>