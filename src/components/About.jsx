const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12 " id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-start py-6 md:py-0">
          <div className="my-auto mx-6 ">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Hey there! I&apos;m Amit, a web developer proficient in HTML, CSS,
              Tailwind CSS, JavaScript, React, Next.js, TypeScript, and MongoDB.
              Despite being a fresher, I&apos;ve already completed several
              projects, showcasing my creativity and commitment to excellence.
              Let&apos;s team up and turn your digital dreams into reality!
            </p>
          </div>
        </div>
        <img
          src="/image/about.jpg"
          className="mx-auto rounded-2xl  py-8 md:py-0"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
