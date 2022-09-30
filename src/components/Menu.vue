<template>

  <div class="container">
    <div class="tecnologia menu">
      <button>Dev</button>
      <button>Infra</button>
      <button>Eng</button>
      <button>Design</button>
    </div>
    <div class="pesquisa menu">
      <span class="p-input-icon-right">
        <i class="pi pi-search" style="color: black"/>
        <InputText type="text" />
      </span>
    </div>
    <div class="andamento">
      <div>
        <button>Disponíveis</button>
        <button>Em Progresso</button>
      </div>
      <div>
        <button>Análise</button>
        <button>Finalizados</button>
      </div>
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
  background-color: #dddddd6e;
  width: 100%;
  height: 100%;
  display: grid;
  margin-bottom:15px;
  grid-template-columns: 4fr 4fr 4fr;
  grid-template-areas: "tecnologia pesquisa andamento";

}

.menu {
  display: flex;
  margin: auto;
  text-align: center;

}

.tecnologia {
  grid-area: tecnologia;
  display: flex;
  margin: auto;
  text-align: center;
   width: 80%;

}

.tecnologia button {
  width: 10vh;
  height: 3vh;
  min-width: 50px;
  min-height: 20px;
  margin-left: 3vh;
  border-radius: 1vh;
  border: none;
  font-family: "Roboto Mono";
  font-size: 10px;
  background-color: #d9d9d9;
}

.pesquisa {
  grid-area: pesquisa;
  width: 80%;

}
.pesquisa span{
  width: 100%;
}

.andamento {
  grid-area: andamento;
  margin: auto;
  text-align: center;
  width: 80%;
}

.andamento div {
  display: flex;
  gap: 10px;
  margin-top: 5px;
}
.andamento button {
  width: 20vh;
  height: 3vh;
  min-width: 70px;
  min-height: 10px;
  font-size: 10px;
  border-radius: 1vh;
  flex-direction: row;
  border: none;
  font-family: "Roboto Mono";
  background-color: #d9d9d9;
}

.p-inputtext {
  width: 100%;
  padding: 0.1rem 0.75rem;
  background: #d9d9d9;
  border: none;
  grid-area: andamento;

}
.p-inputtext:enabled:focus {
  border-color: transparent;
  box-shadow: 0 0 0 0;
}
input, select, textarea{
    color: #000000;
}

textarea:focus, input:focus {
    color: #000000;
}

</style>