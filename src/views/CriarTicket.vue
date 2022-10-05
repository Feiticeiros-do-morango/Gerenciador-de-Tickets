<template>
    <div>

        <Button label="Show" icon="pi pi-external-link" @click="openModal" />
        <Dialog header="Novo Ticket" :visible.sync="displayModal" :containerStyle="{width: '50vw'}" :modal="true">
           
                <section>
                    <form>
                        <div class="create">
                        <div class="a">
                            <label for=""> Assunto </label>
                            <input type="text" id="assunto" placeholder="" v-model="ticket.assunto" >
                        </div>
                        <div>
                            <label for="">Tecnologia</label>
                            <input type="text" id="tecnologia" placeholder=""  v-model="ticket.tecnologia">
                        </div>
                        <div>
                            <label for="">Colaboradores</label>
                            <select nagme="colegas" id="colegas"  v-model="ticket.colaboradores"></select>

                        </div>
                   
                        <div>
                            <label for=""> Data limite </label>
                            <input type="text" id="nome" placeholder=" "  v-model="ticket.dataLimite">
                        </div>
                        <div>
                            <label for=""> Criado por </label>
                            <input type="text" id="nome" placeholder=" "  v-model="ticket.criador">
                        </div>
                        <div>
                            <label for=""> Prioridade </label>
                            <select name="" id=""  v-model="ticket.prioridade"></select>
                        </div>
                        <div>
                            <label for=""> Tipo</label>
                            <select name="" id="" v-model="ticket.tipo"></select>
                        </div>
                        <div class="enviar">
                            <input type="submit" value="Enviar">
                        </div>
                   
            </div>
            <!-- <div class="ticket">
                <div class="minTop">
                    <p>Título-Título-Título-</p>
                    <p>000000000000</p>
                </div>
                <div class="minbotton">
                    <p>Tecnologia/Tecnologia</p>
                </div>   
            </div> -->
        </form>
        </section>
        </Dialog>



        <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text" />
        <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />

    </div>


</template>

<script>
import Dialog from 'primevue/dialog';
import { collection, addDoc, } from "firebase/firestore";
import { db, auth } from "../Firebase/index"
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
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

        },
         setup() {
        const ticket = reactive({ // pega todos os valores dos inputs do html
               nome: '',
               tecnologia: '',
               dataAbertura: '',
               dataLimite: '',
               criador: '' ,
               fechamento: ''
        })
        const rules = computed(() => { // coloca regras para cada input
            return {
                nome: { required, minLength: minLength(3)},
                tecnologia: { required, minLength: minLength(3) },
                dataAbertura: { required, minLength: minLength(6) },
                dataLimite:{ required, minLength: minLength(6) },
                criador: { required, minLength: minLength(3) }, 
               fechamento: { required, minLength: minLength(6) }
            }
        })
        const params = useVuelidate(rules, ticket)
        return {
          ticket,
          params,
        }
    },
     methods: {
        async saveOnDatabase() {
            await addDoc(collection(db, "ticket"), {
               nome: this.ticket.nome,
               tecnologia: this.ticket.nome,
               dataAbertura: this.ticket.nome,
               dataLimite: this.ticket.nome,
               criador: this.ticket.nome ,
               fechamento: this.ticket.nome
            });
        },
    },
}
    }
}

</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

section {
    display: flex;
    flex-direction: row;
    height: 40vh;
    width: 40vw;
    /* grid-template-columns: 6fr 6fr;
    grid-template-areas: "form ticket"; */

}

/* .create {
    grid-area: form;
    display: flex;
    flex-direction: column;
   width: 80%;
}

.ticket {
    grid-area: ticket;
    display: flex;
    flex-direction: column;
     width: 80%;
} */

form div {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
}

form input {
    outline: unset;
    background-color: rgb(201, 200, 200);
    border: none;
    border-radius: 6px;
    color: white;
    padding: 0.25vh;
    font-weight: bold;
}

form select {
    outline: unset;
    background-color: rgb(201, 200, 200);
    border: none;
    border-radius: 6px;
    color: white;
    padding: 0.25vh;
    font-weight: bold;
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

.enviar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8vw;
    padding-top: 2vh;
    color: white;
}

.enviar input {
    background-color: #5c677d;
    padding: 1vh;
}
</style>