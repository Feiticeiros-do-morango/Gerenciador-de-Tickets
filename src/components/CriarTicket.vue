<template>

    <!-- <Button label="Show" icon="pi pi-external-link" @click="openModal" /> -->


    <Dialog header="Novo Ticket" :visible.sync="displayModal" :modal="true" :dismissableMask="true" :closable="true">
        <div class="main">
            <div class="left">
                <form>
                    <div class="inputDiv">
                        <label for=""> Assunto </label>
                        <input type="text" id="assunto" name="assunto" placeholder="" v-model="ticket.assunto" />
                    </div>

                    <div class="inputDiv">
                        <label for=""> Data limite </label>
                        <Calendar v-model="ticket.dataLimite" dateFormat="dd.mm.yy" />
                    </div>


                    <div class="inputDiv">
                        <label for="">Tecnologia</label>
                        <input type="text" id="tecnologia" placeholder="" v-model="ticket.tecnologia" />
                    </div>


                </form>

                <button @click="teste()">TESTE</button>

                <div class="inputDiv">
                    <label for=""> Prioridade </label>
                    <Dropdown v-model="ticket.prioridade" :options="prioridade" optionLabel="name"
                        placeholder="Selecione" />
                </div>

                <div class="inputDiv">
                    <label> Tipo </label>
                    <Dropdown v-model="ticket.tipo" :options="tipos" optionLabel="name" placeholder="Selecione" />
                </div>

                <form>
                    <div class="inputDiv">
                        <label for="">Colaboradores</label>
                        <MultiSelect v-model="ticket.colaboradores" :options="colaboradores" optionLabel="name" placeholder="Selecione"
                            display="chip" />
                    </div>
                </form>



            </div>
            <div class="right">

                <div class="ticket"
                    v-bind:class="getPrioridade(ticket.prioridade.name) + ' ' + getTipo(ticket.tipo.name)">

                    <p id="tituloText"> {{ticket.assunto}} </p>
                    <p id="techText"> {{ticket.tecnologia}} </p>

                </div>

            </div>

        </div>
        <div class="enviar">
            <button @click="enviarDados">Enviar</button>
        </div>
    </Dialog>


</template>

<script>
import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import Calendar from "primevue/calendar";
import Dialog from "primevue/dialog";
import { collection, addDoc , getDocs} from "firebase/firestore";
import { db } from "../Firebase/index";
import { reactive } from "vue";




export default {

    components: { Dialog, Calendar, Dropdown, MultiSelect },

    mounted:
        
        async function fetchData() {
            let obj = {}
            const querySnapshot = await getDocs(collection(db, "usuarios"));
            querySnapshot.forEach((doc) => {

                obj = { name: `${doc.data().UserName}`}
                this.colaboradores.push(obj)
                
            })  
        },
        

    data() {
        return {
            displayModal: false,
            prioridade: [
                { name: 'Não Urgente' },
                { name: 'Pouco Urgente' },
                { name: 'Urgente' },
                { name: 'Muito Urgente' },
                { name: 'Emergência' }
            ],
            tipos: [
                { name: 'UX/UI' },
                { name: 'Desenvolvimento' },
                { name: 'Engenharia' },
                { name: 'Infra' },

            ],

            colaboradores: [
                
            ],

            ticket: reactive({
                // pega todos os valores dos inputs do html
                assunto: "",
                tecnologia: "",
                dataLimite: "",
                fechamento: "",
                tipo: "",
                prioridade: "",
                dataLimite: "",
                colaboradores: [],

            })
        };


    },


    methods: {

        async teste() {
            let obj = {}
            const querySnapshot = await getDocs(collection(db, "usuarios"));
            querySnapshot.forEach((doc) => {

                obj = { name: `${doc.data().UserName}`}
                this.colaboradores.push(obj)
                
            })

           
        },

        openModal() {
            this.displayModal = true;
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
                colaboradores: this.ticket.colaboradores,
                dataLimite: this.ticket.dataLimite,
                prioridade: this.ticket.prioridade,
                tipo: this.ticket.tipo,
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
        getPrioridade: function (prioridade) {
            switch (prioridade) {
                case "Não Urgente":
                    return "naoUrgente"
                    break;

                case "Pouco Urgente":
                    return "poucoUrgente"
                    break;

                case "Urgente":
                    return "urgente"
                    break;

                case "Muito Urgente":
                    return "muitoUrgente"
                    break;

                case "Emergência":
                    return "emergencia"
                    break;

                default:
                    break;
            }

        },
        getTipo: function (tipo) {
            switch (tipo) {
                case "Desenvolvimento":
                    return "dev"
                    break;

                case "UX/UI":
                    return "design"
                    break;

                case "Engenharia":
                    return "engenharia"
                    break;

                default:
                    break;
            }
        }
    },
}

</script>



<style scoped>
* {
    margin: 0;
    padding: 0;
}

.main {
    display: flex;
    height: 63vh;
}

.left {
    width: 20vw;
}

.inputDiv {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
}

.inputDiv input {
    width: 58%;
    height: 5vh;
    background: #040d19;
    border: 1px solid #0b213f;

}

.inputDiv select {
    width: 58%;
    height: 5vh;
    background: #040d19;
    border: 1px solid #0b213f;

}

.inputDiv label {
    margin-top: 1vh;
    font-size: 20px;
}


.right {
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.ticket {
    height: 15vh;
    width: 20vw;
    padding: 10px;

    backdrop-filter: blur(10px);
    border-radius: 15px;

    overflow: hidden;
    background-color: rgba(187, 187, 187, 0.664);
}

.naoUrgente {
    border-left: solid 11px rgb(23, 172, 122);
}

.poucoUrgente {
    border-left: solid 11px rgb(39, 144, 241);
}

.urgente {
    border-left: solid 11px rgb(245, 242, 56);
}

.muitoUrgente {
    border-left: solid 11px rgb(255, 132, 49);
}

.emergencia {
    border-left: solid 11px rgba(250, 18, 18, 0.959);
}

.dev {
    background: url(../assets/dev-pattern.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

.engenharia {
    background: url(../assets/engenharia-pattern.png);
    background-size: cover;
    background-repeat: no-repeat;
}

.design {
    background: url(../assets/design-pattern.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}

.enviar {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}
</style>
