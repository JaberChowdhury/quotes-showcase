// import Item from "@/components/Item";
import React, { lazy, Suspense } from "react";
const Item = lazy(() => import("@/components/Item"));
const Footer = lazy(() => import("@/components/Footer"));
import Loading from "@/components/Loading";
import Indicator from "@/components/Indicator";

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
    <>
      <div className="w-full max-h-screen overflow-y-scroll snap snap-y snap-mandatory flex items-center flex-col relative">
        <Indicator />
        {quotes?.map((quote: quoteType, id) => {
          return (
            <React.Fragment key={id}>
              <Suspense fallback={<Loading />}>
                <Item id={id} quote={quote} />
              </Suspense>
            </React.Fragment>
          );
        })}
      </div>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Root;
