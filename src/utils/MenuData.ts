const STARTER_MENU = [
  {
    name: "QUINOA CROQUETTAS",
    desc: "Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)",
    price: "£4.9",
  },
  {
    name: "CHIFA CHICHARRONES",
    desc: "Slow cooked, crispy pork belly with sweet soy sauce",
    price: "£6.9",
  },
  {
    name: "CALAMARES",
    desc: "Crispy baby squid with pickled jalapeño miso salsa",
    price: "£6.59",
  },
];

const MAIN_MENU = [
  {
    name: "EL CLASICO",
    desc: "Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)",
    price: "£9.9",
  },
  {
    name: "TIRADITO CALLAO",
    desc: "Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies",
    price: "£8.9",
  },
];

const SIDE_MENU = [
  {
    name: "SUPER POLLO",
    desc: "Marinated corn fed chicken pieces with rocotto salsa",
    price: "£4.9",
  },
  {
    name: "PATATAS FRITAS",
    desc: "Sweet potato fries with aji rocotto mayonnaise (v)",
    price: "£3.9",
  },
];

const DESSERTS_MENU = [
  {
    name: "ICECREAM",
    desc: "Lorem ipsum dolor sit amet salerma petrum sea",
    price: "£2.9",
  },
  {
    name: "TIRAMISU",
    desc: "Lorem ipsum dolor sit amet salerma petrum sea",
    price: "£3.9",
  },
  {
    name: "CHOCOLATE BROWNIE",
    desc: "Lorem ipsum dolor sit amet salerma petrum sea",
    price: "£3.5",
  },
];

export type MenuItemType = (typeof STARTER_MENU)[0];
export { SIDE_MENU, DESSERTS_MENU, MAIN_MENU, STARTER_MENU };
