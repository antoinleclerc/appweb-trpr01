<script lang="ts" setup>
import ListeProduits from "./components/ListeLego.vue";
import BarreRecherche from "./components/BarreRecherche.vue";
import FormulaireAjout from "./components/FormulaireAjout.vue";
import ExporterFormatCSV from "./components/ExporterFormatCSV.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { produits } from "./scripts/data";
import {
  ajouterProduit,
  filtrerProduits,
  modifierProduit,
  supprimerProduit,
  ouvrirFormulaireModification,
  produitAModifier,
} from "./scripts/Function";
</script>

<template>
  <div class="container mt-4">
    <Header />
    <BarreRecherche @update="filtrerProduits" />
    <ListeProduits
      :produits="produits"
      @supprimer="supprimerProduit"
      @dupliquer="ajouterProduit"
      @modifier="ouvrirFormulaireModification"
    />
    <ExporterFormatCSV :produits="produits" />
    <FormulaireAjout
      :produit="produitAModifier"
      @ajouter="ajouterProduit"
      @modifier="modifierProduit"
    />
    <Footer />
  </div>
</template>
<style scoped></style>
