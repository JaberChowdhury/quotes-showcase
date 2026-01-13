import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-md-surface">
      <Loader2 className="w-12 h-12 animate-spin text-md-primary" />
    </div>
  );
};

export default Loading;
