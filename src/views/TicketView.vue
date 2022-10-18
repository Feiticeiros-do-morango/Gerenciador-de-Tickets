<template>
  <div class="container">
    <div class="sectionA">
      <div class="icon"></div>
      <div class="inicio">
        <div class="logo">
          <Icon icon="iconoir:keyframe" width="30" />
          {{this.ticket.assunto}}
        </div>
        <button>Branches</button>
      </div>
      <div class="tech">
      {{this.ticket.tecnologia}}
      </div>
       <p>Id nº {{this.ticket.Id}}</p>
      <p>Aberto em : {{this.ticket.abertura}}</p>
      <p>Data limite: {{this.ticket.dataLimite}}</p>
      <div class="criado">
        <p>Criado por {{this.ticket.criador}}</p>
      </div>
      <div class="quadrado">
        <h3>Descrição</h3>
        <Textarea v-model="this.ticket.descricao" :autoResize="false" rows="10" cols="70" />
      </div>
    </div>
    <div class="sectionB">
      <div class="colaboracao">
        <p>Colaboradores {{this.ticket.colaboradores}}</p>
      </div>
      <div class="comentarios">
        <h3>Comentários...</h3>
        <Textarea v-model="this.ticket.comentarios" :autoResize="false" rows="10" cols="40" />
      </div>
      <div class="fechamento">
        <p>Fechado em:{{ this.ticket.fechamento}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Textarea from "primevue/textarea";
import { Icon } from "@iconify/vue2";
import { useRoute } from "vue2-helpers/vue-router";
import { db } from "../Firebase/index";
import { doc, getDoc } from "firebase/firestore";
export default {
  // acessa o path e pega o ID
  // Com o ID vai no banco de dados e retorna as informações do ticket
  mounted() {
    const route = useRoute();
    const ticketId = route.params.id;
    this.searchData(ticketId);
  },
  components: {
    Icon,
    Textarea,
  },
  data() {
    return {
      ticket: {
        assunto: "",
        tecnologia: "",
        Id: "",
        abertura: "",
        dataLimite: "",
        criador: "",
        descricao: "",
        colaboradores: "",
        comentarios: "",
        fechamento: "",
      },
    };
  },

  methods: {
    searchData: async function (ticketId) {
      const docRef = doc(db, "ticket", ticketId);
      const docSnap = await getDoc(docRef);

      const ticketDoBanco = docSnap.data();
     
      this.ticket.Id = ticketId;
      this.ticket.assunto = ticketDoBanco.assunto;
      this.ticket.tecnologia = ticketDoBanco.tecnologia;
      this.ticket.abertura = ticketDoBanco.abertura?.toDate();
      this.ticket.dataLimite = ticketDoBanco.dataLimite?.toDate();
      this.ticket.criador = ticketDoBanco.criador;
      this.ticket.descricao = ticketDoBanco.descricao;
      this.ticket.colaboradores = ticketDoBanco.colaboradores;
      this.ticket.comentarios = ticketDoBanco.comentarios;
      this.ticket.fechamento = ticketDoBanco.fechamento;
     
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/engenharia-pattern.png");
  backdrop-filter: opacity(50%);
  background-size: 210vh;
  box-shadow: inset 0px 4px 4px rgba(184, 182, 182, 0.25);
  border-radius: 30px 30px 0px 0px;
  display: grid;
  grid-template-columns: 8fr 4fr;
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
  margin-right: 8vh;
  color: black;
}
.tech {
  color: gray;
}
.quadrado{
  width: 100%;
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
  gap: 15vh;
  margin-right: 14vh;
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
  width: 100%;
}
</style>
