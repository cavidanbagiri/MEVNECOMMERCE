

<template>
    <div class="row mb-2">
        <div class="col-3">
            <span class="mb-2 mt-3  p-2 text-center flex text-3xl fw-bold font-semibold text-gray-900 dark:text-dark">Brands</span>
            <div v-for="i in brands" :key="i">
                <filter-section :brand="i" @filteredName="addFilter" @unFilteredName="removeFilteredName">
                </filter-section>
            </div>
        </div>
        <div class="col-9">
            <div class="row flex justify-content-between">
                <div class="my-2 mx-1 p-0 border-none" v-for="i in products" :key=i style="width: 15rem;">
                    <card-item :product="i"></card-item>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { computed, onMounted, ref } from 'vue';
import CardItem from '../components/CardItem.vue';
import FilterSection from '../components/FilterSection.vue';

import { useRoute } from 'vue-router';
import categoryStore from '../stores/catalog';

const route = useRoute();
const category_store = categoryStore();

const products = computed(() => {
    return category_store.products;
})
const brands = computed(() => {
    return category_store.brands
})

onMounted(() => {
    const category_name = route.params.category;
    category_store.FETCHCATEGORY(category_name);
    category_store.FETCHBRANDS(category_name);
})

//Filetered Items
let filtered_items = ref([]);

//Filter From Backend
function addFilter(item) {
    filtered_items.value.push(item);
    category_store.FETCHFILTEREDITEMS(route.params.category, filtered_items);
}
//Delete From Filter Backend
function removeFilteredName(item) {
    filtered_items.value = filtered_items.value.filter((items) => items !== item);
    category_store.FETCHFILTEREDITEMS(route.params.category, filtered_items);
}

</script>

