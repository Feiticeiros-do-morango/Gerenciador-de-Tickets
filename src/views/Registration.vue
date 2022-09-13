<template>
    <div class="main">
        <form class="registration-form">
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
                <input type="password" name="confirm" id="confirm" placeholder="Confirme sua senha"
                    v-model="confirmSenha">
            </div>
        </form>
        <div class="registration-button">
            <button @click="registro()">Cadastrar</button>
        </div>
    </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../main"

export default {
    name: "Registro",
    data() {
        return {
            userinfo: {
                email: "",
                UserName: "",
                senha: "",
                confirmSenha: ""

            }

        };
    },
    methods: {
        async registro() {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.senha).then((userCredential) => {
                //registrado
                this.$router.replace("login");
            })
            console.log(this.confirmSenha)
            await addDoc(collection(db, "usuarios",), {
                email: this.email,
                senha: this.senha,
                UserName: this.UserName,
                confirmSenha: this.confirmSenha

            });
        }
    },
}
</script>
<style scoped>
.main {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ;
}

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
</style>
