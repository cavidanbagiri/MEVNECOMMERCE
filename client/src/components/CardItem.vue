

<template>

    <div class="duration-300">
        <router-link :to="{ name: 'Product', params: { id: `${props?.product?._id}` } }">
            <div class="card border rounded-xl hover:shadow-2xl">
                <img class="card-img-top" :src="props.product?.thumbnail" style="height: 16rem;object-fit: contain;"
                    alt="Card image cap">
                <div class="card-body">
                    <h5 class="text-md fw-bold" style="height:3rem; overflow: hidden; ">{{
                            props?.product?.title
                    }}</h5>
                    <p class="text-sm py-1"
                        style="font-family: Georgia, serif;height:4rem; overflow: hidden;text-decoration:none">{{
                                props?.product?.description
                        }}</p>
                    <div class="d-flex justify-content-between" style="height:2rem">
                        <span class="card-text text-sm px-0 fw-bold py-1" >{{ props?.product?.price }} $
                            <s class="ps-1 text-xs text-gray-400">{{ props?.product?.discountPercentage }} $</s>
                            
                        </span>
                    </div>
                    <div style="height:3rem">
                        <button type="button" class=" w-100 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
                    </div>
                </div>
            </div>
        </router-link>
    </div>

</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps(['product'])


</script>

<style  scoped>

</style>