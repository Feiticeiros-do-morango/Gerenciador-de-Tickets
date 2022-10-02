<template>
  <div class="container">
    <div class="dados">
      <h1>Dados</h1>
      <div class="inserir">
        <label for=""> Nome </label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder=""
          v-model="ticket.nome"
        />
        <br />
        <label for="">Tecnologia</label>
        <input
          type="text"
          name="tec"
          id="tec"
          placeholder=""
          v-model="ticket.tecnologia"
        />
        <br />
        <label for="">Colaboradores</label>
        <select name="colaboradores" id="colaboradores"></select>
      </div>
    </div>
    <div class="periodos">
      <h1>Periodos</h1>
      <label for=""> Aberto em </label>
      <input
        type="text"
        name="abertoem"
        id="abertoem"
        placeholder=""
        v-model="ticket.dataAbertura"
      />
      <br />
      <label for=""> Data limite </label>
      <input
        type="text"
        name="dlimite"
        id="dlimite"
        placeholder=" "
        v-model="ticket.dataLimite"
      />
      <br />
      <label for=""> Criado por </label>
      <input
        type="text"
        name="autor"
        id="autor"
        placeholder=" "
        v-model="ticket.criador"
      />
      <br />
      <label for=""> Fechado </label>
      <input
        type="text"
        name="concluido"
        id="concluido"
        placeholder=" "
        v-model="ticket.fechamento"
      />
      <br />
    </div>
  </div>
</template>

<script>

import { collection, addDoc, } from "firebase/firestore";
import { db, auth } from "../Firebase/index"
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
export default {
     setup() {
        const ticket = reactive({ // pega todos os valores dos inputs do html
               nome: '',
               tecnologia: '',
               dataAbertura: '',
               dataLimite: '',
               criador: '' ,
               fechamento: ''

        })
        const rules = computed(() => { // coloca regras para cada input
            return {
                nome: { required, minLength: minLength(3)},
                tecnologia: { required, minLength: minLength(3) },
                dataAbertura: { required, minLength: minLength(6) },
                dataLimite:{ required, minLength: minLength(6) },
                criador: { required, minLength: minLength(3) }, 
               fechamento: { required, minLength: minLength(6) }
            }
        })
        const params = useVuelidate(rules, ticket)


        return {
          ticket,
          params,

        }
    },
     methods: {


        async saveOnDatabase() {
            await addDoc(collection(db, "ticket"), {
               nome: this.ticket.nome,
               tecnologia: this.ticket.nome,
               dataAbertura: this.ticket.nome,
               dataLimite: this.ticket.nome,
               criador: this.ticket.nome ,
               fechamento: this.ticket.nome
            });
        },

    },
}
</script>

<style scoped>
.container {
  font-family: "Roboto Mono", monospace;
  background-color: #0a0a33;
  color: aliceblue;
  width: 100%;
  height: 100%;
  padding: 2vw;
}
.dados {
  background-color: rgb(185, 181, 181);
  width: 50%;
  height: 40%;
  border-radius: 10px;
  padding-left: 1vw;
}
.dados h1 {
  font-size: 20px;
  margin-bottom: 2vh;
  padding-top: 2vh;
  border-bottom: 2px solid rgb(243, 240, 240);
}

.dados label {
  width: 60%;
  height: 60%;
}
input:focus {
  outline: none;
}
.dados input {
  display: flex;
  width: 50%;
  height: 3vh;
  border: none;
  border-radius: 6px;
  background-color: rgb(158, 156, 156);
}
.dados select {
  border: none;
  border-radius: 4px;
  background-color: rgb(158, 156, 156);
  margin-left: 1vh;
}
.periodos {
  background-color: rgb(185, 181, 181);
  width: 50%;
  height: 50%;
  margin-top: 2vh;
  border-radius: 10px;
  padding-left: 1vw;
}
.periodos h1 {
  font-size: 20px;
  margin-bottom: 5vh;
  padding-top: 2vh;
  border-bottom: 2px solid rgb(243, 240, 240);
}
.periodos label {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5vh;
}
.periodos input {
  display: flex;
  width: 50%;
  height: 3vh;
  border: none;
  border-radius: 5px;
  background-color: rgb(158, 156, 156);
}
</style>