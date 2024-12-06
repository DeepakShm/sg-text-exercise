import { useLayoutEffect } from "react";
import gsap from "gsap";
import SectionHeading from "../components/SectionHeading";
import { DESSERTS_MENU, MAIN_MENU, SIDE_MENU, STARTER_MENU } from "../utils/MenuData";
import MenuItem from "../components/MenuItem";

function OurMenu() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const mediaQ = gsap.matchMedia();
      // media check for no scroll-animation in table and mobile
      mediaQ.add("(min-width: 800px)", () => {
        const container = document.querySelector(".wrapper");
        gsap.set(".menu-card", { y: "100%" });
        gsap.set(".rev-menu-card", { y: "-100%" });

        // animation trigger on scroll and translating items
        gsap.to(".menu-card", {
          scrollTrigger: {
            trigger: ".our-menu",
            scroller: container,
            start: "top center",
            scrub: 1.5,
          },
          y: "-100%",
        });
        // reverse animation menu
        gsap.to(".rev-menu-card", {
          scrollTrigger: {
            trigger: ".our-menu",
            scroller: container,
            start: "top center",
            scrub: 1.5,
          },
          y: "100%",
        });
      });
    });

    // cleanup on unmount
    return () => context.revert();
  }, []);

  return (
    <section id="menu" className="bg-muted-foreground">
      <div className="our-menu min-h-screen max-w-screen-lg mx-auto py-20 px-5 grid stack relative ">
        <div className="text-center z-[2] h-0">
          <SectionHeading heading="OUR Menu" className="max-w-60" cta={{ href: "#", text: "Know More" }} />
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] overflow-hidden menu-list pt-5">
          <div className="border-0 lg:border-r border-gray-300 ">
            <div data-order="for" className="menu-card lg:min-h-screen ">
              <MenuItem title="starters" menu={STARTER_MENU} />
            </div>
          </div>
          <div className="border-0 lg:border-r border-gray-300 ">
            <div data-order="rev" className="rev-menu-card lg:min-h-screen ">
              <MenuItem title="main course" menu={MAIN_MENU} />
            </div>
          </div>
          <div className="border-0 lg:border-r border-gray-300 ">
            <div data-order="for" className="menu-card lg:min-h-screen ">
              <MenuItem title="sides" menu={SIDE_MENU} />
            </div>
          </div>
          <div data-order="rev" className="rev-menu-card lg:min-h-screen ">
            <div>
              <MenuItem title="desserts" menu={DESSERTS_MENU} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMenu;
