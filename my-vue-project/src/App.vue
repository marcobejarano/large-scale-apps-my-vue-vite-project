<script setup lang="ts">
import type { ItemInterface } from './models';
import ItemsListComponent from './components/items/ItemsList.component.vue';

const items: ItemInterface[] = [
  {
    id: 1,
    name: 'Item 1',
    selected: false,
  },
  {
    id: 2,
    name: 'Item 2',
    selected: false,
  },
  {
    id: 3,
    name: 'Item 3',
    selected: false,
  }
];
</script>

<template>
  <div class="home">
    <ItemsListComponent :items="items" />
  </div>
</template>
