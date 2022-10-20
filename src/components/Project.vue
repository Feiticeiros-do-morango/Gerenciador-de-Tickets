<template>
    <Dialog
      header="Seus Projetos"
      :visible.sync="displayModal"
      :modal="true"
      dismissableMask="true"
      :closable="true"
    >
      <main>
        
        <div class="top">
        <div class="project p-ripple" v-ripple v-for="item in projetos" :key="item.name" @click="setProjectName(item.projectName)">
          <div class="left">
            <div class="icon">
                <iconify-icon icon="ant-design:folder-filled" style="color: #6181cd;" width="20" height="20"></iconify-icon>
            </div>
            <p>{{item.projectName}}</p>
          </div>
          <div class="right">
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
    <div class="bottom">
        <div class="create">
            <div class="left">
            <div class="icon">
                <iconify-icon
                icon="ic:baseline-create-new-folder"
                style="color: #6181cd"
                width="20"
                height="20"
              ></iconify-icon>
            </div>
            <div class="text">
            <p>Criar Projeto</p>
          </div>
          <transition name="fade">
            <form class="createInput" v-if="toggle">
              <input type="text" placeholder="Titulo do Projeto" v-if="toggle" v-model="name">
              <button v-if="toggle" @click="openTittle()">Enviar</button>
            </form>
          </transition>
          </div>
          <div class="right">
            <div class="icon"  @click="toggle =!toggle">
                <iconify-icon icon="ant-design:plus-outlined" style="color: #6181cd;" width="20" height="20"></iconify-icon>
            </div>
          </div>
        </div>
    </div>
      </main>
    </Dialog>
</template>
  
  <script>
  import Toast from "primevue/toast";
import Ripple from "primevue/ripple";
import Dialog from "primevue/dialog";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase/index";

export default {
    
    mounted: 
    async function fetchData() {
            const querySnapshot = await getDocs(collection(db, "projeto"));
            querySnapshot.forEach((doc) => {

                let p = doc.data().name
                this.projetos.push({
                    projectName : p
                })

            })

            console.log(this.projetos)
        },

  components: { Dialog },
  data() {
    return {
      name: "",
      toggle: false,
      displayModal: false,
      projetos: [],
    };
  },
  directives: {
    ripple: Ripple,
  },
  methods: {
    setProjectName(name) {
      console.log("teste")
      localStorage.setItem("projectToken", name)
      location.reload()
    },
    openModal() {
      this.displayModal = true;
    },
    openTittle() {
      this.saveOnDatabase();
      location.reload();
    },
    async saveOnDatabase() {
      await addDoc(collection(db, "projeto"), {
        name: this.name
      });
    },
    goToDashboard() {
      this.$router.push({ name: "dashboard" });
    },
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

  }
.project {
  width: 100%;
  height: 50px;
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  margin-bottom: 10px;
}
p {
    font-size: 14px;
    text-align: left;
    letter-spacing: 1px;
}
p::first-letter {
    text-transform: uppercase;
}

.buttonCreate {
    height: 100%;
    display: flex;
    align-items: center;
}
button {
    width: 30%;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    color: #fff;
    background: rgba(255, 255, 255, 0.13);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.5s ease-out;
}
button:hover {
    background: rgba(255, 255, 255, 0.337);
}
.createInput {
  height: 100%;
  width: 60%;
  display: flex;
  gap: 5px;
  align-items: center;
}
.text {
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
input {
    width: 70%;
    height: 30px;
    margin-left: 5px;
    border: none;
    color: #fff;
    text-indent: 5px;
    outline: none;
    background: rgba(255, 255, 255, 0.13);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.5s ease-out;
}
input::placeholder{
    font-size: 12px;
    text-indent: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.create {
    width: 100%;
  height: 50px;
  bottom: 0;
  background: rgba(255, 255, 255, 0.052);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.4px);
  -webkit-backdrop-filter: blur(3.4px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: 0.5s ease-out;
  display: flex;
}
.left {
  width: 90%;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 0 0 10px;

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

.right {
  width: 10%;
  height: 100%;
  display: flex;
  margin-right: 20px;
  justify-content: flex-end;
  align-items: center;
}
</style>
  