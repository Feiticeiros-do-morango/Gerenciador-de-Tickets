<template>
   <div class="main">
      <div class="componente-login">
         <h1>Login</h1>
         <p>Digite seu Login e Senha</p>
         <input type="text" id="userlogin" placeholder="Nome ou e-mail">
         <label for="userlogin"><iconify-icon icon="akar-icons:key"></iconify-icon></label>
         <br>
         <input type="text" placeholder="Senha">
         <h5>Esqueceu a Senha?</h5>
         <div class="login">
            <button>Login</button>
         </div>
         <br>
         <button type="button" class="login-with-google-btn">
            Sign in with Google
         </button>
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
.main {
   font-family: 'Roboto Mono', monospace;
   display: flex;
   background-color: #040414;
   justify-content: center;
   align-items: center;
   color: aliceblue;
   width: 100%;
   height: 100vh;
}

.main h1 {
   font-family: 'Roboto Mono';
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 63px;
   text-align: center;
   color: #FFFFFF;
   position: relative;
   width: 100%;
}

.main p {
   font-size: 15px
}

.main h5 {
   font-family: 'Roboto Mono';
   font-style: italic;
   font-weight: 400;
   font-size: 10px;
   line-height: 24px;
}

.componente-login {
   text-align: center;
   width: 500px;
   height: auto;

}

input {
   width: 18vw;
   height: 4.5vh;
   outline: none;
   padding: 0 10px;
   margin-top: 2vh;
   border: 1px solid #FFFFFF;
   border-radius: 10px;
   color: #fff;
   background-color: black;
}

.login-with-google-btn {
   cursor: pointer;
   transition: background-color .3s, box-shadow .3s;
   padding: 12px 12px 12px 42px;
   border: none;
   border-radius: 5px;
   box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
   color: #757575;
   font-size: 14px;
   font-weight: 500;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
   background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
   background-color: #3A3B3E;
   background-repeat: no-repeat;
   background-position: 12px 11px;
   text-align: center;
}

.login-with-google-btn:hover {
   background-color: #378ced5a;
}

button {
   width: 50%;
   padding: 10px;
   border: 1px solid white;
   border-radius: 10px;
   background-color: black;
   color: white;
   text-align: left;
   font-size: 10px;
}

.login button {
   border: 1px solid #378BED;
   border-radius: 10px;
   padding-top: 15px;
   margin: auto;
   text-align: center;
   background-color: black;
   color: #378BED;
   font-size: 12px;
}

.cadastra {
   justify-content: space-between;
}

.cadastra p {
   font-size: 10px;
   font-style: italic;

}

.cadastra span {
   color: #378BED;
}
</style>