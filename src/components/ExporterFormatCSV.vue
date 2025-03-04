<script lang="ts" setup>
import { defineProps } from "vue";
import type { PieceLego } from "../scripts/PieceLego";

const props = defineProps<{
  produits: PieceLego[];
}>();

const exporterFormatCSV = () => {
  if (!props.produits.length) return;

  const enTetes = ["ID", "Nom", "Prix", "Description", "Couleur", "Stock"];
  const lignes = props.produits.map((produit) => [
    produit.id,
    produit.nom,
    produit.prix,
    produit.description,
    produit.couleur,
    produit.stock,
  ]);

  const contenuCSV = [
    enTetes.join(";"),
    ...lignes.map((ligne) => ligne.join(";")),
  ].join("\n");

  const blob = new Blob([contenuCSV], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const lien = document.createElement("a");
  lien.href = url;
  lien.download = "liste_lego.csv";
  lien.click();
  URL.revokeObjectURL(url);
};
</script>

<template>
  <div class="text-center my-3">
    <button class="btn btn-success" @click="exporterFormatCSV">
      <i class="bi bi-download"></i> Exporter en CSV
    </button>
  </div>
</template>
