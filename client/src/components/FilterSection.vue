
<template>
    <div>
        <div class="form-check flex items-center pl-8">
            <input class="form-check-input" type="checkbox" value="Hello world" :id="props.brand" v-model="checked" @change="checkedCondition">
            <label class="py-2 ml-2 w-full text-md font-medium text-gray-700 dark:text-black-300" for="flexCheckDefault">
                {{props.brand}}
            </label>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';

const props = defineProps(['brand']);
const emit = defineEmits(['filteredName','unFilteredName'])

const checked = ref(false);

const checkedCondition = () => {
    if(checked.value){
        emit('filteredName',props?.brand);
    }
    else
        emit('unFilteredName', props?.brand);
}

</script>

<style lang="scss" scoped>

</style>
