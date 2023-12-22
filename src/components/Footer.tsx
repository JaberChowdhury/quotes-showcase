import { Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="min-h-screen relative">
      <div className="mt-[70%]">
        <div className="text-slate-100 font-bold text-3xl">
          Find me in github
        </div>
        <a
          href="https://github.com/JaberChowdhury"
          className="bg-slate-900 mt-10 flex justify-center items-center text-slate-100 p-2 tracking-normal rounded flex gap-x-2 glow"
        >
          <Github />
          Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
