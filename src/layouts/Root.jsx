import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const newsContext = createContext({});

const Root = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <newsContext.Provider value={newsData}>
        <Outlet></Outlet>
      </newsContext.Provider>
    </div>
  );
};

export default Root;
