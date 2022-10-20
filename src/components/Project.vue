<template>
  <Dialog
    header="Seus Projetos"
    :visible.sync="displayModal"
    :modal="true"
    dismissableMask="true"
    :closable="true"
  >
    <div class="main">
      <div class="top">
        <div class="projectRow p-ripple" v-ripple>
          <div class="left">
            <div class="icon">
              <iconify-icon
                icon="ant-design:folder-add-filled"
                style="color: #6181cd"
                width="20"
                height="20"
              ></iconify-icon>
            </div>
            <p>Projeto 1</p>
          </div>
          <div class="right p-ripple" v-ripple @click="toggle = !toggle">
            <div class="icon">
              <iconify-icon
                icon="bx:plus"
                style="color: #6181cd"
                width="20"
                height="20"
              ></iconify-icon>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="icon">
            <iconify-icon
              icon="ant-design:folder-add-filled"
              style="color: #6181cd"
              width="20"
              height="20"
            ></iconify-icon>
          </div>
          <div class="create">
            <p>Criar Projeto</p>
            <input
              type="text"
              placeholder="inserir Titulo projeto"
              v-show="toggle"
            />
            <button v-show="toggle" @click="saveOnDatabase()">Enviar</button>
          </div>
        </div>
        <div class="right p-ripple" v-ripple @click="toggle = !toggle">
          <div class="icon">
            <iconify-icon
              icon="bx:plus"
              style="color: #6181cd"
              width="20"
              height="20"
            ></iconify-icon>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>
  
  <script>
  import Toast from "primevue/toast";
import Ripple from "primevue/ripple";
import Dialog from "primevue/dialog";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase/index";

<script>
import Ripple from "primevue/ripple";
import Dialog from "primevue/dialog";
export default {
  components: { Dialog },
  data() {
    return {
      toggle: false,
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
    saveOnDatabase() {
      this.toggle = !this.toggle
    }
  },
};
</script>
  
  <style scoped>
  ::-webkit-scrollbar {
  width: 20px;
}
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.13);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.13);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  border-radius: 3px;
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
main {
  width: 30vw;
  height: 40vh;
  position: relative;
}
.top {
    width: 100%;
    height: 33vh;
    overflow: auto;
}
.bottom {
    width: 100%;
    height: 7vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;

<style scoped>
.main {
  width: 35vw;
  height: 45vh;
  border: 1px solid red;
}
p {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    font-family: 'Roboto Mono';
}
.top {
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  column-gap: 15px;
  border: 1px solid red;
  overflow-x: hidden;
  overflow-y: auto;
}
.projectRow {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.bottom {
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.left {
  width: 90%;
  height: 45px;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 0 0 10px;
}
.create {
    display: flex;
    position: relative;
    gap: 5px;
}
.create input {
    color: #fff;
  padding: 5px;
  border-radius: 3px;
  outline: none;
  background: rgba(255, 255, 255, 0.13);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.5s ease-out;
}
.create input::placeholder {
    font-size: 12px;
    text-align: left;
    color: rgba(255, 255, 255, 0.411);
}
.create button {
      color: #fff;
  padding: 5px;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.13);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.5s ease-out;
}
.create button:hover {
  transition: 0.5s ease;
  background: rgba(255, 255, 255, 0.24);
}
.right {
  width: 10%;
  cursor: pointer;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
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
.icon:hover {
  transition: 0.5s ease;
  background: rgba(255, 255, 255, 0.24);
}
</style>
