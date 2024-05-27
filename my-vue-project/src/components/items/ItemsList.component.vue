<script setup lang="ts">
import type { ItemInterface } from '@/models';

  defineProps<{ items: ItemInterface[] }>()
</script>

<template>
  <div>
    <h3>Items:</h3>
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
