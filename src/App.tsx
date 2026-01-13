import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import Indicator from "@/components/Indicator";
import Item from "@/components/Item";
import Footer from "@/components/Footer";

type QUOTE = {
  id: string;
  url: string;
  text: string;
};

const App = () => {
  const [quotes, setQuotes] = useState<QUOTE[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://raw.githubusercontent.com/JaberChowdhury/Image-source/main/Quotes/source.json",
        );
        // data.source seems to be the array based on your original code
        setQuotes(res.data.source || []);
      } catch (error) {
        console.error("Failed to fetch quotes:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen bg-md-surface text-md-on-surface selection:bg-md-primary selection:text-md-primary-container">
      <Indicator />

      {isLoading ? (
        <Loading />
      ) : (
        <main className="w-full flex flex-col items-center">
          {quotes.map((quote, index) => (
            <Item key={quote.id || index} quote={quote} index={index} />
          ))}
          <Footer />
        </main>
      )}
    </div>
  );
};

export default App;
