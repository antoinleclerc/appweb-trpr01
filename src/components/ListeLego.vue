<script lang="ts" setup>
import { defineProps, defineEmits, ref } from "vue";
import type { PieceLego } from "../scripts/PieceLego";

const props = defineProps<{
  produits: PieceLego[];
}>();

const emit = defineEmits<{
  (e: "supprimer", id: number): void;
  (e: "dupliquer", produit: PieceLego): void;
  (e: "modifier", produit: PieceLego): void;
}>();

const onSupprimer = (id: number) => {
  emit("supprimer", id);
};

const dupliquerProduit = (produit: PieceLego) => {
  const nouveauProduit = { ...produit, id: Math.random() };
  emit("dupliquer", nouveauProduit);
};

const modifierProduit = (produit: PieceLego) => {
  emit("modifier", produit);
};

const detailsVisible = ref<number | null>(null);

const toggleDetails = (id: number) => {
  detailsVisible.value = detailsVisible.value === id ? null : id;
};

const getStockClass = (stock: number) => {
  if (stock > 50) return "text-success fw-bold";
  if (stock >= 15) return "text-warning fw-bold";
  return "text-danger fw-bold";
};

const alertVisible = ref(true);

const dismissAlert = () => {
  alertVisible.value = false;
};
</script>

<template>
  <div class="container mt-4">
    <table class="table table-hover table-striped text-center">
      <thead class="table-dark">
        <tr>
          <th>Nom</th>
          <th>Prix (€)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="produit in produits" :key="produit.id">
          <tr @click="toggleDetails(produit.id)" class="produit-row">
            <td class="fw-bold text-primary" style="cursor: pointer">
              {{ produit.nom }}
            </td>
            <td>{{ produit.prix.toFixed(2) }}</td>
            <td>
              <button
                @click.stop="onSupprimer(produit.id)"
                class="btn btn-danger btn-sm mx-1"
              >
                <i class="bi bi-trash"></i>
              </button>
              <button
                @click.stop="dupliquerProduit(produit)"
                class="btn btn-secondary btn-sm mx-1"
              >
                <i class="bi bi-files"></i>
              </button>
              <button
                @click.stop="modifierProduit(produit)"
                class="btn btn-warning btn-sm mx-1"
              >
                <i class="bi bi-pencil"></i>
              </button>
              <i
                v-if="detailsVisible === produit.id"
                class="bi bi-chevron-up"
              ></i>
              <i v-else class="bi bi-chevron-down"></i>
            </td>
          </tr>
          <tr v-if="detailsVisible === produit.id">
            <td colspan="3">
              <div class="details border rounded p-3 mt-2 bg-light shadow-sm">
                <p><strong>Description:</strong> {{ produit.description }}</p>
                <p><strong>Couleur:</strong> {{ produit.couleur }}</p>
                <p>
                  <strong>Stock:</strong>
                  <span :class="getStockClass(produit.stock)">
                    {{ produit.stock }}
                  </span>
                </p>
              </div>
            </td>
          </tr>
          <tr v-if="produit.stock === 0 && alertVisible">
            <td colspan="3">
              <div
                class="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                Plus de stock pour {{ produit.nom }} !
                <button
                  type="button"
                  class="close"
                  @click="dismissAlert()"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
