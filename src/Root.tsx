import Item from "@/components/Item";
import React from "react";

type quoteType = {
  id: string;
  text: string;
  url: string;
};

type propsType = {
  quotes: quoteType[];
};

const Root = ({ quotes }: propsType) => {
  return (
    <div className="w-full overflow-y-scroll min-h-screen flex justify-center items-center flex-col relative">
      {quotes?.map((quote: quoteType, id) => {
        return (
          <React.Fragment key={id}>
            <Item quote={quote} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Root;
