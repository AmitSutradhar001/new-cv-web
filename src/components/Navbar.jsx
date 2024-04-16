import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="bg-black h-[100px] text-gray-400 max-w-full p-12 mx-auto flex justify-between items-center">
        <h1 className="text-3xl primary-color">AS</h1>
        <div className="flex items-center justify-end">
          <ul className="hidden md:flex gap-5">
            <li className="p-4 rounded-lg border border-gray-400 hover:bg-gradient-to-br   from-orange-500 to to-pink-500 text-white hover:border-none">
              <a href="#about">About</a>
            </li>
            <li className="p-4 rounded-lg border border-gray-400 hover:bg-gradient-to-br   from-orange-500 to to-pink-500 text-white hover:border-none">
              <a href="#work">Work</a>
            </li>
            <li className="p-4 rounded-lg border border-gray-400 hover:bg-gradient-to-br   from-orange-500 to to-pink-500 text-white hover:border-none">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <ul className="p-8 text-2xl">
            <li className="p-2">
              <a href="#about">About</a>
            </li>
            <li className="p-2">
              <a href="#work">Work</a>
            </li>

            <li className="p-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
