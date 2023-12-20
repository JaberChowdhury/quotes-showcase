import React from "react";
import cn from "@/lib/utils";

type propsType = {
  children: React.ReactNode;
  className?: string;
};

const Fullscreen = ({ children, className }: propsType) => {
  return (
    <div
      className={cn(
        className,
        `w-full min-h-screen px-4 flex justify-between items-center flex-col text-slate-100 text-4xl bg-gradient-to-t from-gray-700 via-gray-900 to-gray-700`,
      )}
    >
      {children}
    </div>
  );
};

export default Fullscreen;
