import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavStore = defineStore('nav', defineStore('counter', () => {


    const navs = ref([
        {'label':'Home','name':'home','icon':'pi-home'},
        {'label':'About','name':'about','icon':'pi-info-circle'},
        // {'name':'Home','route':'home'},

    ])

    return {navs}
}))