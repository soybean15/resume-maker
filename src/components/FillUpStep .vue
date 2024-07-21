<template>
  

    <div class="card">
        <Stepper value="1">
            <StepItem value="1"  >
                <Step>
                    <div class="flex items-center">Basic Information

                        <div class="mx-1" v-if="checkErrors(1)">
                            <i class="pi pi-exclamation-circle text-red-500" style="font-size: 1rem"></i>
                        </div>
                    </div>
                </Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class=" h-100">
                        <StepOne></StepOne>
                    </div>
                    <div class="py-6">
                        <Button label="Next" @click="submit(1,()=>{activateCallback('2')})" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="2" >
                <Step>Educational Background</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col ">
                      
                        <StepTwo/>
                        
                    </div>
                    <div class="flex py-6 gap-2">
                      
                        <Button label="Back" severity="secondary"  @click="activateCallback('1')" />
                       
                        <Button label="Next" @click="submit(2,()=>{activateCallback('3')})" />
                            <Button label="Skip" severity="help" @click="activateCallback('3')" />
                    </div>
                </StepPanel>
            </StepItem>
            <StepItem value="3">
                <Step>Professional Background</Step>
                <StepPanel v-slot="{ activateCallback }">
                    <div class="flex flex-col h-48">
                        <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">Content III</div>
                    </div>
                    <div class="py-6">
                        <Button label="Back" severity="secondary" @click="activateCallback('2')" />
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
import { ref } from 'vue';
import { useFormStore } from '@/stores/form';
import { storeToRefs } from 'pinia';
import StepTwo from './StepTwo.vue';
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
        StepTwo
    }, 

    setup(){


       
        const store = useFormStore()

        const {errors,form} = storeToRefs(store)


        return {
            errors,

            checkErrors: (step) => {
                switch (step) {
                    case 1: {
                        const keys = ['fullName', 'contactNo', 'email', 'birthDate']

                        for (const key in errors.value) {
                            if (errors.value.hasOwnProperty(key)) {
                                return true;
                               
                            }
                        }
                    }

                }

                return false;


            },


           
            submit: (step,next) => {
                let rules = {}
                
                switch (step){
                    case 1: {
                        rules = {
                            fullName: { required: true ,label:'Full Name'},
                            email: { email: true, required: true,label:'Email' },
                            birthDate: { date: true, required: false,label:'Birth Date' },
                            contactNo: { required: true ,label:'Contact Number'},
                        };


                  
                        store.validateForm(rules)



                        break;
                    }
                }
                console.log(Object.keys(errors.value).length)

                if (Object.keys(errors.value).length === 0) {
                   
                    console.log(step)
                    next();
                }
               
         
             }
           
        }

    }
}
</script>

<style>

</style>