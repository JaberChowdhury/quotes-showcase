import { Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="w-full p-16 py-20 gap-y-20 flex flex-col z-30 justify-center items-center relative  bg-gradient-to-t from-gray-700 via-gray-900 to-black">
      <div className="text-slate-100 font-bold text-3xl">Find me in github</div>
      <a
        href="https://github.com/JaberChowdhury"
        className="bg-slate-900 text-slate-100 p-2 tracking-normal rounded rounded flex gap-x-2 glow"
      >
        <Github />
        Github
      </a>
    </div>
  );
};

export default Footer;
