import { useRef } from "react";
import Banner from "./Banner";
import Community from "./Community";
import Footer from "./Footer";
import Header, { NAV_LINKS } from "./Header";
import OurMenu from "./OurMenu";
import useSectionIndicator from "../hooks/useSectionIndicator";

function Container() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="wrapper" ref={containerRef}>
      <SectionIndicator conRef={containerRef} />
      <Header />
      <Banner />
      <Community />
      <OurMenu />
      <Footer />
    </div>
  );
}

function SectionIndicator({ conRef }: { conRef: React.RefObject<HTMLDivElement> }) {
  useSectionIndicator(conRef);
  return (
    <>
      <div className="fixed h-full left-0 z-20 flex items-center px-2">
        <ul className="nav-links space-y-5 relative">
          <span id="slide-count" className="absolute translate-y-2/4 leading-5 left-1 slide-count z-10">
            01
          </span>
          {NAV_LINKS.map((nl) => (
            <li key={nl.href}>
              <a href={nl.href}></a>
            </li>
          ))}
        </ul>
      </div>
      <button className="fixed z-10 -right-3 top-[calc(50%-25px)] -rotate-90 bg-white uppercase px-2 shadow-md">
        Request Info
      </button>
    </>
  );
}

export default Container;
