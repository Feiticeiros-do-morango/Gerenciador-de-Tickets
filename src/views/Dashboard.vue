<template>
  <div class="main">
    <div class="menu">
      <Menu />
    </div>
    <CriarTicket/>
    <div class="dashboard">

      <grid-layout :layout.sync="layout" :col-num="colNum" :row-height="30" :is-draggable="draggable"
        :is-resizable="resizable" :vertical-compact="true" :use-css-transforms="true"
        :style="{width: size + 'px', height: size + 'px'}">
        <grid-item v-for="item in layout" :static="item.static" :x="item.x" :y="item.y" :w="item.w"
          :h="item.h" :i="item.i" :titulo="item.titulo" :key="item.i"
          v-bind:class="getPrioridade(item.prioridade) + ' ' + getTipo(item.tipo)">
          <span class="text">
            <svg viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
              <text id="tituloText" x="1" y="20" >{{item.titulo}}</text>
              <text id="idText" x="1" y="35" fill="gray" >{{item.i}}</text>
              <text id="techText" x="1" y="80" >{{item.tech}}</text>
            </svg>
          </span>
          <span class="remove"  @click="removeItem(item.i)">x</span>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>
import { db} from "../Firebase/index"
import { collection, doc, setDoc, getDocs } from "firebase/firestore";
import { GridLayout, GridItem } from "vue-grid-layout"
import Menu from "@/components/Menu.vue";
import CriarTicket from "@/components/CriarTicket.vue";


export default {
  components: {
    Menu,
    GridLayout,
    GridItem,
    CriarTicket
},
  data() {
    return {
      layout: [
        // { x: 0, y: 0, w: 2, h: 3, i:"11234567", titulo:"", tech:"" }

      ],
      draggable: true,
      resizable: true,
      colNum: 10,
      index: 0,
      
    }
  },
  mounted() {
    // this.$gridlayout.load();
    this.index = this.layout.length;
    this.addItem()


  },
  methods: {
    addItem: async function () {

      const querySnapshot = await getDocs(collection(db, "ticket"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        this.layout.push({
          x: (this.layout.length * 2) % (this.colNum || 12),
          y: this.layout.length + (this.colNum || 12), // puts it at the bottom
          w: 2,
          h: 3,
          i: doc.id,
          titulo: doc.data().titulo,
          tech: doc.data().tecnologia,
          prioridade: doc.data().prioridade,
          tipo: doc.data().tipo,
        });

        console.log(doc.id, " => ", doc.data());
      });
    },

    removeItem: function (val) {
      const index = this.layout.map(item => item.i).indexOf(val);
      this.layout.splice(index, 1);
    },
    getPrioridade: function (prioridade){
      switch (prioridade) {
        case "naoUrgente":
          return "naoUrgente"
          break;

          case "urgente":
          return "urgente"
          break;

          case "poucoUrgente":
          return "poucoUrgente"
          break;

          case "muitoUrgente":
          return "muitoUrgente"
          break;

          case "emergencia":
          return "emergencia"
          break;
      
        default:
          break;
      }

    },
    getTipo: function(tipo){
      switch (tipo) {
        case "dev":
          return "dev"
          break;

          case "design":
          return "design"
          break;

          case "engenharia":
          return "engenharia"
          break;
      
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 80vw;

  background-color: #f2f2f2;
}

.menu {
  width: 100%;
  height: 10vh;
}

.dashboard {
  height: 90vh;
  width: 100%;
  padding-top: 2vh;

  /* Background*/
  background-color: rgba(150, 150, 150, 0.863);
  background-image: linear-gradient(rgba(255, 255, 255, 0) 2px, transparent 2px),
    linear-gradient(90deg, rgba(255, 255, 255, 0) 2px, transparent 2px),
    linear-gradient(rgb(49, 49, 49) 1px, transparent 1px),
    linear-gradient(90deg, rgb(49, 49, 49) 1px, transparent 1px);
  background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
  background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;

  box-shadow: inset 3px 5px 10px rgba(0, 0, 0, 0.705);
  border-radius: 30px 30px 0px 0px;

}

.columns {
  -moz-columns: 120px;
  -webkit-columns: 120px;
  columns: 120px;
}


/*
Configuração dos cards
*/

.remove {
  position: absolute;
  right: 2px;
  top: 0;
  cursor: pointer;
}

.vue-grid-item:not(.vue-grid-placeholder) {
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 5px;
  overflow: hidden;
}

.naoUrgente{
  border-left: solid 11px rgb(23, 172, 122);
}
.poucoUrgente{
  border-left: solid 11px rgb(39, 144, 241);
}
.urgente{
  border-left: solid 11px rgb(245, 242, 56);
}
.muitoUrgente{
  border-left: solid 11px rgb(255, 132, 49);
}
.emergencia{
  border-left: solid 11px rgba(250, 18, 18, 0.959);
}

.dev{
  background: url(../assets/dev-pattern.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}

.engenharia{
  background: url(../assets/engenharia-pattern.png);
  background-size: cover;
  background-repeat: no-repeat;
}

.design{
  background: url(../assets/design-pattern.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}


#tituloText{
  font-size: 120%;
}

#idText{
  font-size: 60%;
}

.vue-grid-item .resizing {
  opacity: 0.9;
}

.vue-grid-item .static {
  background: #cce;
}

.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}

.vue-grid-item .minMax {
  font-size: 12px;
}

.vue-grid-item .add {
  cursor: pointer;
}
</style>