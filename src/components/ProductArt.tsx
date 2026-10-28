type FrameProps = {
  children: React.ReactNode;
};

function Frame({ children }: FrameProps) {
  return (
    <svg viewBox="0 0 240 180" aria-hidden="true" className="h-36 w-full">
      <ellipse cx="120" cy="166" rx="64" ry="7" fill="#171411" opacity="0.08" />
      {children}
    </svg>
  );
}

function AluminumCans() {
  return (
    <Frame>
      <g>
        <ellipse cx="86" cy="138" rx="26" ry="8" fill="#0e5c68" />
        <rect x="60" y="46" width="52" height="92" fill="#127181" />
        <rect x="68" y="58" width="6" height="68" rx="3" fill="#ffffff" opacity="0.22" />
        <ellipse cx="86" cy="138" rx="26" ry="8" fill="#178ea3" />
        <ellipse cx="86" cy="46" rx="26" ry="8" fill="#7ec9d6" />
        <ellipse cx="86" cy="46" rx="18" ry="5" fill="#f4fbfc" />
        <rect x="60" y="86" width="52" height="12" fill="#9a7632" />
      </g>
      <g>
        <ellipse cx="142" cy="146" rx="36" ry="11" fill="#0e5c68" />
        <rect x="106" y="36" width="72" height="110" fill="#178ea3" />
        <rect x="116" y="50" width="8" height="82" rx="4" fill="#ffffff" opacity="0.28" />
        <ellipse cx="142" cy="146" rx="36" ry="11" fill="#1a9aaf" />
        <ellipse cx="142" cy="36" rx="36" ry="11" fill="#8fd3de" />
        <ellipse cx="142" cy="36" rx="26" ry="7" fill="#f7fbfc" />
        <rect x="106" y="88" width="72" height="18" fill="#b08a3a" />
        <rect x="106" y="92" width="72" height="3" fill="#f3e6c4" opacity="0.75" />
        <ellipse cx="142" cy="35" rx="10" ry="3.5" fill="#c4a15a" />
        <circle cx="137" cy="35" r="1.7" fill="#7a5c22" />
      </g>
    </Frame>
  );
}

function PlasticBottles() {
  return (
    <Frame>
      <path
        fill="#d7f0f4"
        d="M108 28h24l4 16c16 8 22 24 22 40v62c0 10-16 16-38 16s-38-6-38-16V84c0-16 6-32 22-40l4-16Z"
      />
      <rect x="114" y="50" width="8" height="92" rx="4" fill="#ffffff" opacity="0.55" />
      <rect x="104" y="16" width="32" height="16" rx="4" fill="#178ea3" />
      <rect x="100" y="98" width="40" height="28" rx="2" fill="#178ea3" />
      <rect x="106" y="104" width="28" height="4" rx="2" fill="#f3e6c4" />
    </Frame>
  );
}

function GlassBottles() {
  return (
    <Frame>
      <path
        fill="#c5e4ea"
        stroke="#178ea3"
        strokeWidth="3"
        d="M111 30h18v14l8 18c12 8 16 20 16 34v48c0 12-14 20-33 20s-33-8-33-20V96c0-14 4-26 16-34l8-18V30Z"
      />
      <path fill="#ffffff" opacity="0.45" d="M116 48h6l-2 96h-8l4-96Z" />
      <rect x="106" y="14" width="28" height="18" rx="3" fill="#b08a3a" />
      <rect x="104" y="108" width="32" height="22" fill="#127181" />
      <path fill="#b08a3a" d="M108 18h6v8h-6zM126 18h6v8h-6z" opacity="0.45" />
    </Frame>
  );
}

function MilkJugs() {
  return (
    <Frame>
      <rect x="78" y="48" width="84" height="104" rx="18" fill="#178ea3" />
      <rect x="90" y="62" width="8" height="76" rx="4" fill="#ffffff" opacity="0.25" />
      <rect x="96" y="28" width="40" height="26" rx="6" fill="#127181" />
      <rect x="92" y="16" width="48" height="16" rx="4" fill="#b08a3a" />
      <path
        d="M162 70h16a18 18 0 0 1 0 36h-16"
        fill="none"
        stroke="#0e5c68"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <rect x="92" y="96" width="48" height="22" rx="2" fill="#f5f2ea" />
    </Frame>
  );
}

function Cartons() {
  return (
    <Frame>
      <path
        fill="#ffffff"
        stroke="#178ea3"
        strokeWidth="3"
        strokeLinejoin="round"
        d="M84 64 120 42l36 22v94H84V64Z"
      />
      <path fill="#178ea3" d="M87 114h66v43H87V114Z" />
      <path fill="#127181" d="M86 64 120 44l34 20-34 15-34-15Z" />
      <path d="M120 58v18" stroke="#ffffff" strokeWidth="2.5" />
      <rect x="100" y="124" width="40" height="14" rx="2" fill="#ffffff" />
    </Frame>
  );
}

function JuiceBoxes() {
  return (
    <Frame>
      <rect x="78" y="48" width="84" height="108" rx="6" fill="#178ea3" />
      <rect x="78" y="48" width="18" height="108" fill="#127181" />
      <rect x="96" y="78" width="48" height="36" rx="2" fill="#f5f2ea" />
      <rect x="102" y="86" width="28" height="5" rx="2" fill="#b08a3a" />
      <rect x="102" y="96" width="20" height="4" rx="2" fill="#178ea3" />
      <g transform="rotate(28 168 46)">
        <rect x="156" y="28" width="7" height="42" rx="3" fill="#b08a3a" />
      </g>
    </Frame>
  );
}

function DrinkPouches() {
  return (
    <Frame>
      <path
        fill="#d5eef2"
        stroke="#178ea3"
        strokeWidth="3"
        d="M86 42h68l10 18v78c0 10-14 16-44 16s-44-6-44-16V60l10-18Z"
      />
      <path fill="#178ea3" d="M86 42h68l-8 16H94L86 42Z" />
      <rect x="98" y="86" width="44" height="28" rx="2" fill="#b08a3a" />
      <path fill="#ffffff" opacity="0.4" d="M96 64h8v72h-8z" />
    </Frame>
  );
}

function WineBoxes() {
  return (
    <Frame>
      <rect x="58" y="46" width="124" height="112" rx="4" fill="#178ea3" />
      <rect x="58" y="46" width="18" height="112" fill="#127181" />
      <rect x="92" y="64" width="68" height="30" rx="2" fill="#f5f2ea" />
      <rect x="100" y="72" width="40" height="5" rx="2" fill="#b08a3a" />
      <circle cx="126" cy="124" r="13" fill="#b08a3a" />
      <circle cx="126" cy="124" r="5" fill="#7a5c22" />
      <rect x="136" y="120" width="20" height="8" rx="2" fill="#e4c98a" />
    </Frame>
  );
}

function JuiceCans() {
  return (
    <Frame>
      <ellipse cx="120" cy="146" rx="46" ry="12" fill="#0e5c68" />
      <rect x="74" y="58" width="92" height="88" fill="#b08a3a" />
      <rect x="86" y="70" width="8" height="64" rx="4" fill="#ffffff" opacity="0.28" />
      <ellipse cx="120" cy="146" rx="46" ry="12" fill="#c4a15a" />
      <ellipse cx="120" cy="58" rx="46" ry="12" fill="#e4c98a" />
      <ellipse cx="120" cy="58" rx="34" ry="8" fill="#f7f4ee" />
      <rect x="74" y="92" width="92" height="22" fill="#178ea3" />
    </Frame>
  );
}

function PlantMilks() {
  return (
    <Frame>
      <path
        fill="#ffffff"
        stroke="#178ea3"
        strokeWidth="3"
        strokeLinejoin="round"
        d="M84 64 120 42l36 22v94H84V64Z"
      />
      <path fill="#178ea3" d="M87 120h66v37H87V120Z" />
      <path fill="#127181" d="M86 64 120 44l34 20-34 15-34-15Z" />
      <path d="M120 58v18" stroke="#ffffff" strokeWidth="2.5" />
      <path fill="#178ea3" d="M120 88c7 5 11 9 11 15 0 5-5 9-11 9s-11-4-11-9c0-6 4-10 11-15Z" />
      <path d="M120 98v12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </Frame>
  );
}

function DrinkableYogurt() {
  return (
    <Frame>
      <path fill="#178ea3" d="M98 74h44l8 18v54c0 12-14 20-30 20s-30-8-30-20V92l8-18Z" />
      <rect x="110" y="84" width="7" height="64" rx="3" fill="#ffffff" opacity="0.25" />
      <rect x="106" y="52" width="28" height="24" rx="6" fill="#d7f0f4" />
      <rect x="100" y="38" width="40" height="16" rx="4" fill="#b08a3a" />
      <rect x="108" y="108" width="24" height="16" rx="2" fill="#f3e6c4" />
    </Frame>
  );
}

function ReadyToDrinkMixes() {
  return (
    <Frame>
      <path
        fill="#d7f0f4"
        d="M78 50h28l4 14c10 6 14 16 14 28v46c0 8-10 14-24 14s-24-6-24-14V92c0-12 4-22 14-28l4-14Z"
      />
      <rect x="76" y="36" width="32" height="16" rx="4" fill="#b08a3a" />
      <rect x="82" y="100" width="22" height="18" fill="#178ea3" />
      <path
        fill="#178ea3"
        d="M150 78h28v46c0 16-6 26-14 26s-14-10-14-26V78Z"
      />
      <path fill="#f5f2ea" d="M154 86h20v8c-4 6-16 6-20 0v-8Z" />
      <path fill="#b08a3a" d="M168 70c8 6 10 14 8 22h-8c0-8-2-12-8-16 4-4 6-6 8-6Z" />
    </Frame>
  );
}

function CoffeeCreamer() {
  return (
    <Frame>
      <path
        fill="#f3e6c8"
        d="M100 62h40l10 22v58c0 12-14 18-30 18s-30-6-30-18V84l10-22Z"
      />
      <rect x="104" y="74" width="7" height="70" rx="3" fill="#ffffff" opacity="0.4" />
      <rect x="96" y="40" width="48" height="24" rx="8" fill="#d8c298" />
      <rect x="104" y="26" width="32" height="16" rx="4" fill="#b08a3a" />
      <rect x="108" y="102" width="28" height="18" rx="2" fill="#178ea3" />
    </Frame>
  );
}

function PowderedCreamer() {
  return (
    <Frame>
      <ellipse cx="120" cy="146" rx="42" ry="12" fill="#7a5c22" />
      <rect x="78" y="62" width="84" height="84" fill="#f3e6c8" />
      <ellipse cx="120" cy="146" rx="42" ry="12" fill="#e4c98a" />
      <ellipse cx="120" cy="62" rx="42" ry="12" fill="#b08a3a" />
      <ellipse cx="120" cy="56" rx="36" ry="10" fill="#d8c298" />
      <rect x="92" y="88" width="56" height="28" rx="2" fill="#178ea3" />
      <rect x="100" y="96" width="28" height="4" rx="2" fill="#f5f2ea" />
    </Frame>
  );
}

function Syrups() {
  return (
    <Frame>
      <path
        fill="#f3e6c8"
        d="M104 78h32l6 16v52c0 10-10 16-22 16s-22-6-22-16V94l6-16Z"
      />
      <rect x="108" y="58" width="24" height="22" fill="#d8c298" />
      <path fill="#7a5c22" d="M112 28h16v18h-6v12h-4V46h-6V28Z" />
      <rect x="108" y="22" width="24" height="8" rx="2" fill="#b08a3a" />
      <rect x="110" y="112" width="20" height="16" fill="#178ea3" />
      <circle cx="168" cy="100" r="16" fill="#178ea3" />
      <circle cx="168" cy="100" r="6" fill="#d7f0f4" />
    </Frame>
  );
}

function PowderedMixes() {
  return (
    <Frame>
      <path fill="#e7e1d4" d="M76 70h88l-8 82H84L76 70Z" />
      <ellipse cx="120" cy="70" rx="46" ry="12" fill="#f7f4ee" />
      <ellipse cx="120" cy="64" rx="40" ry="10" fill="#b08a3a" />
      <rect x="92" y="100" width="56" height="24" rx="2" fill="#178ea3" />
      <path
        fill="none"
        stroke="#7a5c22"
        strokeWidth="4"
        strokeLinecap="round"
        d="M150 96c16 4 22 16 16 28"
      />
      <ellipse cx="168" cy="128" rx="12" ry="6" fill="#d8c298" />
    </Frame>
  );
}

function InfantFormula() {
  return (
    <Frame>
      <ellipse cx="120" cy="148" rx="48" ry="12" fill="#7a5c22" />
      <rect x="72" y="58" width="96" height="90" rx="8" fill="#f3e6c8" />
      <ellipse cx="120" cy="148" rx="48" ry="12" fill="#e4c98a" />
      <rect x="72" y="46" width="96" height="18" rx="8" fill="#b08a3a" />
      <rect x="88" y="82" width="64" height="36" rx="4" fill="#178ea3" />
      <rect x="96" y="92" width="36" height="5" rx="2" fill="#f5f2ea" />
      <rect x="96" y="102" width="24" height="4" rx="2" fill="#d7f0f4" />
    </Frame>
  );
}

function Soup() {
  return (
    <Frame>
      <path
        fill="#f3e6c8"
        stroke="#b08a3a"
        strokeWidth="3"
        strokeLinejoin="round"
        d="M86 58 120 38l34 20v96H86V58Z"
      />
      <path fill="#b08a3a" d="M88 58 120 40l32 18-32 14-32-14Z" />
      <rect x="98" y="96" width="44" height="28" rx="2" fill="#178ea3" />
      <path d="M108 106h24M108 114h16" stroke="#f5f2ea" strokeWidth="3" strokeLinecap="round" />
    </Frame>
  );
}

function CoconutMilk() {
  return (
    <Frame>
      <ellipse cx="120" cy="146" rx="40" ry="11" fill="#7a5c22" />
      <rect x="80" y="52" width="80" height="94" fill="#f3e6c8" />
      <rect x="88" y="64" width="7" height="70" rx="3" fill="#ffffff" opacity="0.35" />
      <ellipse cx="120" cy="146" rx="40" ry="11" fill="#e4c98a" />
      <ellipse cx="120" cy="52" rx="40" ry="11" fill="#d8c298" />
      <ellipse cx="120" cy="52" rx="28" ry="7" fill="#f7f1e4" />
      <rect x="80" y="88" width="80" height="30" fill="#178ea3" />
      <path fill="#ffffff" d="M120 94c7 5 10 10 10 16 0 5-4 9-10 9s-10-4-10-9c0-6 3-11 10-16Z" />
      <path d="M120 102v14" stroke="#127181" strokeWidth="2" strokeLinecap="round" />
    </Frame>
  );
}

function FruitPuree() {
  return (
    <Frame>
      <path fill="#f3e6c8" d="M102 72h36l18 62c2 14-10 24-36 24s-38-10-36-24l18-62Z" />
      <rect x="110" y="78" width="7" height="62" rx="3" fill="#ffffff" opacity="0.4" />
      <rect x="108" y="48" width="24" height="26" rx="7" fill="#b08a3a" />
      <rect x="108" y="100" width="28" height="20" rx="3" fill="#178ea3" />
    </Frame>
  );
}

function FoodJars() {
  return (
    <Frame>
      <path fill="#d7eef2" stroke="#178ea3" strokeWidth="3" d="M86 70h68v62c0 16-14 26-34 26s-34-10-34-26V70Z" />
      <path fill="#ffffff" opacity="0.4" d="M96 78h8v68h-8z" />
      <rect x="78" y="48" width="84" height="24" rx="4" fill="#b08a3a" />
      <rect x="86" y="54" width="68" height="6" rx="2" fill="#e4c98a" />
      <rect x="98" y="96" width="44" height="22" rx="2" fill="#178ea3" />
    </Frame>
  );
}

function Household() {
  return (
    <Frame>
      <path fill="#c9c4b8" d="M104 70h36l8 18v60c0 8-12 14-26 14s-26-6-26-14V88l8-18Z" />
      <rect x="108" y="78" width="6" height="68" rx="3" fill="#ffffff" opacity="0.35" />
      <path fill="#7a5c22" d="M108 46h28v24h-28z" />
      <path fill="#171411" d="M112 34h8v14h-8zM120 28h22v8H120z" />
      <rect x="112" y="104" width="22" height="16" fill="#178ea3" />
      <rect x="168" y="96" width="28" height="52" rx="4" fill="#178ea3" />
      <rect x="172" y="86" width="20" height="12" rx="2" fill="#b08a3a" />
    </Frame>
  );
}

function OutOfProvince() {
  return (
    <Frame>
      <path
        fill="#d7f0f4"
        d="M96 40h28l4 16c12 6 16 18 16 32v48c0 10-12 16-30 16s-30-6-30-16V88c0-14 4-26 16-32l4-16Z"
      />
      <rect x="94" y="26" width="32" height="16" rx="4" fill="#178ea3" />
      <rect x="100" y="96" width="28" height="20" fill="#178ea3" />
      <path fill="#b08a3a" d="M168 34a16 16 0 0 0-16 16c0 12 16 30 16 30s16-18 16-30a16 16 0 0 0-16-16Z" />
      <circle cx="168" cy="50" r="6" fill="#f5f2ea" />
    </Frame>
  );
}

const art: Record<string, () => React.ReactElement> = {
  "aluminum-cans": AluminumCans,
  "plastic-bottles": PlasticBottles,
  "glass-bottles": GlassBottles,
  "milk-jugs": MilkJugs,
  cartons: Cartons,
  "juice-boxes": JuiceBoxes,
  "drink-pouches": DrinkPouches,
  "wine-boxes": WineBoxes,
  "juice-cans": JuiceCans,
  "plant-milks": PlantMilks,
  "drinkable-yogurt": DrinkableYogurt,
  "ready-to-drink-mixes": ReadyToDrinkMixes,
  "coffee-creamer": CoffeeCreamer,
  "powdered-creamer": PowderedCreamer,
  syrups: Syrups,
  "powdered-mixes": PowderedMixes,
  "infant-formula": InfantFormula,
  soup: Soup,
  "coconut-milk": CoconutMilk,
  "fruit-puree": FruitPuree,
  "food-jars": FoodJars,
  household: Household,
  "out-of-province": OutOfProvince,
};

export function ProductArt({ id }: { id: string }) {
  const Art = art[id];
  if (!Art) {
    return null;
  }
  return <Art />;
}
