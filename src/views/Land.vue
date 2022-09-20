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
                    <router-link to="/registration"><button>Registre-se</button></router-link>
                </div>
                <div class="login-button">
                    <router-link to="/login"><button>Login</button></router-link>
                </div>
            </div>
        </header>
        <main id="home">
            <div class="left-main">
                <h1>Community Driven Ecosystem</h1>
                <p>Our Blockchain offers a wide variety of features and tools us to level with enterprise-grade aplication.</p>
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
    height: 100vh;
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
    justify-content: center;
    align-items: center;

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
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9vw 0 10vw 7.2vw;
}
.left-main h1 {
    width: 100%;
    font-family: 'Roboto Mono';
    font-size: 48px;
    font-weight: 700;
    text-align: left;
    color: #ffffff;
    margin-bottom: 15px;
}
.left-main p {
    width: 100%;
    font-family: 'Roboto Mono';
    font-size: 18px;
    font-weight: 600;
    text-align: justify;
    color: #b3afafd8;
}
.right-main {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.right-main img {
    width: 100%;
    height: 100%;
}
</style>