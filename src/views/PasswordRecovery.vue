<template>
    <div class="main-recovery">
        <div class="recovery">
            <div class="text-area">
                <h1>Esqueci minha senha</h1>
                <p>Para redefinir sua senha, informe sua conta de e-mail</p>
            </div>
            <div class="input-area">
                <div class="input-wrapper">
                    <div class="icon">
                        <iconify-icon icon="carbon:email"></iconify-icon>
                    </div>
                    <input type="text" name="Email" id="email" placeholder="Email">
                </div>
            </div>
            <div class="button-area">
                <div class="confirm-button">
                    <button>Próximo ></button>
                </div>
            </div>
            <div class="comeback">
                <p>Voltar</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-recovery {
    width: 100%;
    height: 100vh;
    background-color: #040414;
    display: flex;
    justify-content: center;
    align-items: center;
}

.recovery {
    width: 340px;
    height: 450px;
    padding: 0px 10px 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.text-area {
    width: 100%;
    height: 20vh;
    margin-bottom: 15px;
    color: #ffffff;
    overflow: hidden;
}

.text-area h1 {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    text-align: center;
    line-height: 63px;
    text-align: center;
    margin-bottom: 25px;
}

.text-area p {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
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
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4.5px;
    border: 1.9px solid #ffffff;
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
.button-area {
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.confirm-button {
    width: 100%;
    height: 6vh;
    display: flex;
    justify-content: center;
    align-items: center;
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

.confirm-button button {
    width: 100%;
    height: 100%;
    color: #378bed;
    cursor: pointer;
    background: transparent;
}

.confirm-button button:hover {
    background: #0d0d7489;
    transition: 0.5s ease;
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
.comeback p {
    font-family: "Roboto Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
}
</style>