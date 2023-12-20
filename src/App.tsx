import Root from "./Root";
import axios from "axios";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import Footer from "@/components/Footer";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      axios
        .get(
          "https://raw.githubusercontent.com/JaberChowdhury/Image-source/main/Quotes/source.json",
        )
        .then((res) => {
          setQuotes(res.data.source);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(true);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col relative bg-gradient-to-t from-gray-700 via-gray-900 to-gray-700">
      {isLoading ? (
        <Loader2 className="size-20 animate-spin text-slate-100" />
      ) : (
        <>
          <Root quotes={quotes} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
