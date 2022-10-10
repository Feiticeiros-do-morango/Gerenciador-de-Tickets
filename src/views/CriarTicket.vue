<template>
    <div>
        <Button label="Show" icon="pi pi-external-link" @click="openModal" />
        <Dialog header="Novo Ticket" :visible.sync="displayModal" :containerStyle="{ width: '50vw' }" :modal="true">
            <section>
                <form>
                    <div class="create">
                        <div class="a">
                            <label for=""> Assunto </label>
                            <input type="text" id="assunto" name="assunto" placeholder="" v-model="ticket.assunto" />

                        </div>
                        <div>
                            <label for="">Tecnologia</label>


                            <input type="text" id="tecnologia" placeholder="" v-model="ticket.tecnologia" />
                        </div>
                        <div>
                            <label for="">Colaboradores</label>
                            <select name="colegas" id="colegas" v-model="ticket.colaboradores"></select>
                        </div>

                        <div>
                            <label for=""> Data limite </label>
                            <Calendar v-model="ticket.dataLimite" />
                        </div>

                        <div>
                            <label for=""> Prioridade </label>
                            <Dropdown v-model="ticket.prioridade" :options="cities" optionLabel="name"
                                placeholder="Selecione" />
                           
                        </div>
                        <div>
                            <label for=""> Tipo</label>
                            <Dropdown v-model="ticket.tipo" :options="types" optionLabel="name"
                                placeholder="Selecione" />
                        
                        </div>
                        <div class="enviar">
                            <button @click="enviarDados">Enviar</button>
                        </div>
                    </div>
                   

                </form>
            </section>
        </Dialog>

        <Button label="No" icon="pi pi-times" @click="closeModal" class="p-button-text" />
        <Button label="Yes" icon="pi pi-check" @click="closeModal" autofocus />
    </div>

</template>

<script>
import Dropdown from 'primevue/dropdown';
import AutoComplete from 'primevue/autocomplete';
import Calendar from "primevue/calendar";
import Dialog from "primevue/dialog";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/index";
import { reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";


export default{

    components: { Dialog, Calendar, AutoComplete, Dropdown },

    data() {
        return {
            displayModal: true,
            cities: [
                { name: 'Não Urgente' },
                { name: 'Pouco Urgente' },
                { name: 'Urgente' },
                { name: 'Muito Urgente' },
                { name: 'Emergência' }
            ],
            types: [
                { name: 'UX/UI' },
                { name: 'Desenvolvimento' },
                { name: 'Engenharia' },
                { name: 'Infra' },

            ],
            
            ticket: reactive({
            // pega todos os valores dos inputs do html
            assunto: "",
            tecnologia: "",
            dataLimite: "",
            fechamento: "",
            tipo:"",
            prioridade:""

            })
        };


    },
    
    methods: {
        openModal() {
            this.displayModal = true;
        },
        closeModal() {
            this.displayModal = false;
        },

        enviarDados(e) {
            e.preventDefault();

            this.saveOnDatabase();
            
            },
        
    
        async saveOnDatabase() {
            const dbRef = collection(db, "ticket");
            const data = {
                assunto: this.ticket.assunto,
                tecnologia: this.ticket.tecnologia,
                // colaboradores: this.ticket.colaboradores,
                // dataLimite: this.ticket.dataLimite,
                // prioridade: this.ticket.prioridade,
                // tipo: this.ticket.tipo,
            };
            console.log('dbref -> ', dbRef)
            console.log('data -> ', data)
            await addDoc(dbRef, data)
                .then(() => {
                    console.log("Document has been added successfully");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
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
    margin: 0 0.5rem 0 0;
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
<style lang="scss" scoped>
.p-dropdown-label {
    overflow: inherit;

}
</style>