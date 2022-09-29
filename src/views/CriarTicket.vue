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
        </div>



    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container {
    
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    align-items: center;
    font-family: 'Roboto Mono', monospace;
    background: url("../assets/background.png"), rgb(193, 193, 193);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.541);
    border-radius: 50px 50px 0px 0px;
    background-size: 50%;
  
   
    color: rgb(255, 255, 255);
    width: 80vw;
    height: 100vh;
    padding: 1vw;
}

.dados {

    background-color: #040414;
    width: 40vw;
    height: auto;
    border-radius: 20px;
    padding: 20px;


}

.dados h1 {
    font-size: 30px;
    margin-bottom: 2vh;
    padding-top: 2vh;

}

.dados input {
    display: flex;
    width: 50%;
    height: 3vh;
    border: none;
    border-radius: 6px;
    background-color: rgb(197, 195, 195);
    
}

.dados select {
    border: none;
    border-radius: 4px;
    background-color: rgb(158, 156, 156);
    margin-left: 1vh;
}

.periodos {
    background-color: #040414;
    width: 40vw;
    height: 40vh;
    border-radius: 20px;
    padding-left: 1vw;

}

.periodos h1 {
    font-size: 30px;
    margin-bottom: 2vh;
    padding-top: 2vh;
    
}

.periodos input {
    display: flex;
    width: 50%;
    height: 3vh;
    border: none;
    border-radius: 5px;
    background-color: rgb(197, 195, 195);
}

input:focus {
    outline: none;
}
</style>