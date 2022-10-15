<template>
  <div class="container">
    <div class="sectionA">
      <div class="icon"></div>
      <div class="inicio">
        <div class="logo">
          <Icon icon="iconoir:keyframe" width="30" />
          <h1>NOVO TICKET</h1>
        </div>
        <button>Branches</button>
      </div>
      <div class="tech">
        <p>Dev/Javascript</p>
      </div>
      <p>ID nº</p>
      <p>Aberto em : 10/08/2022</p>
      <p>Data limite: 21/08/2022</p>
      <div class="criado">
        <p>Criado por</p>
      </div>
      <div class="quadrado">
        <h3>Descrição</h3>
        <Textarea v-model="value2" :autoResize="false" rows="10" cols="70" />
      </div>
    </div>
    <div class="sectionB">
      <div class="colaboracao">
        <p>Colaboradores</p>
      </div>
      <div class="comentarios">
        <h3>Comentários...</h3>
        <Textarea v-model="value1" :autoResize="false" rows="10" cols="40" />
      </div>
      <div class="fechamento">
        <p>Fechado em: 20/08/2022</p>
      </div>
    </div>
  </div>
</template>

<script>
import Textarea from "primevue/textarea";
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
    Textarea,
  },
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
    };
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/telaok.png");
  backdrop-filter: opacity(50%);
  background-size: 210vh;
  box-shadow: inset 0px 4px 4px rgba(184, 182, 182, 0.25);
  border-radius: 30px 30px 0px 0px;
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-template-areas: "sectionA sectionB";
}
.icon {
  margin-top: 2vh;
}

.inicio {
  display: flex;
  gap: 45vh;
  margin: 0;
  color: black;
}
.inicio h1 {
  font-size: 12px;
}
.inicio button {
  border-radius: 20px;
  width: 15vh;
  border: none;
  background-color: rgba(186, 183, 183, 0.762);
}
.logo {
  display: flex;
  align-items: center;
}

.sectionA {
  grid-area: sectionA;
  padding: 2vh;
  margin-left: 6vh;
  color: black;
}
.tech {
  color: gray;
}

.quadrado h3 {
  margin: auto;
  text-align: center;
  justify-content: center;
  margin-bottom: 3vh;
}


.sectionB {
  color: rgba(186, 186, 186, 0.504);
  grid-area: sectionB;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 18vh;
  margin-right:10vh ;
}
.colaboracao p {
  margin-top: 3vh;
}

.comentarios h3 {
  margin: auto;
  text-align: center;
  justify-content: center;
  margin-bottom: 3vh;
}
.fechamento {
  margin-left: 20vh;
  position: absolute;
  bottom: 0;
}

.p-inputtextarea {
  background-color: rgb(3, 3, 32);
}

</style>

