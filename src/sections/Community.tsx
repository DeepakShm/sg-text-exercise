import { useLayoutEffect } from "react";
import SectionHeading from "../components/SectionHeading";
import SocialCard from "../components/SocialCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SOCIAL_CARD_DATA } from "../utils/SocialCardData";

function Community() {
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.set(".sc-card", { opacity: 0, y: 200, scale: 0.9 });
      const container = document.querySelector(".wrapper");
      ScrollTrigger.batch(".sc-card", {
        scroller: container,
        onEnter: (cards) => {
          cards.forEach((card, idx) => {
            gsap.to(card, { opacity: 1, y: 0, scale: 1, stagger: 0.5, delay: idx * 0.3 });
          });
        },
        once: true,
      });
    });
    // cleanup on unmount
    return () => context.revert();
  }, []);

  return (
    <section id="community" className="relative min-h-screen max-w-screen-xl mx-auto py-20 px-5">
      <div className="lg:max-w-60 static lg:absolute z-[1] left-1/4 uppercase">
        <SectionHeading heading="MEET OUR COMMUNITY" cta={{ href: "#", text: "Know More" }} />
        <p>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
      </div>
      <div className="space-y-6 sc-cards mt-5 lg:mt-16 max-w-screen-lg mx-auto">
        {SOCIAL_CARD_DATA.map((c) => (
          <SocialCard key={c.card.title} {...c} />
        ))}
      </div>
    </section>
  );
}

export default Community;
