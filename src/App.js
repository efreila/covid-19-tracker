import React, { useEffect, useState } from "react";
// import "./styles.css";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaGraphic from "./images/graphic.png";

function App() {
  const [data, setData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setSelectedCountry(country);
  };

  return (
    <div className={styles.container}>
      <img src={coronaGraphic} alt="Covid19" className={styles.image}/>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={selectedCountry}/>
    </div>
  );
}

export default App;
