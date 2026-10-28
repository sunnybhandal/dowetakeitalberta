export type Product = {
  id: string;
  name: string;
  description: string;
};

export const acceptedProducts: Product[] = [
  {
    id: "aluminum-cans",
    name: "Aluminum cans",
    description: "Pop, beer, cider, energy drinks, and sparkling water.",
  },
  {
    id: "plastic-bottles",
    name: "Plastic bottles",
    description: "Water, pop, juice, and other drinks in plastic bottles.",
  },
  {
    id: "glass-bottles",
    name: "Glass bottles",
    description: "Beer, wine, liquor, coolers, pop, and juice in clear, green, or brown glass.",
  },
  {
    id: "milk-jugs",
    name: "Milk jugs",
    description: "Plastic milk jugs. Give them a quick rinse so they’re empty.",
  },
  {
    id: "cartons",
    name: "Milk and cream cartons",
    description: "Gable-top cartons of milk, cream, buttermilk, half-and-half, juice, and eggnog.",
  },
  {
    id: "juice-boxes",
    name: "Juice boxes",
    description: "Juice and other drinks in rectangle boxes.",
  },
  {
    id: "drink-pouches",
    name: "Drink pouches",
    description: "Flexible drink pouches, including kids’ juice pouches. Empty them first.",
  },
  {
    id: "wine-boxes",
    name: "Wine boxes",
    description: "Bag-in-a-box wine and similar boxed drinks. Tuck the tabs in, and keep the box dry and free of debris.",
  },
  {
    id: "juice-cans",
    name: "Juice cans",
    description: "Steel juice and drink cans, including cans with an aluminum top.",
  },
  {
    id: "plant-milks",
    name: "Plant-based milk",
    description: "Almond, oat, soy, and other dairy-free drinks in cartons, jugs, or bottles.",
  },
  {
    id: "drinkable-yogurt",
    name: "Drinkable yogurt",
    description: "Drinkable yogurt and kefir.",
  },
  {
    id: "ready-to-drink-mixes",
    name: "Ready-to-drink mixes",
    description: "Mixes you can drink as they are, including non-alcoholic mixes and alcoholic cocktail mixers.",
  },
];

export const declinedProducts: Product[] = [
  {
    id: "coffee-creamer",
    name: "Oil-based coffee creamer",
    description: "Oil-based coffee creamer containers. Dairy cream, milk, and liquid coffee cream are accepted.",
  },
  {
    id: "powdered-creamer",
    name: "Powdered creamer",
    description: "Powdered coffee creamer in tubs and canisters.",
  },
  {
    id: "syrups",
    name: "Syrups and flavour drops",
    description: "Coffee syrups, drink syrups, and liquid water flavour drops.",
  },
  {
    id: "powdered-mixes",
    name: "Powdered drink mixes",
    description: "Powders and crystals you have to mix with water.",
  },
  {
    id: "infant-formula",
    name: "Infant formula",
    description: "Formula made for babies 12 months and under.",
  },
  {
    id: "soup",
    name: "Soup and broth",
    description: "Soup, broth, and other food cartons, including tetra packs of tomato soup.",
  },
  {
    id: "coconut-milk",
    name: "Cooking coconut milk",
    description: "Coconut milk sold for cooking. Coconut water and other coconut drinks are accepted.",
  },
  {
    id: "fruit-puree",
    name: "Fruit puree pouches",
    description: "Squeeze pouches of fruit puree or baby food.",
  },
  {
    id: "food-jars",
    name: "Food jars",
    description: "Pickles, salsa, pasta sauce, jam, and other food jars.",
  },
  {
    id: "household",
    name: "Household containers",
    description: "Shampoo, detergent, cleaners, motor oil, and paint.",
  },
  {
    id: "out-of-province",
    name: "Containers from outside Alberta",
    description: "Containers purchased outside Alberta, even when they look the same as local ones.",
  },
];
