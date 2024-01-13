import Root from "./Root";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Indicator from "@/components/Indicator";


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
      <Indicator />
      {isLoading ? <Loading /> : <Root quotes={quotes} />}
    </div>
  );
};

export default App;
