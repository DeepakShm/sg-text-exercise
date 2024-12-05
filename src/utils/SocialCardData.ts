import { SocialCardPropType } from "../components/SocialCard";

import CardImg_1 from "../assets/images/1000132330.png";
import CardImg_2 from "../assets/images/1000132331.png";
import CardImg_3 from "../assets/images/1000132332.png";

export const SOCIAL_CARD_DATA: SocialCardPropType[] = [
  {
    rowReverse: true,
    card: {
      img: CardImg_1,
      body: "It's taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto",
      title: "@buzzfeedfood",
      href: "#",
      likes: "14.6k",
      comments: "60",
    },
    testimoni: "",
  },
  {
    rowReverse: false,
    card: {
      img: CardImg_2,
      body: "Waffle sticks in Copenhagen! 😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood",
      title: "@love_food",
      href: "#",
      likes: "99.6k",
      comments: "70",
    },
    testimoni:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.",
  },
  {
    rowReverse: true,
    card: {
      img: CardImg_3,
      body: "Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)",
      title: "@buzzfeedfoodInd",
      href: "#",
      likes: "15.6k",
      comments: "86",
    },
    testimoni:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.",
  },
];
