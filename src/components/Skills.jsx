const Skills = () => {
  return (
    <div className="bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center border-2 border-white rounded-md ">
      <h2 className="text-gray-700 p-5 text-2xl md:text-4xl font-bold m-4">
        My <br /> Tech <br /> Stack
      </h2>
      <div className="flex text-center p-3 flex-col items- m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src="/image/html.png" alt="html" />
        <p className="mt-2">HTML</p>
      </div>
      <div className="flex text-center p-3 flex-col items- m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src="/image/css.png" alt="css" />
        <p className="mt-2">CSS</p>
      </div>
      <div className="flex text-center p-3 flex-col items- m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src="/image/tailwind.png" alt="tailwind" />
        <p className="mt-2">Tailwind</p>
      </div>
      <div className="flex text-center p-3 flex-col items- m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src="/image/javascript.png"
          alt="javascript"
          className="rounded-xl"
        />
        <p className="mt-2">JavaScript</p>
      </div>
      <div className="flex text-center p-3 flex-col items- m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img
          src="/image/typescript.png"
          alt="typescript"
          className="rounded-xl"
        />
        <p className="mt-2">TypeScript</p>
      </div>
      <div className="flex text-center p-3 flex-col items- m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src="/image/react.png" alt="react" />
        <p className="mt-2">ReactJs</p>
      </div>
      <div className="flex text-center p-3 flex-col items- m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src="/image/next.jpeg" alt="nextjs" className="rounded-xl" />
        <p className="mt-2">NextJs</p>
      </div>
      <div className="flex p-3 flex-col items- m-4 sm:my-0 w-[80px] md:w-[100px] text-center">
        <img src="/image/mongodb.png" alt="mongodb" />
        <p className="mt-2">MongoDB</p>
      </div>
    </div>
  );
};

export default Skills;
