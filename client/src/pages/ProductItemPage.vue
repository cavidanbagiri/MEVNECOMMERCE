

<template>
    <div>

        {{product}}

    </div>
</template>

<script setup>

import {ref, computed, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import categoryStore from '../stores/catalog';

const route = useRoute();

const category_store = categoryStore();

const product = computed(()=>{
    return category_store.products;
})

onMounted(()=>{
    const product = route.params.id;
    category_store.FETCHCATEGORY(product);
})


</script>

<style lang="scss" scoped>

</style>