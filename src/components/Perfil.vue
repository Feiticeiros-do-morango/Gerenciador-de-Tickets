<template>
    <div>
       <Dialog header="Novo Ticket" :visible.sync="this.abre" :modal="true"  >
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    <button @click="oi">Aqui Fecha</button>
    
</Dialog>


</div>
</template>

<script>
import Dialog from 'primevue/dialog';

    export default {
        components: { Dialog },
        data() {
            return {
                
            }
        },
        props: [ "abre" ],

        methods: {
            oi : function (params) {
               this.abre = false
                
            },
            teste : function(){
                console.log(this.abre)

            }
        }

}
    
</script>

<style scoped>

</style>