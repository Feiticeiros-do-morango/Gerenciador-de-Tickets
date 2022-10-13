<template>
       <Dialog header="Novo Ticket" :visible.sync="displayModal" :modal="true" :dismissableMask="true" :closable="true">
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    <button @click="oi">Aaaaaa</button>
</Dialog>

</template>

<script>
import Dialog from 'primevue/dialog';

    export default {
        components: { Dialog },
        data() {
            return {
                displayModal: this.abre
            }
        },
        props: [ "abre" ],

        methods: {
            oi : function (params) {
                console.log(this.abre)
                
            }
        }

}
    
</script>

<style scoped>

</style>