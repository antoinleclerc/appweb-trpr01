import { ref } from "vue";
import type { PieceLego } from "./PieceLego";

export const tousLesPieces = ref<PieceLego[]>([
  {
    id: 1,
    nom: "Brique",
    prix: 1,
    description: "Brique classique",
    couleur: "Rouge",
    stock: 68,
  },
  {
    id: 2,
    nom: "Plaque",
    prix: 5,
    description: "Grande plaque LEGO",
    couleur: "Vert",
    stock: 20,
  },
  {
    id: 3,
    nom: "Porte",
    prix: 3,
    description: "Porte LEGO",
    couleur: "Brun",
    stock: 12,
  },
  {
    id: 4,
    nom: "Fleur",
    prix: 7,
    description: "Fleur LEGO",
    couleur: "Gris",
    stock: 0,
  },
  {
    id: 5,
    nom: "Arbre",
    prix: 4,
    description: "Petit arbre LEGO",
    couleur: "Vert",
    stock: 15,
  },
  {
    id: 6,
    nom: "Stud",
    prix: 1,
    description: "Stud LEGO",
    couleur: "Bleu",
    stock: 200,
  },
  {
    id: 7,
    nom: "Pneue",
    prix: 2,
    description: "Pneue LEGO",
    couleur: "Noir",
    stock: 0,
  },
  {
    id: 8,
    nom: "Minifigure",
    prix: 10,
    description: "Minifigure LEGO",
    couleur: "Mixte",
    stock: 20,
  },
]);

export const produits = ref<PieceLego[]>([...tousLesPieces.value]);
