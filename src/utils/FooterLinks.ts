import Fb from "../assets/svg/facebook-icon.svg";
import In from "../assets/svg/Linkedin-icon.svg";
import Ig from "../assets/svg/instagram-icon.svg";
import Tw from "../assets/svg/twitter-icon.svg";

const NAV_LINKS = [
  { href: "#", label: "SubSection" },
  { href: "#", label: "SubSection" },
  { href: "#", label: "SubSection" },
  { href: "#", label: "SubSection" },
];

const FOOTER_NAV = {
  section1: {
    title: "Section 1",
    links: NAV_LINKS,
  },
  section2: {
    title: "Section 2",
    links: NAV_LINKS,
  },
  section3: {
    title: "Section 3",
    links: NAV_LINKS,
  },
  section4: {
    title: "Section 4",
    links: NAV_LINKS,
  },
  section5: {
    title: "Section 5",
    links: NAV_LINKS,
  },
};
const SOCIAL_LINKS = [
  { icon: Fb, href: "#", title: "Facebook" },
  { icon: In, href: "#", title: "LinkedIn" },
  { icon: Ig, href: "#", title: "Instagram" },
  { icon: Tw, href: "#", title: "Twitter" },
];

export { FOOTER_NAV, NAV_LINKS, SOCIAL_LINKS };
