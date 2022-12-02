

<template>

        <router-link :to="{ name: 'Product', params: { id: `${props?.product?._id}` } }">
            <div class="card gap-1 my-2" style="width: 18rem;">
            <img class="card-img-top" :src="props.product?.thumbnail" style="height: 16rem;object-fit: contain;" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title text-md fw-bold" style="height:3rem; overflow: hidden;">{{
                            props?.product?.title
                    }}</h5>
                <p class="card-text text-sm py-1"
                        style="font-family: Georgia, serif;height:4rem; overflow: hidden;">{{
                                props?.product?.description
                        }}</p>
                    <div class="d-flex justify-content-between">
                        <span class="card-text text-sm px-0 fw-bold py-1">{{ props?.product?.price }} ₽
                            <s class="ps-1 text-xs text-gray-400">{{ props?.product?.discountPercentage }} ₽</s>
                            <span class="ms-3 text-xs bg-green-400 text-white">{{ props?.product?.percentprice
                            }}%</span>
                        </span>
                    </div>
            </div>
        </div>
        </router-link>

</template>

<script setup>

    import { defineProps } from 'vue';

    const props = defineProps(['product'])


</script>

<style lang="scss" scoped>

</style>