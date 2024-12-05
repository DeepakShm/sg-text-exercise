import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function useSectionIndicator(container: React.RefObject<HTMLDivElement>) {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const sectionCount = document.getElementById("slide-count");
      const links: HTMLAnchorElement[] = gsap.utils.toArray(".nav-links a");

      // creating scroll-trigger for each section to check intersection on scroll
      links.forEach((a, idx) => {
        const href = a.getAttribute("href");
        if (href === null) return;
        const element = document.querySelector(href);
        if (element === null) return;
        ScrollTrigger.create({
          trigger: element,
          start: "top center",
          end: "bottom center",
          scroller: container.current,
          onToggle: (s) => s.isActive && setActive(a, idx),
        });
      });

      // toggle active class and update the section count
      function setActive(link: HTMLAnchorElement, idx: number) {
        links.forEach((el) => el.classList.remove("active"));
        link.classList.add("active");

        // updating the position of section number
        if (!sectionCount) return;
        sectionCount.style.top = `${22 * idx}px`;
        sectionCount.innerText = `0${idx + 1}`;
      }
    }, container);

    return () => {
      // cleanup on unmount
      context.revert();
    };
  }, [container]);
}

export default useSectionIndicator;
