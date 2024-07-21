<template>


    <div class="card">
        <Stepper value="1">
            <StepItem value="1">
                <Step>
                    <div class="flex items-center">Basic Information

                        <div class="mx-1" v-if="store.checkErrors(1)">
                            <i class="pi pi-exclamation-circle text-red-500" style="font-size: 1rem"></i>
                        </div>

                    </div>
                </Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class=" h-100">
                        <StepOne></StepOne>
                    </div>
                    <div class="py-6">
                        <Button label="Next" @click="submit(()=>{activateCallback('2')})" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="2">
                <Step>Educational Background</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col ">

                        <StepTwo />

                    </div>
                    <div class="flex py-6 gap-2">

                        <Button label="Back" severity="secondary" @click="activateCallback('1')" />

                        <Button label="Next" @click="submit(() => { activateCallback('3') })" />
                        <Button label="Skip" link severity="help" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="3">
                <Step>Professional Background</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col ">
                        <StepThree />
                    </div>
                    <div class="flex py-6 gap-2">
                        <Button label="Back" severity="secondary" @click="activateCallback('2')" />
                        <Button label="Next" @click="submit(() => { activateCallback('4') })" />
                    </div>
                </StepPanel>
            </StepItem>

            <StepItem value="4">
                <Step>Skills</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col ">
                        <StepFour />
                    </div>
                    <div class="py-6 flex gap-2">
                        <Button label="Back" severity="secondary" @click="activateCallback('2')" />
                        <Button label="Finish" @click="submit(() => {router.push({name:'formInfo'})})" />
                    </div>
                </StepPanel>
            </StepItem>
        </Stepper>
    </div>


</template>

<script>

import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';
import Button from 'primevue/button';
import StepOne from '@/components/StepOne.vue'
import StepThree from './StepThree.vue';
import { router } from '@/router';

import { ref } from 'vue';
import { useFormStore } from '@/stores/form';
import { storeToRefs } from 'pinia';
import StepTwo from './StepTwo.vue';
import StepFour from './StepFour.vue';
export default {
    components:{
        Stepper,
        Step,
        StepItem,
        StepList,
        StepPanel,
        StepPanels,
        Button,
        StepOne,
        StepTwo,
        StepThree,
        StepFour
    }, 

    setup(){


       
        const store = useFormStore()
        store.getForm()

        const {errors,form} = storeToRefs(store)


        return {
            errors,

            store,
            router,
          


           
            submit: ( next) => {
                let rules = {}


                rules = {
                    fullName: { required: true, label: 'Full Name' },
                    email: { email: true, required: true, label: 'Email' },
                    birthDate: { date: true, required: false, label: 'Birth Date' },
                    contactNo: { required: true, label: 'Contact Number' },
                };



                store.validateForm(rules)





                console.log(Object.keys(errors.value).length)

                if (Object.keys(errors.value).length === 0) {

                 
                    next();
                    localStorage.setItem('resume-info', JSON.stringify(form.value));
                }

              

               
         
             }
           
        }

    }
}
</script>

<style>

</style>