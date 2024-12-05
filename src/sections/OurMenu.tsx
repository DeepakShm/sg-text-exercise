import SectionHeading from "../components/SectionHeading";

function OurMenu() {
  return (
    <section id="menu" className="relative min-h-screen max-w-screen-xl mx-auto py-20 px-5">
      <div className="text-center">
        <SectionHeading heading="OUR Menu" className="max-w-60" cta={{ href: "#", text: "Know More" }} />
      </div>
    </section>
  );
}

export default OurMenu;
