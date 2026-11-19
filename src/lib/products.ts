export type ContainerPhoto = {
  name: string;
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  photos?: ContainerPhoto[];
};

const photo = (name: string, file: string, alt: string): ContainerPhoto => ({
  name,
  src: `/images/containers/${file}`,
  alt,
});

export const acceptedProducts: Product[] = [
  {
    id: "aluminum-cans",
    name: "Aluminum cans",
    description: "Pop, beer, cider, energy drinks, and sparkling water.",
    photos: [photo("Pop, beer, energy drinks", "aluminum-group.jpg", "Pop can, beer can, and energy drink can")],
  },
  {
    id: "plastic-bottles",
    name: "Plastic bottles",
    description: "Water, pop, juice, and other drinks in plastic bottles.",
    photos: [
      photo("Water", "plastic-water.jpg", "Plastic water bottle"),
      photo("Pop", "plastic-pop.jpg", "Plastic pop bottle"),
      photo("Juice", "plastic-juice.jpg", "Plastic juice bottle"),
    ],
  },
  {
    id: "glass-bottles",
    name: "Glass bottles",
    description: "Beer, wine, liquor, pop, and juice in clear, green, or brown glass.",
    photos: [
      photo("Beer", "glass-beer.jpg", "Brown glass beer bottle"),
      photo("Wine", "glass-wine.jpg", "Green glass wine bottle"),
      photo("Liquor", "glass-liquor.jpg", "Clear glass liquor bottle"),
      photo("Pop", "glass-pop.jpg", "Glass pop bottle"),
      photo("Juice", "glass-juice.jpg", "Glass juice bottle"),
    ],
  },
  {
    id: "milk-products",
    name: "Milk Products",
    description: "Plastic milk jugs and gable-top cartons of milk, cream, buttermilk, half-and-half, juice, and eggnog. Give them a quick rinse so they’re empty.",
    photos: [
      photo("Jugs", "milk-jug.jpg", "Plastic milk jug"),
      photo("Cartons", "carton-milk-cream.jpg", "Milk carton and cream carton"),
    ],
  },
  {
    id: "drink-pouches",
    name: "Drink Pouches",
    description: "Juice boxes and flexible drink pouches. Empty them first.",
    photos: [
      photo("Juice Box", "juice-box-apple.jpg", "Juice box"),
      photo("Juice Pouch", "drink-pouch.jpg", "Flexible juice drink pouch"),
    ],
  },
  {
    id: "wine-boxes",
    name: "Wine boxes",
    description: "Bag-in-a-box wine and similar boxed drinks. Tuck the tabs in, and keep the box dry and free of debris.",
    photos: [photo("Boxed wine", "wine-box.jpg", "Bag-in-box wine carton")],
  },
  {
    id: "drinkable-yogurt",
    name: "Drinkable yogurt",
    description: "Drinkable yogurt and kefir.",
    photos: [
      photo("Drinkable yogurt", "yogurt-drink.jpg", "Drinkable yogurt bottle"),
      photo("Kefir", "kefir.jpg", "Kefir bottle"),
    ],
  },
  {
    id: "coffee-creamer",
    name: "Coffee creamer",
    description: "Liquid coffee creamer, including oil-based creamer. Empty it and give it a quick rinse.",
    photos: [photo("Coffee creamer", "coffee-creamer.jpg", "Bottle of liquid coffee creamer")],
  },
];

export const declinedProducts: Product[] = [
  {
    id: "powdered-creamer",
    name: "Powdered creamer",
    description: "Powdered coffee creamer in tubs and canisters.",
    photos: [photo("Powdered creamer", "powdered-creamer.jpg", "Canister of powdered coffee creamer")],
  },
  {
    id: "syrups",
    name: "Syrups and flavour drops",
    description: "Coffee syrups, drink syrups, and liquid water flavour drops.",
    photos: [
      photo("Syrup", "syrup.jpg", "Bottle of drink syrup"),
      photo("Flavour drops", "flavour-drops.jpg", "Bottle of liquid water flavour drops"),
    ],
  },
  {
    id: "powdered-mixes",
    name: "Powdered drink mixes",
    description: "Powders and crystals you have to mix with water.",
    photos: [photo("Drink mix", "powdered-mix.jpg", "Tub of powdered drink mix")],
  },
  {
    id: "infant-formula",
    name: "Infant formula",
    description: "Formula made for babies 12 months and under.",
    photos: [photo("Infant formula", "infant-formula.jpg", "Can of infant formula")],
  },
  {
    id: "soup",
    name: "Soup and broth",
    description: "Soup, broth, and other food cartons, including tetra packs of tomato soup.",
    photos: [photo("Soup", "soup.jpg", "Carton of soup")],
  },
  {
    id: "coconut-milk",
    name: "Cooking coconut milk",
    description: "Coconut milk sold for cooking. Coconut water and other coconut drinks are accepted.",
    photos: [photo("Coconut milk", "coconut-milk.jpg", "Can of cooking coconut milk")],
  },
  {
    id: "fruit-puree",
    name: "Fruit puree pouches",
    description: "Squeeze pouches of fruit puree or baby food.",
    photos: [photo("Fruit puree", "fruit-puree.jpg", "Squeeze pouch of fruit puree")],
  },
  {
    id: "food-jars",
    name: "Food jars",
    description: "Pickles, salsa, pasta sauce, jam, and other food jars.",
    photos: [
      photo("Pickles", "pickle-jar.jpg", "Jar of pickles"),
      photo("Salsa", "salsa-jar.jpg", "Jar of salsa"),
      photo("Pasta sauce", "sauce-jar.jpg", "Jar of pasta sauce"),
      photo("Jam", "jam-jar.jpg", "Jar of jam"),
    ],
  },
  {
    id: "household",
    name: "Household containers",
    description: "Shampoo, detergent, cleaners, motor oil, and paint.",
    photos: [
      photo("Shampoo", "shampoo.jpg", "Bottle of shampoo"),
      photo("Detergent", "detergent.jpg", "Jug of laundry detergent"),
      photo("Cleaner", "cleaner.jpg", "Spray bottle of household cleaner"),
      photo("Motor oil", "motor-oil.jpg", "Bottle of motor oil"),
      photo("Paint", "paint.jpg", "Can of paint"),
    ],
  },
  {
    id: "out-of-province",
    name: "Containers from outside Alberta",
    description: "Containers purchased outside Alberta, even when they look the same as local ones.",
    photos: [photo("Bought outside Alberta", "out-of-province.jpg", "Beverage container bought outside Alberta")],
  },
];
