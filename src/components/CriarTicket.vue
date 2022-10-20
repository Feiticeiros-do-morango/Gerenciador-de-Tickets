<template>

    <!-- <Button label="Show" icon="pi pi-external-link" @click="openModal" /> -->


    <Dialog header="Novo Ticket" :visible.sync="displayModal" :modal="true" :dismissableMask="true" :closable="true">
        <div class="main">

            <div class="top">

                <div class="ticket"
                    v-bind:class="getPrioridade(ticket.prioridade.name) + ' ' + getTipo(ticket.tipo.name)">

                    <p id="tituloText"> {{ticket.assunto}} </p>
                    <p id="techText"> {{ticket.tecnologia}} </p>

                </div>
            </div>

            <div class="bottom">

                    <div class="first">
                        <div class="inputDiv">
                            <label for=""> Assunto </label>
                            <input type="text" id="assunto" name="assunto" placeholder="" v-model="ticket.assunto" />
                        </div>

                        <div class="inputDiv">
                            <label for="">Tecnologia</label>
                            <input type="text" id="tecnologia" placeholder="" v-model="ticket.tecnologia" />
                        </div>

                    </div>
                

                <div class="second">


                    <div class="inputDiv">
                        <label for="">Colaboradores</label>
                        <MultiSelect v-model="ticket.colaboradores" :options="colaboradores" optionLabel="name"
                            placeholder="Selecione" display="chip" />
                    </div>

                    <div class="inputDiv">
                        <label for=""> Data limite </label>
                        <Calendar v-model="ticket.dataLimite" dateFormat="dd.mm.yy" />
                    </div>


                </div>


                <div class="third">
                    <div class="inputDiv">
                        <label for=""> Prioridade </label>
                        <Dropdown v-model="ticket.prioridade" :options="prioridade" optionLabel="name"
                            placeholder="Selecione" inputClass="dropdownCustom" />
                    </div>

                    <div class="inputDiv">
                        <label> Tipo </label>
                        <Dropdown v-model="ticket.tipo" :options="tipos" optionLabel="name" placeholder="Selecione" />
                    </div>
                </div>

                <div class="forth">
                    <div class="inputDiv">
                        <label> Projetos </label>
                        <MultiSelect v-model="ticket.projeto" :options="projetos" optionLabel="name" placeholder="Selecione" />
                    </div>

                </div>

            </div>


            <div class="enviar">
                <button label="Enviar" @click="enviarDados" class="bt"> Enviar </button>
                
            </div>

        </div>

    </Dialog>


</template>

<script>

import Dropdown from 'primevue/dropdown';
import MultiSelect from 'primevue/multiselect';
import Calendar from "primevue/calendar";
import Dialog from "primevue/dialog";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../Firebase/index";
import { reactive } from "vue";




export default {

    components: { Dialog, Calendar, Dropdown, MultiSelect },

    mounted: 

        async function fetchData() {
            let obj = {}
            const querySnapshot = await getDocs(collection(db, "usuarios"));
            querySnapshot.forEach((doc) => {

                obj = { name: `${doc.data().UserName}` }
                this.colaboradores.push(obj)

            })

            let obj2 = {}
            const querySnap = await getDocs(collection(db, "projeto"));
            querySnap.forEach((doc) => {

                obj2 = { name: `${doc.data().name}` }
                this.projetos.push(obj2)

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

            colaboradores: [],

            projetos: [],

            ticket: reactive({
                // pega todos os valores dos inputs do html
                assunto: "",
                tecnologia: "",
                dataLimite: "",
                fechamento: "",
                tipo: "",
                prioridade: "",
                dataLimite: "",
                projeto: [],
                colaboradores: [],
                

            })
        };


    },


    methods: {


        openModal() {
            this.displayModal = true;
        },


        enviarDados(e) {
            e.preventDefault();

            this.saveOnDatabase();
            alert("Salvo com sucesso")

        },

        async saveOnDatabase() {
            const dbRef = collection(db, "ticket");
            const docRef = {
                assunto: this.ticket.assunto,
                tecnologia: this.ticket.tecnologia,
                colaboradores: this.ticket.colaboradores,
                dataLimite: this.ticket.dataLimite,
                prioridade: this.ticket.prioridade,
                tipo: this.ticket.tipo,
                projeto: this.ticket.projeto,
            };
           
            await addDoc(dbRef, docRef)
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

                case "Infra":
                    return "infra"
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
    margin-top: 3vh;
    display: flex;
    height: 65vh;
    width: 50vw;
    flex-direction: column;
    justify-content: space-between;
}

.top {
    height: 15vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.bottom {
    height: 20vh;
    display: flex;
    justify-content:center;
}

.first {
    width: 12.5vw;
}

.second {
    width: 12.5vw;
}

.third {
    width: 12.5vw;
}

.forth {
    width: 12.5vw;
}

.inputDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-direction: column;
}

.inputDiv input {
    width: 90%;
    height: 5vh;
    background: #040d19;
    border: 1px solid #0b213f;
    color: ghostwhite;
   
}

.inputDiv input:focus{
    border: 1px solid #85b1f9;
    outline: none;
}


.p-multiselect{
    width: 90%;
}

.p-dropdown{
    width: 90%;
}

.inputDiv label {
    margin-top: 3vh;
    font-size: 22px;
}


.ticket {
    height: 15vh;
    width: 20vw;
    padding: 10px;

    backdrop-filter: blur(10px);
    border-radius: 15px;

    overflow: hidden;
    background-color: rgba(187, 187, 187, 0.664);
    color: black;
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
    background: url(../assets/dev-pattern.png);
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

.infra {
    background: url(../assets/8245.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.bt {
  width: 6vw;
  height: 4vh;
  background-color: #040d19; 
  color: white;
  border: none;
  border-radius: 4px;
font-weight: bold;
}
.bt:hover{

    border: 2px solid #85b1f9;
}

.enviar{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
