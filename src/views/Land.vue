<template>
    <div class="main">
        <header>
            <div class="logo">
                <img src="../assets/logoland.png" alt="logo site Go">
            </div>
            <div class="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Explorer</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </header>
        <div class="linha"> </div>
        <main id="home">
            <div class="left-main">
                <div class="text-area">
                    <h1>Tenha Controle Sobre Seu Projetos De TI.</h1>
                    <p>We provide full transparency of development processes, so you can stay on top of you business
                        needs.</p>
                </div>
                <div class="button-area">
                    <div class="button-wrapper">
                        <router-link to="/login">Explore a Plataforma</router-link>
                    </div>
                </div>
            </div>
            <div class="right-main">
                <img src="../assets/LandPage.svg" alt="LandPage imagem">
            </div>
        </main>
        <div class="meio">
            <div class="linha-resto"> </div>
        </div>
        <section>
            <div class="left-section">
                <img src="../assets/Next steps-pana.svg" alt="Background Land">
            </div>
            <div class="right-section">

            </div>
        </section>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
    width: 100%;
    height: 200vh;
    z-index: 0;
    background-color: #040414;
}

header {
    width: 100%;
    height: 15vh;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    background: #040414;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.8px solid rgba(95, 95, 95, 0.488);
}

.linha {
    width: 100%;
    height: 0.5px;
    border-radius: 2px;
    background-color: #ffffff1a;

}

.linha-resto {
    width: 70%;
    height: 1px;
    border-radius: 2px;
    background-color: #ffffff6e;
    border-color: transparent;
}

.meio {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
}

.logo {
    width: 130px;
    height: 100%;
    display: flex;
    margin-left: 6.5vw;
    justify-content: center;
    align-items: center;
    user-select: none;
}

.logo img {
    width: 100%;
    height: 100%;
}

.navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 75px;
}

.navbar ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 65px;
}

.navbar ul li a {
    font-family: "Roboto Mono";
    font-weight: 400;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    transition: 0.5s ease-out;
}

.loginAndRe {
    width: 20vw;
    height: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;
}

li {
    position: relative;
    list-style: none;
    padding: 0 4px;
}

li::after {
    content: '';
    position: absolute;
    background-color: #ffffff;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -4px;
    transition: all 0.4s ease;
}

li:hover {
    color: #fff;
}

li:hover::after {
    width: 100%;
}

main {
    width: 100%;
    height: 90vh;
    display: flex;
    overflow: hidden;
}

.left-main {
    width: 50%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9vw 0 10vw 7.2vw;
}

.left-main .text-area {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: left;
}

.left-main .text-area h1 {
    width: 100%;
    font-family: 'Roboto Mono';
    font-size: 48px;
    font-weight: 700;
    text-align: left;
    letter-spacing: 3px;
    color: #ffffff;
    margin-bottom: 15px;
}

.left-main .text-area p {
    width: 100%;
    font-family: 'Roboto Mono';
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 4px;
    text-align: justify;
    color: #b3afafd8;
}

.right-main {
    width: 50%;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.right-main img {
    width: 100%;
    height: 100%;
    user-select: none;
}

.button-area {
    width: 100%;
    height: 50px;
}

.button-area .button-wrapper {
    width: 11.2vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0451ea;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    transition: background-color 0.4s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

.button-area .button-wrapper:hover {
    background: rgb(23, 8, 97);
}

.button-area .button-wrapper a {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: 'Roboto Mono';
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    border: none;
    background: transparent;
}

section {
    width: 100%;
    height: 80vh;
    display: flex;
    
}
section .left-section {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
section .left-section img {
    width: 100%;
    height: 100%;
    user-select: none;
}

section .right-section {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>