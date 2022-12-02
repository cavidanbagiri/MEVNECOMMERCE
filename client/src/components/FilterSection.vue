
<template>
    <div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="Hello world" :id="props.brand" v-model="checked" @change="checkedCondition">
            <label class="form-check-label" for="flexCheckDefault">
                {{props.brand}} {{checked}}
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
