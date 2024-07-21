<template>
    <div>

        <div class="w-full">
            <div class="flex w-98 flex-wrap my-2 gap-2">
                <InputText class="w-full md:w-96" v-model="form.fullName" placeholder="Full Name" aria-label="FirstName"  :invalid="!!errors.fullName" />
                
               
                <Message severity="error" v-if="errors.fullName">{{errors.fullName}}</Message>
            </div>

            <div class="flex flex-wrap my-2 gap-2">
                <InputText  class="w-full md:w-96" v-model="form.contactNo" placeholder="Contact Number" aria-label="email" :invalid="!!errors.contactNo" />
                <Message severity="error" v-if="errors.contactNo">{{errors.contactNo}}</Message>

            </div>
            <div class="flex flex-wrap  my-2 gap-2">
                <InputText  class="w-full md:w-96" v-model="form.email" placeholder="Email" aria-label="email" :invalid="!!errors.fullName" />
                <Message severity="error" v-if="errors.email">{{errors.email}}</Message>

            </div>
            <div class="flex flex-wrap my-2 gap-2">
                <DatePicker  class="w-full md:w-96" v-model="form.birthDate" placeholder="BirthDate" aria-label="email" :invalid="!!errors.birthDate" />
                <Message severity="error" v-if="errors.birthDate">{{errors.birthDate}}</Message>

            </div>
        </div>

    </div>
  
</template>

<script>
import { useFormStore } from '@/stores/form';
import { storeToRefs } from 'pinia';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';

import DatePicker from 'primevue/datepicker';

export default {
    components:{
        InputText,
        Message,
        DatePicker
    }, 
    setup(){


        const store = useFormStore()
        const {form,validateForm,errors}= storeToRefs(store)

        const rules = {
            fullName: { required: true },
            email: { email: true, required: true },
            birthDate: { date: true, required: true },
        };


        return {
            form,
            errors,
          
        }
    }

}
</script>

<style>

</style>