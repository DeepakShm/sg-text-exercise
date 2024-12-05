import { FOOTER_NAV, SOCIAL_LINKS } from "../utils/FooterLinks";

function Footer() {
  return (
    <footer className="p-5 bg-primary py-16">
      <div className="max-w-screen-xl mx-auto space-y-12">
        <div className="flex flex-row flex-wrap">
          <nav className="grid flex-1 grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-2">
            {Object.values(FOOTER_NAV).map((nf) => (
              <div key={nf.title}>
                <h4 className="text-sm text-secondary mb-4 uppercase">{nf.title}</h4>
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
