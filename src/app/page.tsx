"use client"
import { useEffect, useState } from "react";
import FirstSection from "./components/Home/FirstSection";
import SecondSection from "./components/Home/SecondSection";
import ThirdSection from "./components/Home/ThirdSection";
import FourthSection from "./components/Home/FourthSection";
import { apiRequest } from "./components/utils/api";
// import VideoSection from "./components/Home/VideoSection";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const formattedData = await apiRequest(
          "/api/pages",
          "GET",
          null,
          { locale: "en", "pagination[limit]": 100 }
        );
        setData(formattedData); // Set formatted data
      } catch (err:any) {
        setError(err);
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);

  if (error) return <div>Error loading data: {error}</div>;
  return (
    <div className="headerWrapper">
      <FirstSection  data={data} />
      {/* <VideoSection /> */}
      {/* <SecondSection /> */}
      <ThirdSection data={data} />
      <FourthSection  data={data}/>
    </div>
  );
}
