<script setup lang="ts">
import ItemsListComponent from './components/items/ItemsList.component.vue';

const items: any[] = [
  {
    id: 1,
    name: 'Item 1',
  },
  {
    id: 2,
    name: 'Item 2',
  },
  {
    id: 3,
    name: 'Item 3',
  }
];
</script>

<template>
  <div class="home">
    <ItemsListComponent :items="items" />
  </div>
</template>
