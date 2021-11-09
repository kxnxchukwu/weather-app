import React, { useEffect, useState } from "react";
import './App.css';
import ErrorPage from "./components/ErrorPage";
import LoadingPage from "./components/LoadingPage";
import TodayCard from './components/TodayCard';

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true)
  const city = "Dublin";

    useEffect(() => {
      fetch(`${REACT_APP_API_URL}/weather/?q=${city}&units=metric&APPID=${REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
    }
      ).catch(error => setError(error.message)) 
    }, [])

    if (loading) return <LoadingPage/>
    if (error) return <ErrorPage message = {error} />

  return (
     <TodayCard data = {data} />
  );
}

export default App;

