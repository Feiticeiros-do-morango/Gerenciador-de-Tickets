<template>
<div class="container">   
<div class="sectionA">
  <div class="inicio">
   <h1>NOVO TICKET</h1>
   <button>Branches</button>
   </div>
   <div class="tech">
    <p>Dev/Javascript</p>
    </div>
  <p>ID nº </p>
  <p>Aberto em : 10/08/2022</p>
  <p>Data limite: 21/08/2022 </p>
  <div class="criado">
 <p>Criado por</p> 
 </div>
  <div class="quadrado">
    <p>Descrição</p>
    <div class="quadradob">
    <p>Anexar Arquivo</p>
    </div>
  </div>
    </div>
<div class="sectionB">
  <p>Colaboradores</p>
  <p>Comentários...</p>
  <p>Fechado em: 20/08/2022</p>

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
    box-shadow: inset 0px 4px 4px rgba(184, 182, 182, 0.25);
    border-radius: 30px 30px 0px 0px;
    display: grid;
    grid-template-columns: 8fr 4fr ;
    grid-template-areas: "sectionA sectionB";
  
}
.inicio{
  display: flex;
  gap:50vh;
  color: black
}
.inicio button{
  border-radius: 20px;
  width: 15vh;
  border:none;
  background-color:rgba(186, 183, 183, 0.762)
  
}

.sectionA {
    color:gray;
     grid-area:sectionA;
     padding:2vh;
     margin-left:4vh;
     color:black;
     
}
.tech{
  color: gray;
}
.quadrado{
background: rgb(207, 206, 206);
width: 60%;
height: 50%;
margin-top:4vh;
border-radius: 10px;
}
.quadrado p{
  padding: 1vh;
}
.quadradob p{
  text-align: left;
  padding-top: 35vh;
}
.sectionB{
    color: rgba(186, 186, 186, 0.504);
    grid-area:sectionB;
    color:black;
    display: flex;
    flex-direction: column;
    gap:20vh

}


</style>