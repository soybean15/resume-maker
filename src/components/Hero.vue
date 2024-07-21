<template>
  <div class="flex flex-col my-20 max-w-2xl">

    <h1 class="md:text-8xl text-6xl font-bold">Resume Maker</h1>
    <div >Create Resume in an instant</div>

    <div class="flex ">
      <Button @click="router.push({name:'fillUpForm'})" label="Get Started" rounded class="max-w-40 my-4" size="small" />

    </div>


  </div>
</template>

<script>

import Button from 'primevue/button';
import { router } from '@/router';
export default {

  components:{Button},
  setup(){
    return {router}
  }
}
</script>

<style>

</style>