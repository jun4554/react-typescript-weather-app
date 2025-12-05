import { useState } from "react";
import Form from "./components/Form";
import Loading from "./components/Loading";
import Results from "./components/Results";
import Title from "./components/Title";

type ResultsState = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

const initialResults = {
  country: "",
  cityName: "",
  temperature: "",
  conditionText: "",
  icon: "",
};

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsState>(initialResults);

  const getWeather = (e: any) => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=e39d33bca3ee43c699293531243012&q=${city}&aqi=no`,
    )
      .then((res) => res.json())
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
        setCity("");
        setLoading(false);
      })
      .catch(() => {
        alert("都市名が見つかりません");
        setResults(initialResults);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} city={city} />
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
};

export default App;
