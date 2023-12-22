import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center z-30">
      <Loader2 className="size-20 animate-spin text-slate-100" />
    </div>
  );
};

export default Loading;
