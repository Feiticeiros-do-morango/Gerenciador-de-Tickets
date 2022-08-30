<template>
  <div class="navbar">
    <div class="identificacao">
      <p>Nome Completo</p>
      <p>Cargo</p>
    </div>
    <div class="informacao">
      <span>Projeto</span>
      <span>Time</span>
    </div>
    <div class="itens">
      <ul>
        <li>Dashboard</li>
        <li>Meus Tickets</li>
        <li>Times</li>
        <li>Projetos</li>
        <li>Estatísticas</li>
        <li>Configuração</li>
      </ul>
    </div>
    <div class="dados">
      <p>Nome</p>
      <p>Empresa</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.identificacao {
  padding-left: 25%;
}
.identificacao p {
  margin: 0;
}
.informacao {
  display: flex;
  justify-content: space-between;
  margin: 5% 12%;
}
.navbar {
  width: 20%;
  height: 98vh;
  font-family: "Roboto Mono";
  background-color: black;
  color: white;
  margin-left: 0;
}

.itens li {
  list-style: none;
  padding: 5%;
}
.dados {
    margin-top: 40vh;
    margin-left:10vh;
}
.dados p{
    vertical-align: bottom;
    margin-bottom: 0;
    margin-top:2% ;
}
</style>