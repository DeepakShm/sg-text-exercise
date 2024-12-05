import BannerImg from "../assets/images/1000132333.png";
import LogoStamp from "../assets/svg/stamp.svg";

function Banner() {
  return (
    <section id="home" className="h-screen bg-secondary">
      <div className="grid w-full h-screen stack">
        <img className="h-screen object-cover w-full" src={BannerImg} alt="banner" />
        <div className="grid place-content-center max-w-screen-md mx-auto text-white">
          <div className="relative px-5 uppercase">
            <span className="absolute -left-[40%] -top-[50%] hidden md:block text-primary">
              <LogoStamp />
            </span>
            <h1 className="text-[50px] md:text-[82px] leading-4 drop-shadow-md">THE BEST FOODIE</h1>
            <h1 className="text-[50px] md:text-[115px] drop-shadow-md">EXPERIENCE</h1>
            <h2 className="text-[20px] md:text-4xl text-center drop-shadow-md">NOW IN LONDON</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
