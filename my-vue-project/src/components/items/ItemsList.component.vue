<script setup lang="ts">
import type { ItemInterface } from '@/models';

defineProps<{ items: ItemInterface[] }>();

const emit = defineEmits<{
  (e: 'selectItem', id: number): any
}>();

const handleClick = (item: ItemInterface) => {
  emit('selectItem', item.id);
}
</script>

<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <li 
        v-for="(item, index) in items"
        :key="item.id"
        @click="handleClick(item)"
      >
        {{ item.name }} [{{ item.selected }}]
      </li>
    </ul>
  </div>
</template>
