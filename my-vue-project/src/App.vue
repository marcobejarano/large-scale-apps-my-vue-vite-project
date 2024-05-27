<script setup lang="ts">
import { reactive } from 'vue';
import type { ItemInterface } from './models';
import ItemsListComponent from './components/items/ItemsList.component.vue';

const items: ItemInterface[] = reactive([
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
]);

const onSelectItem = (id: number) => {
  const item = items.find(object => object.id === id);

  if (!item) {
    console.warn(`onSelectItem: could not find item with id ${ id }`);
    return;
  }

  item.selected = !item.selected;
  console.log('onSelectItem', item.id, item.selected)
}
</script>

<template>
  <div class="home">
    <ItemsListComponent :items="items" @selectItem="onSelectItem"/>
  </div>
</template>
