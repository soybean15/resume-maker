<template>


    <div class="px-5">
        <nav-bar />


        <div>

            <slot></slot>
        </div>
    </div>

</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {

    components: { NavBar }

}
</script>

<style></style>