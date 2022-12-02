

<template>
    <div class="row">
        <div class="col-3 bg-primary">
            <h1>Brands</h1>
            <div v-for="i in brands" :key="i">
                <filter-section :brand="i" @filteredName="addFilter" @unFilteredName="removeFilteredName"></filter-section>
            </div>
        </div>
        <div class="col-9 bg-warning">
            <div class="row">
                <div  class="col-3" v-for="i in products" :key=i>
                    <card-item :product="i" ></card-item>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { computed, nextTick, onMounted, ref } from 'vue';
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
function addFilter(item){
    filtered_items.value.push(item);
    console.log('Filtered Arrays : ', filtered_items.value);
}
//Delete From Filter Backend
function removeFilteredName(item){
    filtered_items.value = filtered_items.value.filter((item)=>item!==item);
    console.log('Filtered Arrays : ', filtered_items.value);

}

</script>

