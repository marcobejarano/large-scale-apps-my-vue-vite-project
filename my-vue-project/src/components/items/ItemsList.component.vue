<script setup lang="ts">
import type { ItemInterface } from '@/models';
import ItemComponent from './children/Item.component.vue';
import Loader from '../shared/Loader.component.vue';

defineProps<{ 
  items: ItemInterface[],
  loading: boolean
}>();

const emit = defineEmits<{
  (e: 'selectItem', id: number): any
}>();

const onSelectItem = (id: number) => {
  emit('selectItem', id);
}
</script>

<template>
  <div>
    <h3>Items</h3>
    <Loader v-show="loading" />
    <ul v-show="!loading">
      <ItemComponent
        v-for="(item, index) in items"
        :key="item.id"
        :model="item"
        @selectItem="onSelectItem"
      >
        {{ item.name }} [{{ item.selected }}]
      </ItemComponent>
    </ul>
  </div>
</template>

<style>
  ul {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
</style>
