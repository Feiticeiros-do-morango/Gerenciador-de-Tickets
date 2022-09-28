<template>
  <div class="navbar">
    <div class="identificacao">
      <div class="avatar">
        <Icon icon="carbon:user-avatar" width="40" height="40" />
      </div>
      <div class="perfil">
        <div class="nome">
          <p>Nome Completo</p>
        </div>
        <div class="cargo">
          <p>Cargo</p>
        </div>
      </div>
    </div>
    <div class="informacao">
      <p>Projeto:</p>
    </div>
    <div class="items">
      <PanelMenu :model="items" />
    </div>
    <div class="dados">
      <p>Nome</p>
      <p>Empresa</p>
    </div>

  </div>
</template>
<script>

import PanelMenu from "primevue/panelmenu";

export default {
  components: { PanelMenu },
  data() {
    return {
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-fw pi-file",
          to: "/dashboard",
          items: [
            {
              label: "Criar Ticket",
              icon: "pi pi-fw pi-plus",
              to: "/ticketView",
            },
          ],
        },
        {
          label: "Meus Tickets",
          icon: "pi pi-fw pi-file",
          to: "/MyTickets"
        },
        {
          label: "Projetos",
          icon: "pi pi-fw pi-calendar",
          to: "/projects",
          // items: [
          //   {
          //     label: "Projeto A",
          //     icon: "",
          //   },
          //   {
          //     label: "Projeto B",
          //     icon: "",
          //   },
          //   {
          //     label: "Projeto C",
          //     icon: "",
          //   },
          // ],
        },
        {
          label: "Configuração",
          icon: "pi pi-fw pi-file",
        },
        {
          label: "Estatísticas",
          icon: "pi pi-fw pi-file",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
p-menuitem-text{
  color: #040414;

  }
.identificacao {
  display: flex;
  padding: 20px
}

.identificacao p {

  font-size: 14px;
}

.cargo {
  font-size: 14px;
  margin: auto;
}

.informacao {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 12px;
}

.navbar {
  height: 100vh;
  width: 20vw;
  font-family: "Roboto Mono";
  font-size: 16px;
  background-color: #040414;
  color: white;
  margin-left: 0;
}

.dados {
  display: flex;
  flex-flow: column-wrap;
  width: 40%;
  height: 12vh;
  position: fixed;
  bottom: 0;
  margin-bottom: 1vh;
  margin-left: 12vh;
  max-width: 10vh;
}

.dados p {
  word-wrap: break-word;
}
</style>

