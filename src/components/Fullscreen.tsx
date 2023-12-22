import React from "react";
import cn from "@/lib/utils";

type propsType = {
  children: React.ReactNode;
  className?: string;
  id?: number;
};

const Fullscreen = ({ children, className, id = 1000 }: propsType) => {
  return (
    <div
      id={id.toString()}
      className={cn(
        className,
        `w-full bg snap-start min-h-screen px-4 flex justify-between items-center flex-col text-slate-100 text-4xl bg-gradient-to-t from-gray-700 via-gray-900 to-gray-700`,
      )}
    >
      {children}
    </div>
  );
};

export default Fullscreen;
