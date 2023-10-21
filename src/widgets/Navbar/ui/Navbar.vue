<template>
  <div>
    <nav>
      <RouterLink v-for="item in navbarItemList" :key="item.path" :to="item.path">{{
        item.text
      }}</RouterLink>
    </nav>
  </div>
</template>
<script setup lang>
import { RouterLink } from 'vue-router'
import { navbarItemList } from '../model/items'
</script>
<style lang="scss"></style>
