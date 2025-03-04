<script lang="ts" setup>
import { defineEmits, defineProps, ref, watch } from "vue";
import type { PieceLego } from "../scripts/PieceLego";

const props = defineProps<{ produit?: PieceLego | null }>();

const emit = defineEmits<{
  (e: "ajouter", produit: PieceLego): void;
  (e: "modifier", produit: PieceLego): void;
}>();

const nom = ref(props.produit?.nom || "");
const prix = ref(props.produit?.prix || 0);
const description = ref(props.produit?.description || "");
const couleur = ref(props.produit?.couleur || "");
const stock = ref(props.produit?.stock || 0);
const id = ref(props.produit?.id || Math.random());

watch(
  () => props.produit,
  (newProduit) => {
    if (newProduit) {
      id.value = newProduit.id;
      nom.value = newProduit.nom;
      prix.value = newProduit.prix;
      description.value = newProduit.description;
      couleur.value = newProduit.couleur;
      stock.value = newProduit.stock;
    }
  },
  { deep: true }
);

const onSoumettre = () => {
  const produit: PieceLego = {
    id: id.value,
    nom: nom.value,
    prix: prix.value,
    description: description.value,
    couleur: couleur.value,
    stock: stock.value,
  };

  if (props.produit) {
    emit("modifier", produit);
  } else {
    emit("ajouter", produit);
  }

  if (!props.produit) {
    nom.value = "";
    prix.value = 0;
    description.value = "";
    couleur.value = "";
    stock.value = 0;
  }
};
</script>

<template>
  <form @submit.prevent="onSoumettre">
    <input v-model="nom" placeholder="Nom" required />
    <input v-model="prix" type="number" placeholder="Prix" required />
    <input v-model="description" placeholder="Description" />
    <input v-model="couleur" placeholder="Couleur" />
    <input v-model="stock" type="number" placeholder="Stock" required />
    <button type="submit">{{ produit ? "Modifier" : "Ajouter" }}</button>
  </form>
</template>
