<template>

    <div class="p-4 my-1 border rounded-md border-current" primary v-for="(item, index) in form.professionalBackground"
        :key="index + 1">

        <div class="flex flex-wrap my-2 gap-2">

            <InputText v-model="item.school" class="w-full" placeholder="Company Name" aria-label="username" />

        </div>
        <div class="flex flex-wrap my-2 gap-2">

            <InputText v-model="item.position" class="w-full" placeholder="Position" aria-label="username" />

        </div>
        <div class="flex  my-2 flex-wrap gap-2">
            <DatePicker placeholder="From" view="month" dateFormat="mm/yy" />
            <div class="flex items-center">
                <Checkbox v-model="item.present" inputId="ingredient1" name="pizza" value="present" />
                <label for="ingredient1" class="ml-2"> Present </label>
            </div>
            <DatePicker v-model="item.dateTo" type="text" :placeholder="item.present == 'present' ? 'Present' : 'To'"
                view="month" dateFormat="mm/yy" :disabled="item.present == 'present'" />

        </div>

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
                    'companyName': '',
                    'position': '',
                    'responsibities': [],
                    'dateFrom': '',
                    'dateTo': '',
                    'present': false
                }
                form.value.professionalBackground.push(item)
            }
        }
    }
}
</script>

<style></style>