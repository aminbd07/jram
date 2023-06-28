<template>
    <div>
        <div class="fixed inset-0 flex justify-center items-center bg-white opacity-75 z-50" v-if="commonStore.$state.loading">
            <div class="spinner"></div>
        </div>
    </div>
</template>
  
<script setup lang="ts">

import { useCommonstore } from '~/store/common'
const commonStore = useCommonstore()

</script>
  
<style scoped>
.spinner {
    border-top-color: #3498db;
    animation: spinner 0.75s linear infinite;
    border-bottom-color: #3498db;
    border-left-color: transparent;
    border-right-color: transparent;
    border-style: solid;
    border-width: 3px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
}

@keyframes spinner {
    to {
        transform: rotate(360deg);
    }
}
</style>
  