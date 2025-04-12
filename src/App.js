import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CountryDetails from "./components/CountryDetails";
import CountrySelector from "./components/CountrySelector";

import './styles/styles.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const regionOptions = [
    "All",
    "Africa",
    "Antarctica",
    "Asia",
    "Europe",
    "North America",
    "Oceania",
    "South America"
  ];

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "All" || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <Router>
      {/* 🌌 Video Background */}
      <video autoPlay loop muted className="video-bg">
        <source
          src="https://cdn.coverr.co/videos/coverr-milky-way-time-lapse-4386/1080p.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay to make content readable */}
      <div className="overlay"></div>

      <div className="container">
        <Header />

        <CountrySelector
          countries={filteredCountries}
          searchTerm={searchTerm}
          onSearch={setSearchTerm}
          selectedRegion={selectedRegion}
          onFilter={setSelectedRegion}
          onSelectCountry={setSelectedCountry}
          regionOptions={regionOptions}
        />

        <Routes>
          <Route
            path="/"
            element={
              selectedCountry ? (
                <CountryDetails
                  country={selectedCountry}
                  countries={countries}
                  onSelectCountry={setSelectedCountry}
                />
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem', fontSize: '1.2rem' }}>
                  Please select a country to view details.
                </div>
              )
            }
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
