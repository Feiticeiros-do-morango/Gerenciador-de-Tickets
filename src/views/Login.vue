<template>
  <div class="main">
    <form class="login-form" @submit.prevent="login()">
      <div class="text-area">
        <h1>Login</h1>
        <p>Coloque seu login e senha</p>
      </div>
      <div class="input-area">
        <div class="input-wrapper" id="margin">
          <div class="icon">
            <iconify-icon icon="akar-icons:person"></iconify-icon>
          </div>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Usuário ou E-mail"
            v-model="state.email"
          />
        </div>
        <div class="input-wrapper">
          <div class="icon">
            <iconify-icon icon="akar-icons:key"></iconify-icon>
          </div>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            v-model="state.senha"
          />
        </div>
        <div class="recovery">
          <router-link to="/recovery">
            <p>Esqueceu a senha?</p>
          </router-link>
        </div>
      </div>
      <div class="login-button">
        <button @click="login()">Login</button>
      </div>
      <div class="login-with-google">
        <button @click="loginWithGoogle()">
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
        <router-link to="/registration">
          <p>Cadastre-se!</p>
        </router-link>
      </div>
      <div class="comeback">
        <router-link to="/">
          <p>Voltar</p>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { router } from "../router/index"
import { db } from "../Firebase/index.js";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { reactive, computed } from "vue"
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'



export default {
  setup() {
    const state = reactive({
      email: '',
      senha: ''

    })
    const rules = computed(() => {
      return {
        email: { required, email },
        senha: { required, minLength: minLength(6) },
      }
    })

    const v$ = useVuelidate(rules, state)

    return {
      state,
      v$,

    }
  },
  methods: {
    login() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.state.email, this.state.senha).then((data) => {
        this.verifyUser();
        this.goToDashboard();
        localStorage.setItem("token", 'true')
        
      })
    },
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          localStorage.setItem("token", 'true')
          this.goToDashboard();
        })
    },
    goToDashboard() {
      this.$router.push({ name: "dashboard" })
    },
    async verifyUser() {
      const q = query(collection(db, "usuarios"), where("email", "==", this.state.email));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let document = doc.data().UserName
        localStorage.setItem("userName", document)
        
});
    }
    
  }
}
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  background-color: #040414;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 340px;
  height: 500px;
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
  font-size: 44px;
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

.imput-wrapper p {
  color: #ffffff;
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
  margin-bottom: 5px;
}

.login-button button {
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: transparent;
  color: #378cedb9;
  border: 1.9px solid #378bed;
  border-radius: 4.5px;
  text-align: center;
  font-family: "Roboto Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  transition: 0.5s ease-out;
}

.login-button button:hover {
  background: #0d0d7489;
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
  background: #3a3b3eb7;
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
  border: 1px solid #378bed;
  border-radius: 10px;
  padding: 10px;
  margin: auto;
  text-align: center;
  background-color: black;
  color: #378bed;
}

.cadastra {
  justify-content: space-between;
}

.cadastra p,
a {
  font-family: italic;
  font-size: 10px;
  text-decoration: none;
}

.google {
  font-family: "PT Sans", sans-serif;
}

.comeback {
  width: 100%;
  height: 5.5vh;
  margin-top: 10px;
  color: #ffffffb1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.comeback p,
a {
  font-family: "Roboto Mono";
  font-style: normal;
  color: #ffffffb1;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
}
</style>
