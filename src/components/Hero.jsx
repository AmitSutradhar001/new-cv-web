import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] pl-8 md:h-[70vh] mx-auto py-6 bg-black">
      <div className="cal-span-1 my-auto mx-auto">
        <img
          src="/image/my-pic.jpg"
          alt="creator"
          className="rounded-full w-80 h-80"
        />
      </div>
      <div className="col-span-2 px-5">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I&apos;m a</span>
          <br />
          <TypeAnimation
            sequence={["Frontend dev", 1000, "NextJs dev", 1000]}
            wrapper="span"
            span={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Amit Sutradhar and I am a Web Developer. Currently I am
          pursuing my MCA. I have one year of experiance with my own projects!
        </p>
        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            Download CV
          </a>
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br   from-orange-500 to to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
