import Fullscreen from "@/components/Fullscreen";
import { Tag, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { block } from "million";

type quoteType = {
  quote: {
    id: string;
    text: string;
    url: string;
  };
  id: number;
};

const Item = block(({ quote, id }: quoteType) => {
  const [open, isOpen] = useState(false);

  return (
    <Fullscreen id={id}>
      <div className="mt-4 w-full text-6xl text-slate-100">
        <a href={`#${id + 1}`} className="text-4xl text-teal-400 typography">
          {id}
        </a>
      </div>
      <div className="w-full overflow-hidden">
        <motion.span
          initial={{
            backgroundSize: "0% 3px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            textDecoration: "none",
          }}
          whileInView={{
            backgroundSize: "100% 3px",
          }}
          className="tracking-[2.5px] rounded leading-normal bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
        >
          {quote.text}
        </motion.span>
      </div>
      <div className="w-full mb-20 flex justify-center flex-col items-center rounded p-2 relative">
        <img
          style={{
            width: open ? "100%" : "0%",
            opacity: open ? 1 : 0,
          }}
          className="glow rounded relative"
          src={quote.url}
          alt="image"
        />
        <div className="w-full flex justify-between items-center my-2 relative">
          <div></div>
          {open ? (
            <X
              onClick={() => {
                isOpen(false);
              }}
              className="text-slate-100"
            />
          ) : (
            <Tag
              onClick={() => {
                isOpen(true);
              }}
              className="text-slate-100"
            />
          )}
        </div>
      </div>
    </Fullscreen>
  );
});

export default Item;
