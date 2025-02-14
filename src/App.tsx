import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  //fetch the data from NASA_API when page loads
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      /* load it only once every day*/
      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      const item = localStorage.getItem(localKey);
      /*if localkey already exists - just get the data from it*/
      if (item) {
        const apiData = item ? JSON.parse(item) : null; // Safely handle null
        setData(apiData);
        console.log("Fetched from local storage,", apiData);
        return;
      }

      /* if localkey already didn't exist */

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        console.log("DATA\n", apiData);
        setData(apiData);
        console.log("Fetched from API today");
      } catch (error) {
        console.log("error message:, ", error);
      }
    }

    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
