import type { PieceLego } from "./PieceLego";
import { tousLesPieces, produits } from "./data";
import { ref } from "vue";

export const ajouterProduit = (produit: PieceLego) => {
  tousLesPieces.value.push({
    ...produit,
    id: tousLesPieces.value.length + 1,
  });
  produits.value = [...tousLesPieces.value];
};

export const supprimerProduit = (id: number) => {
  tousLesPieces.value = tousLesPieces.value.filter(
    (produit: PieceLego) => produit.id !== id
  );
  produits.value = [...tousLesPieces.value];
};

export const filtrerProduits = (searchTerm: string) => {
  if (!searchTerm.trim()) {
    produits.value = [...tousLesPieces.value];
  } else {
    produits.value = tousLesPieces.value.filter((produit: PieceLego) =>
      produit.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
};

export const produitAModifier = ref<PieceLego | null>(null);

export const ouvrirFormulaireModification = (produit: PieceLego) => {
  produitAModifier.value = { ...produit };
};

export const modifierProduit = (produit: PieceLego) => {
  const index = produits.value.findIndex(
    (produit: PieceLego) => produit.id === produit.id
  );
  if (index !== -1) {
    produits.value[index] = produit;
  }
  produitAModifier.value = null;
};
