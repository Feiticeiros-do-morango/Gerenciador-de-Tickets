<template>
  <div class="container">

    <div class="top">
      <div class="mainInfo">


        <div class="logo">
          <Icon icon="iconoir:keyframe" width="30" />
          {{this.ticket.assunto}}
        </div>
     
      <div class="tech">
      {{this.ticket.Id}}
      </div>
       <p>Tecnologia: {{this.ticket.tecnologia}}</p>
      <p>Data limite: {{this.ticket.dataLimite}}</p>

    </div>
      <h3>Colaboradores: </h3>
      <div class="colaboracao" v-for="item in this.ticket.colaboradores">
        <p>{{item.name}}</p>
      </div>
    </div>

    <div class="bottom">
      <div class="quadrado">
        <h3>Descrição</h3>
        <Textarea v-model="this.ticket.descricao" :autoResize="false" rows="20" cols="80" />
      </div>
 
      <div class="comentarios">
        <h3>Comentários</h3>
        <Textarea v-model="this.ticket.comentarios" :autoResize="false" rows="20" cols="60" />
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
  flex-direction: column;
  
  
}

.logo {
  display: flex;
  align-items: center;
}

.mainInfo{
  gap: 15px;
  margin-bottom: 2vh;
}
.top {
  padding: 2vh;
  color: black;
}
.tech {
  color: gray;
}

.bottom {
  color: rgba(186, 186, 186, 0.504);
  color: black;
  display: flex;
  justify-content:space-around;
  margin-top: 5vh;
  
}
.quadrado h3 {
  margin: auto;
  text-align: center;
  justify-content: center;
  margin-bottom: 3vh;
}
.comentarios h3 {
  margin: auto;
  text-align: center;
  justify-content: center;
  margin-bottom: 3vh;
}

.p-inputtextarea {
  background-color: #040414;
  border: none;
}
</style>
