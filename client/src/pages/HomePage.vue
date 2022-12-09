

<template>

    <div>
        <carousel></carousel>

        <!-- <div class="row"> -->
            <div class="row flex justify-content-around" v-for="(value, key, index) in products" :key=index>
                <p class="text-5xl fw-bold ms-5  my-5">{{key}}</p>
                <div class="row mb-5" v-for="i in value" :key="i" style="width: 18rem; height:28rem">
                    <card-item :product="i"></card-item>
                </div>
            </div>
        <!-- </div> -->

    </div>

</template>

<script setup>

import { ref, computed, onMounted } from 'vue';
import CardItem from '../components/CardItem.vue';
import categoryStore from '../stores/catalog';
import Carousel from '../components/Carousel.vue';

//Create Store For Getting API
const store = categoryStore();

//Get User Inform From
let some = JSON.parse(sessionStorage.getItem('authstore'));

const products = computed(() => {
    return store.products_for_home_page;
})

onMounted(() => {
    store.FETCHDATAFORHOMEPAGE();
})

</script>

<style lang="scss" scoped>

</style>