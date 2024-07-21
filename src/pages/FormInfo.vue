<template>


    <div v-if="store.checkErrors(1)">
        <div class="m-3 text-lg font-bold">
            Information Not Available
        </div>
        <div class="m-3 text-md">
            Please complete the form.
        </div>
        <Button label="Back to Home" link @click="router.push({name:'home'})" />

    </div>
    <div v-else>



    </div>

</template>

<script>
import { useFormStore } from '@/stores/form';
import { storeToRefs } from 'pinia';
import Button from 'primevue/button';
import { router } from '@/router';

export default {
    components: { Button },
    setup() {

        const store = useFormStore()

        const { form } = storeToRefs(store)

       const rules = {
            fullName: { required: true, label: 'Full Name' },
            email: { email: true, required: true, label: 'Email' },
            birthDate: { date: true, required: false, label: 'Birth Date' },
            contactNo: { required: true, label: 'Contact Number' },
        };



        store.validateForm(rules)



        store.getForm()


        return {
            form,
            store,
            router
        }
    }

}
</script>

<style></style>