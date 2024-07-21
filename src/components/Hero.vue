<template>
  <div class="flex flex-col my-20 max-w-2xl">

    <h1 class="md:text-8xl text-6xl font-bold">Resume Maker</h1>
    <div >Create Resume in an instant</div>
    <router-link :to="{name:'fillUpForm'}">
      <Button  label="Get Started" rounded class="max-w-40 my-4" size="small" />

    </router-link>
  </div>
</template>

<script>

import Button from 'primevue/button';
export default {

  components:{Button}
}
</script>

<style>

</style>