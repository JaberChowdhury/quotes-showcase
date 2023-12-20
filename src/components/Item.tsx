import Fullscreen from "@/components/Fullscreen";
import { Tag, X } from "lucide-react";
import { useState } from "react";

type quoteType = {
  quote: {
    id: string;
    text: string;
    url: string;
  };
};

const Item = ({ quote }: quoteType) => {
  const [open, isOpen] = useState(false);

  return (
    <Fullscreen className="relative">
      <div></div>
      <div>
        <div className="first-letter:uppercase">{quote.text}</div>
      </div>
      <div className="w-full mb-10 flex justify-center flex-col items-center rounded p-2 relative">
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
};

export default Item;
