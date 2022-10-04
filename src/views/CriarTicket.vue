<template>
    <div>
    
<Button label="Show" icon="pi pi-external-link" @click="openModal" />
<Dialog header="Novo Ticket" :visible.sync="displayModal" :containerStyle="{width: '50vw'}" :modal="true">
<section>
  <form>
 
            <div>
            <label for=""> Assunto </label>
            <input type="text" id="nome" placeholder="">
           </div>
           <div>
            <label for="">Tecnologia</label>
            <input type="text" id="tec" placeholder="">
           </div>
           <div>
            <label for="">Colaboradores</label> 
         
            </div>
            <div>
            <label for=""> Aberto em </label>
            <input type="text" id="nome" placeholder=" ">
            </div>
            <div>
            <label for=""> Data limite </label>
            <input type="text" id="nome" placeholder=" ">
            </div>
            <div>
            <label for=""> Criado por </label>
            <input type="text" id="nome" placeholder=" ">
          </div>
          <div>
             <input type="submit" value="Enviar">
          </div>
            </form>
            </section>
        </Dialog>
        
        <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
        <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
   
    </div>


</template>

<script>
 import Dialog from 'primevue/dialog';
export default {
    components: { Dialog },
    data() {
        return {
            displayModal: true
        }
},
methods: {
    openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
    
    }
} 
}

</script>

<style scoped>
*{
  margin:0;
  padding: 0;
}
section{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
}
form div{
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}
form input{
  outline: unset ;
}

.p-button {
    margin: 0 .5rem 0 0;
    min-width: 10rem;
}

p {
    margin: 0;
}

.confirmation-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* .container{
     font-family: 'Roboto Mono', monospace;
    background-color: #0a0a33;
    color: aliceblue;
    width: 100%;
    height: 100%;
    padding: 2vw;
}
.dados {
  background-color: rgb(185, 181, 181);
  width: 50%;
  height: 40%;
  border-radius: 10px;
  padding-left: 1vw;
}
.dados h1 {
  font-size: 20px;
  margin-bottom: 2vh;
  padding-top: 2vh;
  border-bottom: 2px solid rgb(243, 240, 240);
}

.dados label {
  width: 60%;
  height: 60%;
}
input:focus {
  outline: none;
}
.dados input {
  display: flex;
  width: 50%;
  height: 3vh;
  border: none;
  border-radius: 6px;
  background-color: rgb(158, 156, 156);
}
.dados select {
  border: none;
  border-radius: 4px;
  background-color: rgb(158, 156, 156);
  margin-left: 1vh;
}
.periodos {
  background-color: rgb(185, 181, 181);
  width: 50%;
  height: 50%;
  margin-top: 2vh;
  border-radius: 10px;
  padding-left: 1vw;
}
.periodos h1 {
  font-size: 20px;
  margin-bottom: 5vh;
  padding-top: 2vh;
  border-bottom: 2px solid rgb(243, 240, 240);
}
.periodos input{
    display: flex;
    width: 50%;
    height:3vh;
    border: none;
    border-radius: 5px;
    background-color: rgb(158, 156, 156);
} */



</style>