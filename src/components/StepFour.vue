<template>

    <div class="p-4 my-1 border rounded-md border-current" primary v-for="(item, index) in form.skills"
        :key="index + 1">

        <InputText class="w-full" :placeholder="`Skill ${index+1}`" type="text" v-model="item.skill" />
      

    </div>
    <div class="flex items-center">
        <Button label="Add New" link severity="info" @click="addBackgound" />
        <i class="pi pi-plus" style="font-size: 1rem"></i>


    </div>

</template>

<script>
import { useFormStore } from '@/stores/form'
import { storeToRefs } from 'pinia'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';

import Checkbox from 'primevue/checkbox';
export default {

    components: { InputText, Button, DatePicker, Select, Checkbox },
    setup() {
        const store = useFormStore()

        const { form } = storeToRefs(store)

        return {
            form,
            addBackgound: () => {

                const item = {
                    skill:'',
                    description:''
                }
                form.value.skills.push(item)
            }
        }
    }
}
</script>

<style></style>