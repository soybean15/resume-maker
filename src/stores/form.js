import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form', () => {


    const form = ref({
        fullName:'',
        contactNo:'',
        email:'',
        birthDate:'',
        citizenship:'',
        civilStatus:'',
        educationalBackground:[]
      
    })

    

    const errors=ref([])

    
    // Function to validate the form
    const validateForm = ( rules) => {
        errors.value = []
       
        Object.keys(form.value).forEach((key) => {
          
           
            if (rules[key]) {
               
                if (rules[key].required && !form.value[key]) {
                    errors.value[key] = `${rules[key].label} is required`;
                }
    
              
                if (rules[key].email && form.value[key] && !/^\S+@\S+\.\S+$/.test(form.value[key])) {
                    errors.value[key] = `${rules[key].label} is not a valid email`;
                }

                 
                if (rules[key].date && form.value[key] && !/^\d{4}-\d{2}-\d{2}$/.test(form.value[key]) && !/^\d{2}\/\d{2}\/\d{4}$/.test(form.value[key])) {
                    errors[key] = `${rules[key].label} is not a valid date (YYYY-MM-DD or MM/DD/YYYY)`;
                }
            }
        });

    
    
   
    };


    
    

    return {
        form,
        errors,
        validateForm
    }
})