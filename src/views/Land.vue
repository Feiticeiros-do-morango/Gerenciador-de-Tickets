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
            <div class="loginAndRe">
                <div class="register-button">
                    <router-link to="/registration"><button @click="vimDaLand()">Registre-se</button></router-link>
                </div>
                <div class="login-button">
                    <router-link to="/login"><button>Login</button></router-link>
                </div>
            </div>
        </header>
        <main id="home">
            <div class="left-main">
                <div class="text-area">
                <h1>Community Driven Ecosystem</h1>
                <p>Our Blockchain offers a wide variety of features and tools us to level with enterprise-grade aplication.</p>
            </div>
                <section>
                    <div class="enter-plat">
                        <div class="button-wrapper">
                        <router-link to="/login">
                            <button>Comece sua Experiência</button>
                        </router-link>
                        </div>
                        <div class="explorer-plat">
                            <router-link to="/login">
                                <h1>Explore a Plataforma <p> > </p> </h1>
                                
                            </router-link>
                        </div>
                    </div>
                </section>
            </div>

            <div class="right-main">
                <img src="../assets/LandPage.svg" alt="LandPage imagem">
            </div>
        </main>
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
    background-color: #040414;
}

header {
    width: 100%;
    height: 15vh;
    display: flex;
    justify-content: space-around;
    border-bottom: 0.8px solid rgba(95, 95, 95, 0.488);
}

.logo {
    width: 130px;
    height: 100%;
    display: flex;
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
}

.navbar ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 45px;
}

.navbar ul li a {
    font-family: "Roboto Mono";
    font-weight: 500;
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

.login-button {
    width: 6.5vw;
    height: 42px;
    display: flex;
    color: #fff;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 10px 0px 10px 0px;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-out;

}
.login-button:hover {
    background: #ffffff31;
    transition: 0.5s ease;
}

.register-button {
    width: 9vw;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.login-button a {
    width: 100%;
    height: 100%;
    color: #fff;
    cursor: pointer;
    background: transparent;
    font-family: 'Roboto Mono';
    font-size: 16px;
    font-weight: 500;
}

.login-button a button {
    width: 100%;
    height: 100%;
    color: #fff;
    cursor: pointer;
    border: none;
    background: transparent;
    font-family: 'Roboto Mono';
    font-size: 16px;
    font-weight: 500;
}

.register-button button {
    width: 100%;
    height: 100%;
    color: #fff;
    cursor: pointer;
    border: none;
    background: transparent;
    font-family: 'Roboto Mono';
    font-size: 16px;
    font-weight: 500;

}
main {
    width: 100%;
    height: 85%;
    display: flex;
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
    height: 100%;
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
    letter-spacing: 2px;
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
section {
    width: 100%;
    height: 100%;
    display: flex;
    margin-top: 25px;
}
section .enter-plat {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2vw;
    padding: 15px 15px 15px 0px;
}
section .enter-plat .button-wrapper {
    width: 50%;
    height: 100%;
    display: flex;
    border: 1px solid #fff;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    transition: 0.5s ease-out;
}
section .enter-plat .button-wrapper:hover {
    background: #ffffff19;
    transition: 0.5s ease;
}
section .enter-plat .button-wrapper button {
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: center;
    background: transparent;
    font-family: 'Roboto Mono';
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.5px;
    border: none;
}
section .enter-plat .explorer-plat {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
}
section .enter-plat .explorer-plat a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    text-decoration: none;
}
section .enter-plat .explorer-plat h1 {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    font-family: 'Roboto Mono';
    font-size: 16px;
    font-weight: 600;
    
}
section .enter-plat .explorer-plat p {
    width: 10%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto Mono';
    font-size: 20px;
}
</style>