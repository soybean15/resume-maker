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
        educationalBackground:[],
        professionalBackground:[],
        skills:[]
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

    const checkErrors= (step) => {
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
        console.log('eyy')
        return false;


    }

    const getForm=()=>{
        
        const storedForm = JSON.parse(localStorage.getItem('resume-info'));




        if(storedForm){
            form.value=storedForm
        }
        console.log(storedForm)
    }


    
    

    return {
        form,
        errors,
        validateForm,
        getForm,
        checkErrors
    }
})