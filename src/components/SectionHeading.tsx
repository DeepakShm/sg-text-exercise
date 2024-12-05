type SectionHeadingType = {
  heading: string;
  cta: {
    text: string;
    href: string;
    className?: string;
  };
  className?: string;
};

function SectionHeading({ heading, cta, className }: SectionHeadingType) {
  return (
    <div>
      <div className="inline-block space-y-3">
        <h2 className={`relative w-fit heading text-[62px] text-primary uppercase leading-[0.9] ` + className || ""}>
          {heading}
        </h2>
        <a className={`inline-block text-lg uppercase px-2 py-1 bg-secondary ` + cta.className || ""} href={cta.href}>
          {cta.text}
        </a>
      </div>
    </div>
  );
}

export default SectionHeading;
