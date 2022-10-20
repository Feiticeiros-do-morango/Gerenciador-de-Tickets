<template>
  <div class="container">

    <div class="sectionA">

      <div class="inicio">

        <div class="logo">
          <Icon icon="iconoir:keyframe" width="30" />
          {{this.ticket.assunto}}
        </div>
      </div>

      <div class="tech">
      {{this.ticket.Id}}
      </div>
       <p>Tecnologia: {{this.ticket.tecnologia}}</p>
      <p>Data limite: {{this.ticket.dataLimite}}</p>

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

    </div>

  </div>

</template>

<script>
import Textarea from "primevue/textarea";
import { Icon } from "@iconify/vue2";
import { db } from "../Firebase/index";
import { doc, getDoc } from "firebase/firestore";

export default {
  // acessa o path e pega o ID
  // Com o ID vai no banco de dados e retorna as informações do ticket
  mounted() {
    const route = this.$router.currentRoute;
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
      this.ticket.dataLimite = ticketDoBanco.dataLimite?.toDate();
      this.ticket.descricao = ticketDoBanco.descricao;
      this.ticket.colaboradores = ticketDoBanco.colaboradores;
      this.ticket.comentarios = ticketDoBanco.comentarios;
     
    },
  },
};
</script>

<style scoped>
.container {
  width: 80vw;
  height: 100vh;
  background-color: rgba(248, 248, 255, 0.801);
  box-shadow: inset 0px 4px 4px rgba(184, 182, 182, 0.25);
  border-radius: 30px 30px 0px 0px;
  display: flex;
  
  
}

.inicio {
  display: flex;
  color: black;
}
.inicio h1 {
  font-size: 12px;
}
.logo {
  display: flex;
  align-items: center;
}

.sectionA {
  grid-area: sectionA;
  padding: 2vh;
  color: black;
}
.tech {
  color: gray;
}
.quadrado{
  width: 30vw;
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

.p-inputtextarea {
  background-color: rgb(3, 3, 32);
  width: 100%;
}
</style>
