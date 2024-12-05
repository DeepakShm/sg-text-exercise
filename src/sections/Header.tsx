export const NAV_LINKS = [
  { href: "#home", label: "ABOUT" },
  { href: "#community", label: "COMMUNITY" },
  { href: "#menu", label: "OUR MENU" },
  { href: "#location", label: "LOCATION" },
  { href: "#recipes", label: "RECIPES" },
];

const CTA_LINKS = [
  { href: "#contact", label: "CONTACT" },
  { href: "#login", label: "LOGIN" },
];

function Header() {
  return (
    <header className="fixed top-0 w-full px-9 py-5 z-50 backdrop-blur-[1px]">
      <nav className="flex flex-row gap-12 items-center">
        <a href="#" className="text-3xl">
          LOGO
        </a>
        <ul className="md:flex flex-row gap-12 items-center hidden">
          {NAV_LINKS.map((nl) => (
            <li key={nl.label}>
              <a href={nl.href} className="text-lg">
                {nl.label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex flex-row gap-12 items-center ml-auto">
          {CTA_LINKS.map((cl) => (
            <li key={cl.label}>
              <a href={cl.href}>{cl.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
