<template>
  <div>
    <Dialog
      header="Seus Projetos"
      :visible.sync="displayModal"
      :modal="true"
      dismissableMask="true"
      :closable="true"
    >
      <main>
        <div class="top">
        <div class="project p-ripple" v-ripple v-for="item in projetos" :key="item.name" >
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
          </div>
          <div class="right">
            <div class="icon"  @click="toggle = !toggle">
                <iconify-icon icon="ant-design:plus-outlined" style="color: #6181cd;" width="20" height="20"></iconify-icon>
            </div>
          </div>
        </div>
    </div>
      </main>
    </Dialog>
  </div>
</template>
  
  <script>
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

            console.log(this.projetos.projectName)
        },

  components: { Dialog },
  data() {
    return {
        toggle: false,
      displayModal: false,
      projetos: [],
      


    };
  },
  directives: {
    ripple: Ripple,
  },
  methods: {
    openModal() {
      this.displayModal = true;
    },
  },
};
</script>
  
  <style scoped>
main {
  width: 30vw;
  height: 40vh;
  position: relative;
  overflow: auto;
}
.p-dialog-content {
    height: 100vh;
}
.project {
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  margin-bottom: 10px;
}
p {
    font-size: 16px;
    text-align: left;
    letter-spacing: 1px;
}
.buttonCreate {
    height: 100%;
    display: flex;
    align-items: center;
}
button {
    width: 20%;
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
input {
    width: 40%;
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
  position: sticky;
  cursor: pointer;
}
.left {
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;

}
.icon {
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
.icon:hover {
    transition: 0.5s ease;
  background: rgba(255, 255, 255, 0.24);
}

.right {
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
  