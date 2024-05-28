<template>
  <div>
    <ItemsListComponent :items="items" :loading="loading" @selectItem="onSelectItem" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import ItemsListComponent from '@/components/items/ItemsList.component.vue';
import { useAppStore } from '@/store';
import type { ItemInterface } from '@/models';

export default defineComponent({
  name: 'Home',
  components: {
    ItemsListComponent,
  },
  setup() {
    const { itemsStore } = useAppStore();
    const { actions: itemsStoreActions } = itemsStore;

    const items = computed((): ItemInterface[] => {
      return itemsStore.getters.items;
    });

    const loading = computed((): boolean => {
      return itemsStore.getters.loading;
    });

    const onSelectItem = async (id: number) => {
      await itemsStoreActions.toggleItemSelected(id);
    };

    onMounted(async () => {
      await itemsStoreActions.loadItems();
    });

    return {
      items,
      loading,
      onSelectItem,
    };
  }
});
</script>
