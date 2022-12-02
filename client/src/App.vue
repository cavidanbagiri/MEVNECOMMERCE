
<template>
  <div class="container-fluid m-0 p-0">

    <navbar></navbar>

    <router-view></router-view>

    <!-- Load Canvas -->
    <Canvas></Canvas>


  </div>
</template>

<script setup>

import Navbar from './layouts/Navbar.vue';

import Canvas from './layouts/Canvas.vue';



</script>

<style scoped>

</style>
