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
  background-color: #b0b0b0;
 min-width: 60px;
 width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tecnologia button {
  width: 8vh;
  height: 2vh;
  margin-left: 1vh;
  margin-top: 1vh;
  border-radius: 5vh;
  border: none;
  font-family: "Roboto Mono";
  font-size: 10px;
}
.p-inputtext{
    padding: 0.1rem 0.75rem;
    background: #DEDEDE;
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
  width: 10vh;
  height: 2vh;
  font-size: 10px;
  margin-left: 1vh;
  margin-top: 1vh;
  border-radius: 5vh;
  flex-direction: row;
  border: none;
  font-family: "Roboto Mono";
}
.andamento ul {
  list-style: none;
}
</style>