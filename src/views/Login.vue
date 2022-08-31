<template>
   <div class="main">
      <div class="componente-login">
    <h1>Login</h1>
    <p>Digite seu Login e Senha</p>
   <button>Nome ou e-mail</button>
    <br>
    <br>
    <button> Senha </button>
    <h5> Esqueceu a Senha? </h5>
    <div class="login">
    <button>Login</button>
    </div>
    <br>
    <br>
    <button> sign-in with Google </button> 
    <div class="cadastra">
    <p>Não é um membro ainda? <span>Cadastre-se</span></p>
    </div>
    </div>
   </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>


.main{
   font-family: 'Roboto Mono', monospace;
   display: flex;
   margin: auto;
   background-color: black;
   align-items: center;
   justify-content: center;
   color: aliceblue;
   width: 100%;
   height: 100vh; 
}
.main p{
   font-size: 15px
}
.main h5{
   font-size:10px;
   font-family: italic;
   margin-left:30%
}
.componente-login{
margin-top: 3%;
margin-right:5% ;
text-align: center;
width: 515px;
height: 576px;

}
input{
  width: 50%;
  height: 5%;
  border: 1px solid white;
  border-radius: 10px;
  background-color: black;
}

.google{
   font-family: 'PT Sans', sans-serif;
   margin: auto;
   text-align: center;
 
}
button{
   width: 50%;
   padding: 10px;
   border: 1px solid white;
   border-radius: 10px;
   background-color:black ;
   color: white;
   text-align: left;
   font-size: 10px;
}
.login button{  
   border: 1px solid #378BED;
   border-radius: 10px;
   padding: 10px;
   margin: auto;
   text-align: center;
   background-color:black;
   color:#378BED ;
     
}
.cadastra{
   justify-content: space-between ;
}
.cadastra p{
   font-family: italic;
   font-size: 10px;

   
}
.cadastra span{
   color:#378BED  ;
}

</style>