
<template>

    <div class="bg-primary position-relative rounded-3 mx-3" style="height:400px; overflow: hidden;">
        <div style="height:400px; overflow: hidden;" v-for="index in img_array.length" :key="index">
            <img :src="img_array[img_num]"  style="height:450px;width:100%;" alt="">
        </div>
        <button class="position-absolute top-50 start-0 translate-middle ms-5" @click="prevFunc">
            prev
        </button>
        <button class="position-absolute top-50 start-100 translate-middle"  @click="nextFunc">
            next
        </button>
    </div>

</template>

<script setup>

import { ref } from 'vue';

const img_num = ref(0);
const img_array = ref([
    '/src/assets/img_slider_1.jpg',
    '/src/assets/img_slider_2.jpg',
    '/src/assets/img_slider_3.jpg'
]);

const prevFunc = () => { 
    console.log(img_num.value);
    if(img_num.value === 0) 
        img_num.value = 2;
    else
        img_num.value -= 1;
}
const nextFunc = () => { 
    img_num.value < img_array.value.length - 1 ? img_num.value +=1 : img_num.value = 0;
 }

</script>

<style lang="scss" scoped>

</style>