<template>
  <div class="main">
    <div class="login-form">
      <div class="text-area">
        <h1>login</h1>
        <p>Coloque seu login e senha</p>
      </div>
      <div class="input-area">
        <div class="input-wrapper" id="margin">
          <div class="icon">
            <iconify-icon icon="akar-icons:person"></iconify-icon>
          </div>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Usuário ou E-mail"
          />
        </div>
        <div class="input-wrapper">
          <div class="icon">
            <iconify-icon icon="akar-icons:key"></iconify-icon>
          </div>
          <input type="password" name="user" id="user" placeholder="Senha" />
        </div>
        <div class="recovery">
          <p>Esqueceu a senha?</p>
        </div>
      </div>
      <div class="login-button">
        <button>Login</button>
      </div>
      <div class="login-with-google">
        <button>
          <div class="icon-google">
            <iconify-icon
              inline
              icon="flat-color-icons:google"
              width="20"
              height="20"
            ></iconify-icon>
          </div>
          Sign-in With Google
        </button>
      </div>
      <div class="account-cadastra-se">
        <h1>Não é um membro ainda?</h1>
        <p>Cadastre-se!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  background-color: #040414;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form {
  width: 302px;
  height: 340px;
  padding: 0px 10px 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-area {
  width: 100%;
  height: 15vh;
  margin-bottom: 30px;
  color: #ffffff;
  overflow: hidden;
}
.text-area h1 {
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 63px;
  text-align: center;
}
.text-area p {
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
}
.input-area {
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.input-wrapper {
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: right;
  align-items: center;
  border-radius: 4.5px;
  border: 1.9px solid #ffffff;
}
#margin {
  margin-bottom: 15px;
}
.input-wrapper input {
  width: 90%;
  height: 100%;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 22px;
  color: #ffffffe5;
  background: transparent;
  border: none;
  outline: none;
}
.input-wrapper input::placeholder {
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  color: #ffffffa8;
  user-select: none;
}
.icon {
  width: 10%;
  height: 100%;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.recovery {
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: right;
  align-items: center;
}
.recovery p {
  cursor: pointer;
  font-family: "Roboto Mono";
  font-style: italic;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-right: 2.5px;
}
.login-button,
.login-with-google {
  width: 100%;
  height: 5.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.login-button button {
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: transparent;
  color: #378cedb9;
  border: 1.9px solid #378bed;
  border-radius: 4.5px;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  transition: 0.5s ease-out;
}
.login-button button:hover {
  background: #060624c2;
  transition: 0.5s ease;
}
.login-with-google button {
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  border-radius: 4.5px;
  background: #3a3b3e;
  color: #ffffff;
  transition: 0.5s ease-out;
}
.login-with-google button:hover {
  background: #3a3b3e7a;
  transition: 0.5s ease;
}
.icon-google {
  margin-right: 10px;
}
.account-cadastra-se {
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.account-cadastra-se h1 {
  font-family: "Roboto Mono";
  font-style: italic;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-right: 5px;
}
.account-cadastra-se p {
  cursor: pointer;
  font-family: "Roboto Mono";
  font-style: italic;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  color: #378bed;
}
</style>