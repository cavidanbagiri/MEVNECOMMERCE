<template>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Category</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body m-0 pe-5">
            <ul class="list-group-flush">
                <li class="list-group-item list-group-item-action" v-for="i in category" :key="i">
                    <router-link 
                    :to="{ name: 'Category', params:{ category: `${i}`} }" class="list-group-item">
                        {{i}}
                    </router-link>
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>

import { computed, onMounted } from 'vue';
import categoryStore from '../stores/catalog';
const category_store = categoryStore();

const category = computed (()=>{
    return category_store.category;
})

onMounted(()=>{
    category_store.FETCHCATALOG();
})



</script>

<style lang="scss" scoped>

</style>