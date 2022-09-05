<template>

  <div class="container">
    <div class="tecnologia">
      <ul>
        <button><li>Dev</li></button>
        <button><li>Infra</li></button>
        <button><li>Eng</li></button>
        <button><li>Design</li></button>
      </ul>
    </div>
    <div class="pesquisa">
      <span class="p-input-icon-right">
        <i class="pi pi-search" />
        <InputText type="text" v-model="value4" />
      </span>
    </div>
    <div class="andamento">
      <ul>
        <button><li>Disponíveis</li></button>
        <button><li>Em Progresso</li></button>
        <button><li>Análise</li></button>
        <button><li>Finalizados</li></button>
      </ul>
    </div>
  </div>
 
</template>

<script>
import InputText from "primevue/inputtext";
export default {
  components: { InputText },
};
</script>

<style scoped>
.container {
  background-color: #F2F2F2;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: left;
  align-items: center;
}


.tecnologia button {
  width: 10vh;
  height: 2vh;
  margin-left: 3vh;
  margin-top: 1vh;
  border-radius: 5vh;
  border: none;
  font-family: "Roboto Mono";
  font-size: 10px;
  background-color: #D9D9D9;
}
.p-inputtext{
    padding: 0.1rem 0.75rem;
    background: #D9D9D9;
    border: none;
}
.p-inputtext:enabled:focus{
   border-color: transparent;
       box-shadow: 0 0 0 0;
}
.p-inputtext:enabled:hover{
   border-color: transparent;
}

.tecnologia ul {
  list-style: none;
}
.andamento {
  height: 8vh;
  width: 30vh;

}
.andamento button {
  width: 15vh;
  height: 2vh;
  font-size: 10px;
  margin-top: 1.5vh;
  border-radius: 5vh;
  flex-direction: row;
  border: none;
  font-family: "Roboto Mono";
  background-color: #D9D9D9;
}
.andamento ul {
  list-style: none;
  padding: 0.05px;
  margin-right: 10px;
}
</style>