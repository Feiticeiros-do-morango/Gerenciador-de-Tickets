<template>
    <div class="main">
     <h1>Cadastre-se</h1>
     <br>
     <p>Preencha os campos corretamente</p>
     <br>
     <input type="text"  placeholder="Digite seu e-mail">
     <br>
     <br>
     <input type="text"  placeholder="Digite seu user name">
     <br>
     <br>
     <input type="password" placeholder="Digite sua senha">
     <br>
     <br>
     <input type="password" placeholder="Confirme sua senha">
     <br>
     <br>
     <button>Cadastrar</button>
     </div>
     
    
 </template>
 
 <script>
 export default {
     
 }
 </script>
 
<style scoped>
    .main {
      
     font-family: 'Roboto Mono', monospace;
     display: flex;
     flex-direction:column;
     justify-content: center;
     align-items: center;
     background-color: #040414;
     color:aliceblue;
     width: 100%;
     height: 100vh; 
        
    }
    .main h1{
     font-size: 30px;
     
    }

    .main p{
     font-size: 10px;
     
    }
    input{
      

     width: 20%;
     height: 5%;
     font-family: 'Roboto Mono', monospace;
     color:aliceblue;
     border: 1px solid white;
     border-radius: 10px;
     background-color:#040414;
    }
    button{
        width: 20%;
 
   padding: 10px;
   border: 1px solid #378BED;
   border-radius: 10px;
   background-color:#040414;
   color: #378BED;
   text-align: left;
   font-size: 10px;
    }
  
</style>