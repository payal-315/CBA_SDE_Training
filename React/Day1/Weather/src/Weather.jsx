import { useState, useEffect } from "react";

function Weather() {
  const [city, setCity] = useState("Bangalore");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError("");

    const weatherData = {
      Bangalore: {
        temp: 28,
        humidity: 65,
        wind: 15,
        condition: "Cloudy",
      },
      Delhi: {
        temp: 35,
        humidity: 45,
        wind: 10,
        condition: "Sunny",
      },
      Mumbai: {
        temp: 30,
        humidity: 80,
        wind: 20,
        condition: "Rainy",
      },
      Chennai: {
        temp: 33,
        humidity: 70,
        wind: 18,
        condition: "Hot",
      },
      Hyderabad: {
        temp: 31,
        humidity: 55,
        wind: 14,
        condition: "Sunny",
      },
    };

    setTimeout(() => {
      if (weatherData[city]) {
        setWeather(weatherData[city]);
        setHistory((prev) =>
          prev.includes(city) ? prev : [...prev, city]
        );
      } else {
        setWeather({});
        setError("City not found");
      }

      setLoading(false);
    }, 1000);
  }, [city]);

  return (
    <div
      style={{
        width: "500px",
        margin: "20px auto",
        padding: "20px",
        background: darkMode ? "#222" : "#f4f4f4",
        color: darkMode ? "white" : "black",
      }}
    >
      <h1>Weather Dashboard</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <br />
      <br />

      {loading && <h3>Loading...</h3>}

      {error && <h3 style={{ color: "red" }}>{error}</h3>}

      {!loading && !error && weather.temp && (
        <table border="1" cellPadding="10" width="100%">
          <tbody>
            <tr>
              <th>City</th>
              <td>{city}</td>
            </tr>

            <tr>
              <th>Temperature</th>
              <td>{weather.temp} °C</td>
            </tr>

            <tr>
              <th>Humidity</th>
              <td>{weather.humidity}%</td>
            </tr>

            <tr>
              <th>Wind Speed</th>
              <td>{weather.wind} km/h</td>
            </tr>

            <tr>
              <th>Condition</th>
              <td>{weather.condition}</td>
            </tr>
          </tbody>
        </table>
      )}

      <br />

      <h3>Recent Searches</h3>

      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Weather;