<template>
  <div class="navbar">
    <div class="identificacao">
      <div class="avatar">
        <button @click="openPerfil">
          <iconify-icon icon="healthicons:ui-user-profile-outline" id="perfil-image" style="color: white;" width="38" height="38"></iconify-icon>
        </button>
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
      <PanelMenu :model="items" v-on:sai="sendEmit"/>
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

      display: false,
      items: [
        {
          label: "Dashboard",
          icon: "pi pi-table",
          to: "/dashboard",
          items: [
            {
              label: "Criar Ticket",
              icon: "pi pi-fw pi-plus",
              command: (event) => {
                
                this.$emit('openTicket')
                
                
              }


            },
          ],
        },
        {
          label: "Meus Tickets",
          icon: "pi pi-ticket",
          to: "/MyTickets"
        },
        {
          label: "Projetos",
          icon: "pi pi-box",
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
      ],
    };

  },
  methods: {
    
    openPerfil : function() {
      this.$emit('openPerfil')

    },

  },
};
</script>

<style scoped>
p-menuitem-text {
  color: #040414;

}

.identificacao {
  display: flex;
  gap: 20px;
  padding: 20px 20px 20px 20px;
}

.identificacao .avatar {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
}

.identificacao .avatar img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}

.identificacao .avatar button {
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 40px;
  height: 40px;
}

.perfil {
  width: 10vw;
  height: auto;
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

