import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full min-h-[50vh] flex flex-col justify-center items-center gap-6 pb-20">
      <h2 className="text-md-on-surface font-bold text-3xl md:text-4xl text-center">
        Explore the Code
      </h2>

      <a
        href="https://github.com/JaberChowdhury"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-8 py-4 bg-md-primary-container text-md-primary rounded-full font-bold text-lg hover:bg-md-primary hover:text-md-primary-container transition-all duration-300 hover:scale-105 shadow-lg shadow-md-primary/20"
      >
        <Github className="group-hover:rotate-12 transition-transform duration-300" />
        <span>JaberChowdhury</span>
      </a>

      <p className="mt-12 text-md-on-surface-variant opacity-50 text-sm">
        Designed with Material You
      </p>
    </footer>
  );
};

export default Footer;
