<template>
    <div class="container">
        <div class="dados">
            <h1>Dados</h1>
            <div class="inserir">
            <label for=""> Nome </label>
            <input type="text" id="nome" placeholder="">
            <br>
            <label for="">Tecnologia</label>
            <input type="text" id="tec" placeholder="">
            <br>
            <label for="">Colaboradores</label> 
            <select name="colaboradores" id="colaboradores"></select>
             </div>
        </div>
        <div class="periodos">
            <h1>Periodos</h1>
            <label for=""> Aberto em </label>
            <input type="text" id="nome" placeholder=" ">
            <br>
            <label for=""> Data limite </label>
            <input type="text" id="nome" placeholder=" ">
            <br>
            <label for=""> Criado por </label>
            <input type="text" id="nome" placeholder=" ">
            <br>
            <label for=""> Fechado </label>
            <input type="text" id="nome" placeholder=" ">
            <br>
        </div>
      


    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
     font-family: 'Roboto Mono', monospace;
    background-color: #0a0a33;
    color: aliceblue;
    width: 100%;
    height: 100%;
    padding: 2vw;
}
.dados{

    background-color: rgb(185, 181, 181);
    width: 50%;
    height: 40%; 
    border-radius: 10px;
    padding-left:1vw;
  
    
}
.dados h1{
    font-size:20px;
    margin-bottom: 2vh;
    padding-top: 2vh;
    border-bottom:2px solid rgb(243, 240, 240);
}

.dados label{
width: 60%;
height: 60%;
}
input:focus
{     outline: none; }
.dados input{
display: flex;
width: 50%;
height:3vh;
border: none;
border-radius: 6px;
background-color: rgb(158, 156, 156);
}
.dados select{
    border:none;
    border-radius: 4px;
    background-color: rgb(158, 156, 156);
    margin-left:1vh;
}
.periodos{
    background-color: rgb(185, 181, 181);
    width: 50%;
    height: 50%;
    margin-top:2vh;
    border-radius: 10px;
    padding-left:1vw;
   
}
.periodos h1{
    font-size:20px;
    margin-bottom: 5vh;
    padding-top: 2vh;
    border-bottom:2px solid rgb(243, 240, 240);
}
.periodos label{
display: flex;
flex-direction: row;
justify-content: space-between;
gap:5vh;
}
.periodos input{
    display: flex;
    width: 50%;
    height:3vh;
    border: none;
    border-radius: 5px;
    background-color: rgb(158, 156, 156);
}

</style>