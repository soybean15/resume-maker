<template>
 <div >
   

  <Menubar :model="navs" class="">
    <template #start>
        <div class="text-lg font-bold">
            Resume Maker
        </div>



    </template>

    <template #item="{item}">

        <router-link :to="{name:item.name}">
            <i :class="`pi ${item.icon}`" style="font-size: 1rem"></i>

        
            <span class="p-2">{{ item.label }}</span>

        </router-link>


    </template>


    <template #end>
        <div>
            <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
        </div>



    </template>


  </Menubar>

</div>
</template>

<script>

import Menubar from 'primevue/menubar';
import { storeToRefs } from 'pinia'
import {useNavStore} from '@/stores/nav'
import InputText from 'primevue/inputtext';
import Image from 'primevue/image';
export default {
    components:{Menubar,Image,InputText},

    setup(){
        const store= useNavStore()


        const { navs } = storeToRefs(store)
        console.log(navs.va)


        return {
            navs
        }
    }

}
</script>

<style>

</style>