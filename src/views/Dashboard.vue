<template>
  <div class="main">
    <div class="menu">
      <Menu />
    </div>
    <div class="dashboard">

      <grid-layout :layout.sync="layout" :col-num="colNum" :row-height="30" :is-draggable="draggable"
        :is-resizable="resizable" :vertical-compact="true" :use-css-transforms="true">
        <grid-item v-for="item in layout" :static="item.static" :x="item.x" :y="item.y" :w="item.w" :h="item.h"
          :i="item.i" :titulo="item.titulo" :key="item.i" >
          <span class="text"  >
            <div class="minTop">
              <p>{{item.titulo}}</p>
              <p>{{item.i}}</p>
            </div>
            <div class="minBottom">
              <p>Tech/Tech</p>
            </div>
          </span>
          <span class="remove" @click="removeItem(item.i)">x</span>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>

<script>

import { GridLayout, GridItem } from "vue-grid-layout"
import Menu from "@/components/Menu.vue";
export default {
  components: {
    Menu, GridLayout, GridItem
  },
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 2, h: 3, i: "132132", titulo: "Main ticket" },
        { x: 2, y: 0, w: 2, h: 3, i: "1254125", titulo: "Main ticket" },
        { x: 4, y: 0, w: 2, h: 3, i: "2", titulo: "Main ticket" },
        { x: 6, y: 0, w: 2, h: 3, i: "3", titulo: "Main ticket" },
        { x: 8, y: 0, w: 2, h: 3, i: "4", titulo: "Main ticket" },
        
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

  },
  methods: {
    addItem: function () {
      // Add a new item. It must have a unique key!
      this.layout.push({
        x: (this.layout.length * 2) % (this.colNum || 12),
        y: this.layout.length + (this.colNum || 12), // puts it at the bottom
        w: 2,
        h: 3,
        i: this.index,
        titulo: "banana"
      });
      // Increment the counter to ensure key is always unique.
      this.index++;
    },
    removeItem: function (val) {
      const index = this.layout.map(item => item.i).indexOf(val);
      this.layout.splice(index, 1);
    },
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
background-color:rgba(150, 150, 150, 0.863);
background-image: linear-gradient(rgba(255, 255, 255, 0) 2px, transparent 2px),
linear-gradient(90deg, rgba(255, 255, 255, 0) 2px, transparent 2px),
linear-gradient(rgb(49, 49, 49) 1px, transparent 1px),
linear-gradient(90deg, rgb(49, 49, 49) 1px, transparent 1px);
background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
background-position:-2px -2px, -2px -2px, -1px -1px, -1px -1px;

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
  background: rgba(255, 255, 255, 0.575);
  backdrop-filter: blur(5px);
  border-left: solid 10px rgb(23, 172, 122);
  border-radius: 15px;
  padding: 5px;
  overflow: hidden;
}

.minTop p{
  font-size: 2vmin;
  margin-top: 1vh;
  margin-left: 0.5vw;
  text-align: left;
}

.minBottom p{
  font-size: 18px;
  margin-left: 0.5vw;
  text-align: left;
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