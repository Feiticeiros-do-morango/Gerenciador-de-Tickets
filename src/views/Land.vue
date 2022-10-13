<template>
  <div class="main">
    <header>
      <div class="logo">
        <img src="../assets/logoland.png" alt="logo site Go" />
      </div>
      <div class="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#explore">Explorar</a></li>
          <li><a href="#about">Sobre Nós</a></li>
          <li><a href="#contact">Contatos</a></li>
        </ul>
      </div>
    </header>

    <main id="home">
      <div class="left-main">
        <div class="text-area">
          <h1>Tenha Controle Sobre Seu Projetos De TI.</h1>
          <p>
            We provide full transparency of development processes, so you can
            stay on top of you business needs.
          </p>
        </div>
        <div class="button-area">
          <div class="button-wrapper">
            <router-link to="/login">Explore a Plataforma</router-link>
          </div>
        </div>
      </div>
      <div class="right-main">
        <img src="../assets/Work time-amico.svg" alt="LandPage imagem" />
      </div>
    </main>
    <div class="meio">
      <div class="linha-resto"></div>
    </div>
    <section id="explore">
      <div class="section-text">
        <h1>Como Funciona</h1>
        <div class="linha-color"></div>
        <p>Siga os Seguintes passos para entender melhor a Plataforma.</p>
      </div>
      <div class="cards">
        <div class="card1">
          <div class="left-card">
            <div class="icon">
              <iconify-icon
                icon="ci:exit"
                width="34"
                height="34"
                id="iicon"
              ></iconify-icon>
            </div>
            <div class="text-card">
              <h1>Registro / Login</h1>
              <p>Primeiro Entre na sua conta.</p>
              <router-link to="/login"> Entrar na Conta</router-link>
            </div>
          </div>
          <div class="right-card">
            <h1 id="margin-number">1</h1>
          </div>
        </div>
        <div class="card2">
          <div class="left-card">
            <div class="icon">
              <iconify-icon
                icon="material-symbols:create-new-folder"
                width="34"
                height="34"
                id="iicon"
              ></iconify-icon>
            </div>
            <div class="text-card">
              <h1>Criar Projeto</h1>
              <p>Crie seu maravilhoso projeto.</p>
              <router-link to="/login"> Criar Agora </router-link>
            </div>
          </div>
          <div class="right-card">
            <h1>2</h1>
          </div>
        </div>
        <div class="card3">
          <div class="left-card">
            <div class="icon">
              <iconify-icon
                icon="healthicons:health-worker-form-outline"
                width="34"
                height="34"
                id="iicon"
              ></iconify-icon>
            </div>
            <div class="text-card">
              <h1>Organize Projetos</h1>
              <p>Organize agora com perfeição.</p>
              <router-link to="/login"> Ler mais </router-link>
            </div>
          </div>
          <div class="right-card">
            <h1>3</h1>
          </div>
        </div>
      </div>
    </section>
    <div class="meio">
      <div class="linha-resto"></div>
    </div>
    <div class="about" id="about">
      <div class="text-about">
        <h1>Um Pouco Sobre Nós</h1>
        <div class="linha-color"></div>
        <p>Saiba Mais Sobre Nossa Equipe.</p>
      </div>
      <div class="cards-about">
        <div class="card-about">
          <div class="icon-div">
            <iconify-icon
              icon="bi:brush"
              width="34"
              height="34"
              id="about-icon"
            ></iconify-icon>
          </div>
          <div class="text-AboutCard">
            <h1>Designer Gráfico</h1>
            <p>1 Designer Gráfico Atualmente</p>
          </div>
        </div>
        <div class="card-about">
          <div class="icon-div">
            <iconify-icon
              icon="bxs:megaphone"
              width="34"
              height="34"
              id="about-icon"
            ></iconify-icon>
          </div>
          <div class="text-AboutCard">
            <h1>Marketing & Comunicação</h1>
            <p>1 Comunicador Atualmente</p>
          </div>
        </div>
        <div class="card-about">
          <div class="icon-div">
            <iconify-icon
              icon="map:art-gallery"
              width="34"
              height="34"
              id="about-icon"
            ></iconify-icon>
          </div>
          <div class="text-AboutCard">
            <h1>Programadores Front-End</h1>
            <p>4 Programadores Front-End Atualmente</p>
          </div>
        </div>
        <div class="card-about">
          <div class="icon-div">
            <iconify-icon
              icon="bi:gear"
              width="34"
              height="34"
              id="about-icon"
            ></iconify-icon>
          </div>
          <div class="text-AboutCard">
            <h1>Programadores Back-End</h1>
            <p>2 Programadores Back-End Atualmente</p>
          </div>
        </div>
        <div class="card-about">
          <div class="icon-div">
            <iconify-icon
              icon="fa-brands:figma"
              width="34"
              height="34"
              id="about-icon"
            ></iconify-icon>
          </div>
          <div class="text-AboutCard">
            <h1>Tecnologia Design</h1>
            <p>Figma</p>
          </div>
        </div>
        <div class="card-about">
          <div class="icon-div">
            <iconify-icon
              icon="akar-icons:instagram-fill"
              width="34"
              height="34"
              id="about-icon"
            ></iconify-icon>
          </div>
          <div class="text-AboutCard">
            <h1>Tecnologia Marketing & Comunicação</h1>
            <p>Instagram</p>
          </div>
        </div>
        <div class="card-about">
          <div class="icon-div">
            <iconify-icon
              icon="akar-icons:vue-fill"
              width="34"
              height="34"
              id="about-icon"
            ></iconify-icon>
          </div>
          <div class="text-AboutCard">
            <h1>Tecnologia Front-End</h1>
            <p>Vue.js</p>
          </div>
        </div>
        <div class="card-about">
          <div class="icon-div">
            <iconify-icon
              icon="mdi:firebase"
              width="34"
              height="34"
              id="about-icon"
            ></iconify-icon>
          </div>
          <div class="text-AboutCard">
            <h1>Tecnologia Back-End</h1>
            <p>Firebase</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contact" id="contact">
      <div class="info-contact">
        <input type="text" name="contact-name" id="name-contact" placeholder="Seu Nome">
        <input type="text" name="contact-email" id="email-contact" placeholder="Email">
        <input type="text" name="contact-reason" id="reason-contact" placeholder="Razão para Contato">
        <input type="text" name="contact-message" id="message-contact" placeholder="Messagem">
        <div class="button-contact">
          <div class="wrapper-contact">
          <button> Enviar Mensagem </button>
        </div>
        </div>
      </div>
      <div class="location-contact">
        <h1>Onde Estamos</h1>
        <p>Brasil, Blumenau, Proway</p>
        <h1>Telefone</h1>
        <p>+99 99 99 999</p>
        <h1>Email</h1>
        <p>Suporte@Go.com</p>
      </div>
      <div class="image-contact">
        <img src="../assets/loc.png" alt="Localização Go">
      </div>
    </div> 
    <div class="meio-footer">
      <div class="linha-resto"></div>
    </div>
    <footer>
      <div class="links-footer">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#explore">Explorar</a>
          </li>
          <li>
            <a href="#about">Sobre Nós</a>
          </li>
          <li>
            <a href="#contact">Contatos</a>
          </li>
        </ul>
      </div>
      <div class="social-medias">
        <ul>
          <li>
            <a href="#">
            <div class="wrapper-footer">
            <iconify-icon icon="dashicons:facebook-alt" style="color: black;" width="24" height="24"></iconify-icon>
          </div>
        </a>
          </li>
          <li>
            <a href="#">
            <div class="wrapper-footer">
            <iconify-icon icon="akar-icons:instagram-fill" style="color: black;" width="24" height="24"></iconify-icon>
          </div>
        </a>
          </li>
          <li>
            <a href="#">
            <div class="wrapper-footer">
            <iconify-icon icon="akar-icons:twitter-fill" style="color: black;" width="24" height="24"></iconify-icon>
          </div>
        </a>
          </li>
          <li>
            <a href="#">
            <div class="wrapper-footer">
            <iconify-icon icon="akar-icons:behance-fill" style="color: black;" width="24" height="24"></iconify-icon>
          </div>
        </a>
          </li>
        </ul>
      </div>
      <div class="footer-copy">
        <h1>Copyright &copy; 2022.</h1><p>GO</p><h1> .All rights reserved</h1>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  width: 100%;
  height: 430vh;
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
  background-color: #ffffff31;
  border-color: transparent;
}

.meio {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 30px 160px 30px;
}
.meio-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 140px;
  height: 140px;
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

.navbar li {
  position: relative;
  list-style: none;
  padding: 0 4px;
}

.navbar li::after {
  content: "";
  position: absolute;
  background-color: #ffffff;
  height: 2px;
  width: 0;
  left: 0;
  bottom: -4px;
  transition: all 0.4s ease;
}

.navbar li:hover {
  color: #fff;
}

.navbar li:hover::after {
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
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7.5vw 0 10vw 7.2vw;
}

.left-main .text-area {
  width: 100%;
  height: 77%;
  display: flex;
  flex-direction: column;
  align-items: left;
}

.left-main .text-area h1 {
  width: 100%;
  font-family: "Roboto Mono";
  font-size: 64px;
  font-weight: 700;
  text-align: left;
  letter-spacing: 3px;
  color: #ffffff;
  margin-bottom: 15px;
}

.left-main .text-area p {
  width: 100%;
  font-family: "Roboto Mono";
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
  display: flex;
  align-items: center;
}

.button-area .button-wrapper {
  width: 11.2vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #47a0c8;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  transition: background-color 0.4s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  margin-top: 25px;
}

.button-area .button-wrapper:hover {
  background: #479fc8ab;
}

.button-area .button-wrapper a {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: "Roboto Mono";
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
  margin-top: 50px;
  padding: 0 20px 20px 40px;
  display: flex;
  flex-direction: column;
}
section .section-text {
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  padding: 0 0 0 40px;
}
section .section-text h1 {
  width: 100%;
  font-family: "Roboto Mono";
  font-size: 48px;
  font-weight: 600;
  text-align: left;
  letter-spacing: 1px;
  color: #ffffff;
  margin-bottom: 15px;
}
section .section-text p {
  width: 42%;
  font-family: "Roboto Mono";
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 4px;
  text-align: justify;
  color: #b3afafd8;
  margin-top: 20px;
  margin-bottom: 20px;
}

section .section-text .linha-color {
  width: 10%;
  height: 7px;
  border-radius: 3px;
  background-color: #47a0c8;
  border-color: transparent;
}
.cards {
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 20px 20px 20px;
}
.cards .card1,
.card2,
.card3 {
  width: 420px;
  height: 250px;
  display: flex;
  border-radius: 16px;
  background: #333333;
}
.cards .card1 .left-card {
  width: 75%;
  height: 100%;
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: column;
}
.cards .card1 .right-card {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cards .card2 .left-card {
  width: 75%;
  height: 100%;
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: column;
}
.cards .card2 .right-card {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cards .card3 .left-card {
  width: 75%;
  height: 100%;
  padding: 0 0 0 20px;
  display: flex;
  flex-direction: column;
}
.cards .card3 .right-card {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.cards .left-card .icon {
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-radius: 50px;
  padding: 5px;
  background: #47a0c8;
}
.cards .left-card .icon #iicon {
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cards .left-card .text-card {
  width: 100%;
  height: 100px;
  margin-top: 40px;
}
.cards .left-card .text-card h1 {
  font-family: "Roboto Mono";
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-align: justify;
  color: #fff;
  margin-bottom: 20px;
}
.cards .left-card .text-card p {
  font-family: "Roboto Mono";
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1px;
  text-align: justify;
  color: rgba(255, 255, 255, 0.719);
  margin-bottom: 5px;
}
.cards .left-card .text-card a {
  font-family: "Roboto Mono";
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 1px;
  text-align: justify;
  color: #47a0c8;
  text-decoration: none;
}

.cards .right-card h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 150px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.cards .right-card #margin-number {
  margin-left: 32px;
}

.about {
  width: 100%;
  height: 80vh;
  padding: 0 40px 40px 40px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about .text-about {
  width: 100%;
  height: 20vh;
  padding: 0 0 0 40px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}
.about .text-about h1 {
  width: 100%;
  font-family: "Roboto Mono";
  font-size: 64px;
  font-weight: 600;
  text-align: left;
  letter-spacing: 1px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.about .text-about p {
  width: 100%;
  font-family: "Roboto Mono";
  font-size: 18px;
  font-weight: 600;
  margin-top: 35px;
  letter-spacing: 4px;
  text-align: justify;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b3afafd8;
}
.about .text-about .linha-color {
  width: 13%;
  height: 7px;
  border-radius: 3px;
  background-color: #47a0c8;
  border-color: transparent;
}
.about .cards-about {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 50px 0 30px;
}
.about .cards-about .card-about {
  width: 330px;
  height: 150px;
  display: flex;
  padding: 20px 0px 20px 20px;
  gap: 20px;
  align-items: center;
  border-radius: 16px;
  background: #333333;
  transition: 0.3s ease-out;
}
.about .cards-about .card-about:hover {
  background: #479fc8b9;
  transition: 0.5s ease;
}
.about .cards-about .card-about .icon-div {
  width: 64px;
  height: 64px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #47a0c8;
  box-shadow: 0px 0px 2px 0px rgba(37, 37, 37, 0.54);
}
#about-icon {
  color: #fff;
}
.about .cards-about .card-about .text-AboutCard {
  width: 220px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
}
.about .cards-about .card-about .text-AboutCard h1 {
  width: 100%;
  font-family: "Roboto Mono";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.09px;
  color: #ffffff;
  text-align: left;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.about .cards-about .card-about .text-AboutCard p {
  width: 100%;
  font-family: "Roboto Mono";
  font-size: 11px;
  font-weight: 600;
  letter-spacing: -0.13px;
  color: #b3afafd8;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.contact {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #04042060
}
.contact .info-contact {
  width: 20vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
}
.contact .info-contact input {
  height: 5vh;
  font-family: 'Roboto Mono';
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  text-indent: 13px;
  background: #333333;
}
.contact .info-contact input::placeholder {
  font-family: 'Roboto Mono';
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.541);
  text-indent: 13px;
}
.contact .info-contact input:not(:first-child) {
  margin-top: 20px;
}
.contact .info-contact #message-contact {
  margin-bottom: 20px;
}
.contact .info-contact .button-contact {
  width: 20vw;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;

}
.contact .info-contact .button-contact .wrapper-contact {
  width: 8vw;
  height: 100%;
  border-radius: 5px;
  background: #47a0c8;
  
  transition: 0.5s ease-out;
}
.contact .info-contact .button-contact .wrapper-contact:hover {
  transition: 0.5s ease;
  background: #479fc87e;
}
.contact .info-contact .button-contact .wrapper-contact button {
  color: #fff;
  width: 100%;
  height: 100%;
  font-family: 'Roboto Mono';
  font-size: 12px;
  cursor: pointer;
  padding: 5px;
  outline: none;
  background: none;
  border: none;
}
.contact .location-contact {
  width: 20vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
}
.contact .location-contact h1 {
  font-family: 'Roboto Mono';
  font-size: 24px;
  font-weight: 500;
  color: #b3afafd8;
}
.contact .location-contact p {
  font-family: "Roboto Mono";
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-align: justify;
  color: #fff;
  margin-bottom: 25px;
}
.contact .image-contact {
  width: 30vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
}
.contact .image-contact img {
  width: 100%;
  height: 100%;
}
footer {
  width: 100%;
  height: 34vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
footer .logo-footer {
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer .logo-footer img {
  width: 100%;
  height: 100%;
}
footer .links-footer {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
}
footer .links-footer ul {
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
}
footer .links-footer ul li {
  list-style: none;
}
footer .links-footer ul li a {
  font-family: 'Roboto Mono';
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.481);
  text-decoration: none;
  transition: 0.5s ease-out;
}
footer .links-footer ul li a:hover {
  transition: 0.3s ease;
  color: rgb(255, 255, 255);
}
footer .social-medias {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
}
footer .social-medias ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style: none;
 
}
footer .social-medias ul li .wrapper-footer {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #fff;
  transition: 0.3s ease-out;
}
footer .social-medias ul li .wrapper-footer:hover {
  transition: 0.3s ease;
  transform: translateY(-4px);
}
footer .footer-copy {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer .footer-copy h1 {
  font-family: 'Roboto Mono';
  font-size: 12px;
  font-weight: 600;
  color: #fff;
}
footer .footer-copy p {
  font-family: 'Roboto Mono';
  font-size: 12px;
  font-weight: 600;
  color: #47a0c8;
}
</style>
