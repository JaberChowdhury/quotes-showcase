import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { block } from "million/react";
import { Maximize2, Minimize2 } from "lucide-react";
import cn from "@/lib/utils";

const Item = block(({ quote, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Material Design 3 Typography styles
  const displayId = String(index + 1).padStart(2, "0");

  return (
    <section
      id={index + 1}
      className="w-full min-h-[85vh] snap-center flex flex-col justify-center items-center px-6 py-12 relative"
    >
      {/* Material Card Container */}
      <div
        className={cn(
          "relative w-full max-w-4xl p-8 md:p-12 transition-all duration-500",
          "bg-md-surface-variant/30 backdrop-blur-sm border border-md-surface-variant/50",
          "rounded-4xl flex flex-col gap-8",
          isOpen ? "shadow-2xl shadow-md-primary/10" : "shadow-lg",
        )}
      >
        {/* Header: ID and Controls */}
        <div className="flex justify-between items-start w-full">
          <a
            href={`#${index + 2}`}
            className="text-6xl md:text-8xl font-black text-md-surface-variant/40 hover:text-md-primary transition-colors cursor-pointer select-none"
          >
            {displayId}
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-4 rounded-full bg-md-tertiary-container text-md-tertiary hover:brightness-110 active:scale-95 transition-all"
            aria-label={isOpen ? "Close image" : "View image"}
          >
            {isOpen ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
          </button>
        </div>

        {/* Quote Text */}
        <div className="z-10">
          <motion.h1
            initial={{ opacity: 0.8 }}
            whileInView={{
              backgroundImage: "linear-gradient(90deg, #D0BCFF, #EFB8C8)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              opacity: 1,
            }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold leading-tight tracking-tight"
          >
            “{quote.text}”
          </motion.h1>
        </div>

        {/* Expandable Image Area */}
        <motion.div
          layout
          className="w-full relative overflow-hidden rounded-3xl"
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="w-full"
              >
                <img
                  src={quote.url}
                  alt="Motivational visual"
                  className="w-full h-auto object-cover rounded-3xl glow-material border-2 border-md-primary/20"
                  loading="lazy"
                />

                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-md-surface/60 to-transparent pointer-events-none rounded-3xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Decorative elements */}
        {!isOpen && (
          <div className="w-full flex justify-end">
            <span className="text-sm font-bold tracking-widest uppercase text-md-tertiary opacity-60">
              Tap Icon to Expand
            </span>
          </div>
        )}
      </div>
    </section>
  );
});

export default Item;
