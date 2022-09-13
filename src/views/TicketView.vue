<template>
<div class="container">   
<div class="sectionA">
   <h1>NOVO TICKET</h1>
    <p>Dev/Javascript</p>
  <p>ID nº </p>
  <p>Aberto em : 10/08/2022</p>
  <p>Data limite: 21/08/2022 </p>
  <select name="criado" id="">Criado por</select>
  <div class="quadrado">
    <p>Descrição</p>
    <span>Anexar Arquivo</span>
  </div>
    </div>
<div class="sectionB">

</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 94vh;
    background-image: url('../assets/backgroundTicktView.jpg');
    background-size:205vh;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px 30px 0px 0px;
    display: grid;
    grid-template-columns: 8fr 4fr ;
    grid-template-areas: "sectionA sectionB";
   
  
}

.sectionA {
    color:gray;
     grid-area:sectionA;
     padding:2vh;
     margin-left:4vh;
}
.quadrado{
background: rgb(207, 206, 206);
width: 60%;
height: 50%;
margin-top:4vh;
border-radius: 10px;
}
.sectionB{
    color: gray;
    grid-area:sectionB;

}

</style>