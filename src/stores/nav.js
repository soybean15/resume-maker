import { defineStore } from 'pinia'
import { ref } from 'vue'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useNavStore = defineStore('nav', defineStore('counter', () => {


    const navs = ref([
        {'label':'Home','name':'home'},
        {'label':'About','name':'about'},
        // {'name':'Home','route':'home'},

    ])

    return {navs}
}))