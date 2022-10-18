<template>
  <div>
    <Dialog
      header="Seu Perfil"
      :visible.sync="displayModal"
      :modal="true"
      dismissableMask="true"
      :closable="true"
    >
      <div class="content-perfil">
        <div class="perfil-info">
          <div class="perfil-img">
            <iconify-icon
              icon="healthicons:ui-user-profile-outline"
              style="color: white"
              width="68"
              height="68"
            ></iconify-icon>
          </div>
          <h1>Nome completo</h1>
          <p>Cargo</p>
          <button>Editar Perfil</button>
        </div>
        <div class="divisor">
          <div class="line"></div>
        </div>
        <div class="perfil-item p-ripple" v-ripple>
          <div class="left-item">
            <div class="icon">
              <iconify-icon
                icon="ci:settings"
                style="color: #6181cd"
                width="20"
                height="20"
              ></iconify-icon>
            </div>
            <p>Configurações</p>
          </div>
          <div class="right-item">
            <div class="icon">
              <iconify-icon
                icon="dashicons:arrow-up-alt2"
                style="color: #6181cd"
                width="20"
                height="20"
                rotate="90deg"
              ></iconify-icon>
            </div>
          </div>
        </div>
        <div class="perfil-item p-ripple" v-ripple>
          <div class="left-item">
            <div class="icon">
              <iconify-icon
                icon="el:minus-sign"
                style="color: #6181cd"
                width="20"
                height="20"
              ></iconify-icon>
            </div>
            <p>Billing Details</p>
          </div>
          <div class="right-item">
            <div class="icon">
              <iconify-icon
                icon="dashicons:arrow-up-alt2"
                style="color: #6181cd"
                width="20"
                height="20"
                rotate="90deg"
              ></iconify-icon>
            </div>
          </div>
        </div>
        <div class="perfil-item p-ripple" v-ripple>
          <div class="left-item">
            <div class="icon">
              <iconify-icon
                icon="ant-design:user-outlined"
                style="color: #6181cd"
                width="20"
                height="20"
              ></iconify-icon>
            </div>
            <p>User Management</p>
          </div>
          <div class="right-item">
            <div class="icon">
              <iconify-icon
                icon="dashicons:arrow-up-alt2"
                style="color: #6181cd"
                width="20"
                height="20"
                rotate="90deg"
              ></iconify-icon>
            </div>
          </div>
        </div>
        <div class="divisor" id="margin">
          <div class="line"></div>
        </div>
        <div class="perfil-item p-ripple" v-ripple>
          <div class="left-item">
            <div class="icon">
              <iconify-icon
                icon="carbon:information-filled"
                style="color: #6181cd"
                width="20"
                height="20"
              ></iconify-icon>
            </div>
            <p>Information</p>
          </div>
          <div class="right-item">
            <div class="icon">
              <iconify-icon
                icon="dashicons:arrow-up-alt2"
                style="color: #6181cd"
                width="20"
                height="20"
                rotate="90deg"
              ></iconify-icon>
            </div>
          </div>
        </div>
        <div class="perfil-item p-ripple" v-ripple @click="logOut()">
          <div class="left-item">
            <div class="icon">
              <iconify-icon
                icon="ic:outline-log-in"
                style="color: #6181cd"
                width="20"
                height="20"
              ></iconify-icon>
            </div>
            <p>Sair</p>
          </div>
          <div class="right-item">
            <div class="icon">
              <iconify-icon
                icon="dashicons:arrow-up-alt2"
                style="color: #6181cd"
                width="20"
                height="20"
                rotate="90deg"
              ></iconify-icon>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script>
import Ripple from "primevue/ripple";
import Dialog from "primevue/dialog";
import { getAuth, signOut } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import AutoComplete from "primevue/autocomplete";
import Calendar from "primevue/calendar";

export default {
  components: { Dialog },
  data() {
    return {
      displayModal: false,
    };
  },
  directives: {
    ripple: Ripple,
  },
  methods: {
    openModal() {
      this.displayModal = true;
    },
    logOut() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          localStorage.removeItem('userName')
          localStorage.removeItem('token');
          this.$router.push({ name: "login" })
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    },
  },
};
</script>

<style scoped>
.content-perfil {
  width: 30vw;
  height: 70vh;
}
.perfil-info {
  width: 100%;
  height: 27vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.perfil-info h1 {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  margin-top: 5px;
}
.perfil-info p {
  font-size: 11px;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
.perfil-info button {
  font-family: "Roboto Mono";
  font-weight: 500;
  color: #fff;
  width: 12vw;
  height: 5vh;
  padding: 5px;
  border-radius: 35px;
  border: none;
  cursor: pointer;
  background: rgba(8, 18, 73, 0.13);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.5s ease-out;
}
.perfil-info button:hover {
  background: rgba(15, 33, 139, 0.37);
  transition: 0.5s ease;
}
.perfil-img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#margin {
  margin-top: 20px;
}
.divisor {
  width: 100%;
  height: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.divisor .line {
  width: 100%;
  height: 0.5px;
  border-radius: 2px;
  background-color: #ffffff1a;
}
.perfil-item {
  width: 100%;
  height: 5vh;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.perfil-item.p-ripple {
  border-radius: 8px;
  cursor: pointer;
}

.perfil-item .left-item {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
}
.perfil-item .right-item {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.perfil-item .right-item .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  padding: 5px;
  background: rgba(255, 255, 255, 0.13);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.5s ease-out;
}
.perfil-item .right-item .icon:hover {
  transition: 0.5s ease;
  background: rgba(255, 255, 255, 0.24);
}
.perfil-item .left-item .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.13);
  border-radius: 7px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.perfil-item .left-item p {
  font-size: 12px;
}
</style>
