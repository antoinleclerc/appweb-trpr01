<script lang="ts" setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits<{
  (e: "update", searchTerm: string): void;
}>();

const searchTerm = ref("");

const onSearch = () => {
  emit("update", searchTerm.value);
};
</script>

<template>
  <input
    type="text"
    v-model="searchTerm"
    @input="onSearch"
    placeholder="Rechercher une pièce"
  />
</template>
