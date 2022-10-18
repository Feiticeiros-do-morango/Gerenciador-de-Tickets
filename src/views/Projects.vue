<template>
    <div class="main">
    <h1>test projects</h1>
    <button @click="click()">aa</button>
    <Toast />
    </div>
</template>

<script>
import Toast from 'primevue/toast';

export default {
    components: { Toast },
    methods: {
        click() {
            console.log("foi")
            this.$toast.add({severity:'success', summary: 'Success Message', detail:'Order submitted', life: 3000});
        }
    },
}
</script>

<style scoped>

</style>