<template>
<div>
  <p>Count: {{ counterStore.count }}</p>
  <p>Double Count: {{ counterStore.doubleCount }}</p>
  <button @click="counterStore.increment">Increment</button>
  <button @click="counterStore.decrement">Decrement</button>
</div>
</template>
<script setup lang="ts">
import { useCounterStore } from "../model/store/counter";
const counterStore = useCounterStore();
</script>
<style lang="scss">
  
</style>