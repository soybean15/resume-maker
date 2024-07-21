<template>
 
  <Menubar :model="navs">

    <template #item="{item}">

        <a class="flex items-center">
           
            <span class="ml-2">{{ item.label }}</span>

        </a>


    </template>


  </Menubar>
</template>

<script>

import Menubar from 'primevue/menubar';
import { storeToRefs } from 'pinia'
import {useNavStore} from '@/stores/nav'
export default {
    components:{Menubar},

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