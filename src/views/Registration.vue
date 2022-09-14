<template>
<<<<<<< Updated upstream
    <h1> registration </h1>

    <div class="input-wrapper">
        <div class="icon">
            <iconify-icon icon="akar-icons:person"></iconify-icon>
        </div>
        <input type="text" name="user" id="username" placeholder="Digite seu User Name" v-model="UserName">
    </div>
    <div class="input-wrapper">
        <div class="icon">
            <iconify-icon icon="akar-icons:key"></iconify-icon>
        </div>
        <input type="password" name="senha" id="password" placeholder="Digite sua senha" v-model="senha">
    </div>
    <div class="input-wrapper" id="margin">
        <div class="icon">
            <iconify-icon icon="akar-icons:key"></iconify-icon>
        </div>
        <input type="password" name="confirm" id="confirm" placeholder="Confirme sua senha" v-model="confirmSenha">
    </div>
    </div>
    <div class="registration-button">
        <button @click="registro()">Cadastrar</button>
    </div>
    </form>
=======
    <div class="main">
        <form class="registration-form" @submit.prevent="registrar()">
            <div class="text-area">
                <h1>Cadastre-se</h1>
                <p>Preencha os campos corretamente</p>
            </div>
            <div class="input-area">
                <div class="input-wrapper">
                    <div class="icon">
                        <iconify-icon icon="dashicons:email-alt"></iconify-icon>
                    </div>
                    <input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Digite seu Email" 
                    v-model="state.email" >
                </div>
                <div class="input-wrapper">
                    <div class="icon">
                        <iconify-icon icon="akar-icons:person"></iconify-icon>
                    </div>
                    <input 
                    type="text" 
                    name="user" 
                    id="username" 
                    placeholder="Digite seu UserName" 
                    v-model="state.UserName">
                </div>
                <div class="input-wrapper">
                    <div class="icon">
                        <iconify-icon icon="akar-icons:key"></iconify-icon>
                    </div>
                    <input 
                    type="password" 
                    name="senha" 
                    id="password" 
                    placeholder="Digite sua senha" 
                    v-model="state.senha">
                </div>
                <div class="input-wrapper" id="margin">
                    <div class="icon">
                        <iconify-icon icon="akar-icons:key"></iconify-icon>
                    </div>
                    <input 
                    type="password" 
                    name="confirm" 
                    id="confirm" 
                    placeholder="Confirme sua senha "
                    v-model="state.confirmSenha">
                </div>
            </div>
            <div class="registration-button">
            <button @click="registrar()">Cadastrar</button>
        </div>
        </form>
>>>>>>> Stashed changes
    </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../main"
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, sameAs, minLength } from '@vuelidate/validators'

export default {
    setup (){
        const state = reactive ({
            email: '',
            UserName: '',
            senha: '',
            confirmSenha: ''

        })
        const rules = computed(() => {
            return {
                email: { required, email},
                UserName: { required, minLength: minLength(3)},
                senha: { required, minLength: minLength(6)},
                confirmSenha: { required, sameAs: sameAs(state.senha)}
            }
        })

        const v$ = useVuelidate(rules, state)

        return { 
            state, 
            v$,
        }
    },
    methods: {
        async registrar() {
            const auth = getAuth();
            this.v$.$validate()
            if (!this.v$.$error) {
                alert("Formulário funcionou")
            } else {
                alert("Formulário falhou")
            }
            createUserWithEmailAndPassword(auth, this.email, this.senha).then((userCredential) => {
                //registrado
                this.goTologin();
            })
            console.log(this.confirmSenha)
            await addDoc(collection(db, "usuarios"), {
                email: this.email,
                senha: this.senha,
                UserName: this.UserName
            });
        },
        goTologin() {
            this.$router.push({ name: "login"})
        }
        
    },
}
</script>
<style scoped>
<<<<<<< Updated upstream
=======
.main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #040414;
}

>>>>>>> Stashed changes
.registration-form {
    width: 340px;
    height: 450px;
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
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
}

.input-wrapper {
    width: 100%;
    height: 6vh;
    display: flex;
    justify-content: right;
    align-items: center;
    border-radius: 4.5px;
    border: 1.9px solid #ffffff;
    margin-bottom: 10px;
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

#margin {
    margin-bottom: 0;
}

.icon {
    width: 10%;
    height: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.registration-button {
    width: 100%;
    height: 5.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 5px;
}

.registration-button button {
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

.registration-button button:hover {
    background: #0d0d7489;
    transition: 0.5s ease;
}
.error {
    border: 1px solid #880606;
}
.error-color {
    color: #880606;
}
</style>
