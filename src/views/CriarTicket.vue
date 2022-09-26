<template>
    <div class="container">
        <div class="dados">
            <h1>Dados</h1>
            <label for=""> Nome </label>
            <input type="text" id="nome" placeholder="Nome :">
            <br>
            <label for="">Tecnologia</label>
            <input type="text" id="tec" placeholder="Tecnologia:">
            <br>
            <label for="">Colaboradores</label>
          
            <select name="colaboradores" id="colaboradores"></select>
           
            
        </div>
        <div class="periodos">
            <h1>Periodos</h1>
            <label for=""> Aberto em </label>
            <input type="text" id="nome" placeholder="Nome :">
            <br>
            <label for=""> Data limite </label>
            <input type="text" id="nome" placeholder="Nome :">
            <br>
            <label for=""> criado por </label>
            <input type="text" id="nome" placeholder="Nome :">
            <br>
            <label for=""> Fechado </label>
            <input type="text" id="nome" placeholder="Nome :">
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
    height: 100vh;
    padding: 5vw;
}
.dados{
    background-color: rgb(185, 181, 181);
    width: 100%;
    height: 40%; 
    border-radius: 10px;
    padding-left:2vw;
    
}
.dados h1{
    font-size:20px;
    margin-bottom: 5vh;
    padding-top: 2vh;
    border-bottom:2px solid rgb(243, 240, 240);
}
.dados label{
width: 60%;
height: 60%

}
.dados input{
display: flex;
width: 50%;
height:3vh;
}
.periodos{
    
    background-color: rgb(185, 181, 181);
    width: 100%;
    height: 60%;
    margin-top:5vh;
    border-radius: 10px;
    padding-left:2vw;
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
}

</style>