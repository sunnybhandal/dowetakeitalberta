import { acceptedProducts, declinedProducts, type Product } from "@/lib/products";

export type BobVerdict = "yes" | "no" | "unsure" | "info";

export type BobAnswer = {
  verdict: BobVerdict;
  title: string | null;
  body: string;
  suggestions: string[];
};

export const bobSuggestions = [
  "Pop can",
  "Glass bottle",
  "Juice box",
  "Milk jug",
  "Soup",
  "Shampoo",
] as const;

type Rule = {
  verdict: "yes" | "no";
  title: string;
  body: string;
  phrases: string[];
};

const bringIn = "Empty it, rinse it, and it needs to have been bought in Alberta.";

function catalog(id: string): Product {
  const found = [...acceptedProducts, ...declinedProducts].find((item) => item.id === id);
  if (!found) {
    throw new Error(`Unknown container: ${id}`);
  }
  return found;
}

function accepted(id: string, phrases: string[], body?: string): Rule {
  const item = catalog(id);
  return {
    verdict: "yes",
    title: item.name,
    body: body ?? `${item.description} ${bringIn}`,
    phrases,
  };
}

function declined(id: string, phrases: string[], body?: string): Rule {
  const item = catalog(id);
  return {
    verdict: "no",
    title: item.name,
    body: body ?? item.description,
    phrases,
  };
}

const rules: Rule[] = [
  declined("household", [
    "garbage can",
    "trash can",
    "paint can",
    "shampoo",
    "conditioner",
    "body wash",
    "lotion",
    "soap",
    "detergent",
    "laundry",
    "bleach",
    "cleaner",
    "cleaning spray",
    "motor oil",
    "paint",
    "windex",
  ]),
  declined("coffee-creamer", [
    "coffee creamer",
    "oil based creamer",
    "creamer",
    "non dairy creamer",
    "nondairy creamer",
  ]),
  declined("powdered-creamer", ["powdered creamer", "creamer powder"]),
  declined("syrups", ["syrup", "flavour drop", "flavor drop", "water enhancer", "mio"]),
  declined("powdered-mixes", [
    "powdered drink",
    "powdered mix",
    "drink mix",
    "drink crystal",
    "crystal light",
    "kool aid",
    "koolaid",
    "tang",
  ]),
  declined("infant-formula", ["infant formula", "baby formula", "formula"]),
  declined("soup", ["tomato soup", "soup", "broth", "stock"]),
  declined("coconut-milk", ["coconut milk", "cooking coconut"]),
  declined("fruit-puree", [
    "fruit puree",
    "puree pouch",
    "baby food",
    "applesauce pouch",
    "squeeze pouch",
  ]),
  declined("food-jars", [
    "peanut butter",
    "pasta sauce",
    "pickle",
    "salsa",
    "glass jar",
    "jam jar",
    "food jar",
    "sauce jar",
    "jam",
  ]),
  declined("out-of-province", [
    "out of province",
    "outside alberta",
    "bought in bc",
    "bought in british columbia",
    "bought in saskatchewan",
    "bought in ontario",
    "from british columbia",
    "from saskatchewan",
    "from ontario",
  ]),
  {
    verdict: "no",
    title: "Drinking glasses and cups",
    body: "Wine glasses, mugs, and coffee cups aren’t refundable beverage containers.",
    phrases: ["wine glass", "drinking glass", "eyeglasses", "sunglasses", "glasses", "coffee cup", "travel mug", "mug"],
  },
  {
    verdict: "no",
    title: "Bags and straws",
    body: "Plastic bags, grocery bags, and straws aren’t refundable containers.",
    phrases: ["plastic bag", "grocery bag", "shopping bag", "straw"],
  },
  accepted("wine-boxes", ["boxed wine", "wine box", "bag in box", "box of wine"]),
  accepted("juice-boxes", ["juice box", "apple juice box"], "Juice and other drinks in rectangle boxes are refundable. Soup cartons are not. Empty it, and it needs to have been bought in Alberta."),
  accepted("drink-pouches", ["capri sun", "drink pouch", "juice pouch"]),
  {
    verdict: "yes",
    title: "Juice cans",
    body: `Steel juice and drink cans, including cans with an aluminum top. ${bringIn}`,
    phrases: ["juice can", "pineapple juice", "steel can"],
  },
  accepted("cartons", [
    "milk carton",
    "cream carton",
    "juice carton",
    "buttermilk",
    "half and half",
    "eggnog",
    "coffee cream",
    "whipping cream",
    "gable top",
  ]),
  {
    verdict: "yes",
    title: "Plant-based milk",
    body: `Almond, oat, soy, and other dairy-free drinks in cartons, jugs, or bottles. ${bringIn}`,
    phrases: ["almond milk", "oat milk", "soy milk", "oatmilk", "plant based milk", "plant milk", "dairy free milk"],
  },
  accepted("milk-jugs", ["milk jug", "plastic milk", "milk"], "Plastic milk jugs are refundable. Milk and cream cartons are too. Empty them, rinse them, and they need to have been bought in Alberta."),
  accepted(
    "aluminum-cans",
    ["aluminum can", "aluminium can", "beer can", "pop can", "soda can", "cider can", "energy drink", "sparkling water", "seltzer", "red bull", "monster"],
    "Pop, beer, cider, energy drinks, and sparkling water in cans are refundable. Empty the can, and it needs to have been bought in Alberta.",
  ),
  accepted(
    "plastic-bottles",
    ["plastic bottle", "water bottle", "pop bottle", "soda bottle", "juice bottle", "coconut water", "gatorade", "powerade", "water"],
    "Water, pop, juice, and other drinks in plastic bottles are refundable. Empty the bottle, rinse it, and it needs to have been bought in Alberta.",
  ),
  accepted(
    "glass-bottles",
    ["glass bottle", "beer bottle", "wine bottle", "liquor bottle", "cooler bottle", "kombucha", "wine", "liquor", "cooler", "glass"],
    "Beer, wine, liquor, coolers, pop, and juice in glass are refundable. Don’t bring broken glass. Empty it, and it needs to have been bought in Alberta.",
  ),
  accepted("drinkable-yogurt", ["drinkable yogurt", "yogurt drink", "yoghurt", "kefir", "yogurt"]),
  {
    verdict: "yes",
    title: "Ready-to-drink mixes",
    body: `Mixes you can drink as they are, including non-alcoholic mixes and alcoholic cocktail mixers. ${bringIn}`,
    phrases: ["cocktail mixer", "ready to drink", "ready to drink mix"],
  },
  accepted(
    "aluminum-cans",
    ["pop", "soda", "beer", "cider", "cans", "a can", "the can", "this can", "drink can"],
    "Cans and bottles of pop, beer, and cider are refundable. Empty them, and they need to have been bought in Alberta.",
  ),
  accepted(
    "juice-boxes",
    ["juice", "tetra pak", "tetra pack"],
    "Juice boxes, cartons, bottles, and cans are refundable when they held a drink. Soup and broth cartons are not. Empty it, and it needs to have been bought in Alberta.",
  ),
];

const summary: BobAnswer = {
  verdict: "info",
  title: "What we refund",
  body: "Empty drink containers bought in Alberta: cans, bottles, milk jugs, cartons, juice boxes, and drink pouches. 10¢ up to 1 litre, and 25¢ over 1 litre. Soup, food jars, shampoo, syrups, and powdered mixes aren’t refundable.",
  suggestions: [...bobSuggestions],
};

const photoUnsure: BobAnswer = {
  verdict: "unsure",
  title: "I can see the photo",
  body: "I can’t read the label from the picture alone. Tap the closest item, or type what was inside — pop can, juice box, soup carton, shampoo.",
  suggestions: [...bobSuggestions],
};

const textUnsure: BobAnswer = {
  verdict: "unsure",
  title: "I’m not sure yet",
  body: "I don’t see that on the refund list. Tell me what was inside, or send a photo with a short note like “oat milk” or “shampoo”. The counter can confirm anything still unclear.",
  suggestions: [...bobSuggestions],
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\b(jpe?g|png|gif|webp|heic|heif|image|img)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasPhrase(text: string, phrase: string) {
  const words = phrase.split(" ").filter(Boolean);
  if (words.length === 0) {
    return false;
  }

  const pattern = words
    .map((word, index) => {
      const base = escapeRegExp(word);
      return index === words.length - 1 ? `${base}(?:es|s)?` : base;
    })
    .join(" ");

  return new RegExp(`(^|[^a-z0-9])${pattern}([^a-z0-9]|$)`, "i").test(text);
}

function bestRule(text: string, verdict: "yes" | "no") {
  let best: { rule: Rule; phrase: string } | null = null;

  for (const rule of rules) {
    if (rule.verdict !== verdict) {
      continue;
    }
    for (const phrase of rule.phrases) {
      const normalized = normalize(phrase);
      if (!normalized || !hasPhrase(text, normalized)) {
        continue;
      }
      if (!best || normalized.length > best.phrase.length) {
        best = { rule, phrase: normalized };
      }
    }
  }

  return best;
}

function fromRule(rule: Rule, hasImage: boolean): BobAnswer {
  const intro = hasImage ? `From your photo, this looks like ${rule.title.toLowerCase()}. ` : "";
  return {
    verdict: rule.verdict,
    title: rule.title,
    body: `${intro}${rule.body}`,
    suggestions: [],
  };
}

export function identifyContainer(input: { text: string; fileName?: string; hasImage: boolean }): BobAnswer {
  const text = normalize(input.text);
  const fileName = normalize(input.fileName ?? "");
  const haystack = [text, fileName].filter(Boolean).join(" ");

  if (!haystack) {
    return input.hasImage ? photoUnsure : textUnsure;
  }

  const yes = bestRule(haystack, "yes");
  const no = bestRule(haystack, "no");

  if (yes && no) {
    const declinedInsideAccepted = hasPhrase(yes.phrase, no.phrase) && yes.phrase.length > no.phrase.length;
    return fromRule(declinedInsideAccepted ? yes.rule : no.rule, input.hasImage);
  }

  if (no) {
    return fromRule(no.rule, input.hasImage);
  }

  if (yes) {
    return fromRule(yes.rule, input.hasImage);
  }

  if (/what (do you|can i|does the depot)|which (items|containers)|what s accepted|what do we take|do we take$/.test(text)) {
    return summary;
  }

  if (/^(hi|hello|hey|howdy|thanks|thank you|help|good morning|good afternoon)\b/.test(text)) {
    return {
      verdict: "info",
      title: null,
      body: "Tell me the container, or attach a photo and a short note. Pop cans, bottles, juice boxes, and milk jugs are the usual ones.",
      suggestions: [...bobSuggestions],
    };
  }

  if (input.hasImage) {
    return photoUnsure;
  }

  return textUnsure;
}
