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
      <span>Projeto</span>
      <span>Time</span>
    </div>
    <div>
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
        },
        {
          label: "Times",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Time A",
            },
            {
              label: "Time B",
            },
          ],
        },
        {
          label: "Projetos",
          icon: "pi pi-fw pi-file",
          items: [
            {
              label: "Projeto A",
              icon: "",
            },
            {
              label: "Projeto B",
              icon: "",
            },
            {
              label: "Projeto C",
              icon: "",
            },
          ],
        },
        {
          label: "Estatísticas",
          icon: "pi pi-fw pi-file",
        },
        {
          label: "Configuração",
          icon: "pi pi-fw pi-file",
          items: [],
        },
      ],
    };
  },
};
</script>

<style scoped>
.identificacao {
  display: flex;
  gap: 10px;
  padding-top: 2vh;
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
  margin: 5% 12%;
  font-size: 12px;
}
.navbar {
  height: 100vh;
  width: 100%;
  font-family: "Roboto Mono";
  font-size: 16px;
  background-color: rgb(1, 1, 52);
  color: white;
  margin-left: 0;
  grid-area: navbar;
}

.itens li {
  list-style: none;
  padding: 12%;
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

