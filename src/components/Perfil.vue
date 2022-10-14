<template>
    <div>
       <Dialog header="Novo Ticket" :visible.sync="displayModal" :modal="true" dismissableMask="true" :closable="true">
	AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    
    
</Dialog>


</div>
</template>

<script>
import Dialog from 'primevue/dialog';

    export default {
        components: { Dialog },
        data() {
            return {
                displayModal : false,
            }
        },
        

        methods: {
            openModal() {
            this.displayModal = true;
        },
        }

}
    
</script>

<style scoped>

</style>