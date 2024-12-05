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

function Footer() {
  return (
    <footer className="p-5 bg-primary pt-16 pb-11">
      <div className="max-w-screen-xl mx-auto space-y-12">
        <div className="flex flex-row flex-wrap">
          <nav className="grid flex-1 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
            {Object.values(FOOTER_NAV).map((nf) => (
              <div key={nf.title}>
                <h4 className="text-sm text-secondary mb-4">{nf.title}</h4>
                <ul className="font-gill space-y-3">
                  {nf.links.map((l, idx) => (
                    <li key={l.href + l.label + nf.title + idx} className="text-[13px] text-muted">
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="text-white hidden md:block">
            <h2 className="text-4xl">THIS IS THE</h2>
            <h2 className="text-[62px] leading-10 text-right">LOGO</h2>
          </div>
        </div>
        <div className="flex flex-row flex-1 justify-between">
          <p className="text-muted font-gill text-sm">
            2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .
          </p>
          <ul className="flex flex-row flex-wrap gap-10 text-white">
            {SOCIAL_LINKS.map((sl) => (
              <li key={sl.title}>
                <a href={sl.href}>{<sl.icon />}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
