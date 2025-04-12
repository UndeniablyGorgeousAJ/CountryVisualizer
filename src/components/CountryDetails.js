import React from "react";
import Flag from "./Flag";
import Borders from "./Borders";

function CountryDetails({ country, countries, onSelectCountry }) {
  if (!country) return <p>Loading country data...</p>;

  const {
    name, capital, region, subregion, population, area,
    latlng, borders, timezones, currencies, languages, flags
  } = country;

  return (
    <div className="details-card">
      <h2>{name.common}</h2>
      <Flag url={flags.png} alt={name.common} />

      <ul>
        <li><strong>Capital:</strong> {capital?.[0]}</li>
        <li><strong>Region:</strong> {region}</li>
        <li><strong>Subregion:</strong> {subregion}</li>
        <li><strong>Population:</strong> {population.toLocaleString()}</li>
        <li><strong>Area:</strong> {area.toLocaleString()} km²</li>
        <li><strong>Coordinates:</strong> {latlng.join(", ")}</li>
        <li><strong>Timezones:</strong> {timezones.join(", ")}</li>
        <li><strong>Currency:</strong> {currencies ? Object.values(currencies)[0].name : "N/A"}</li>
        <li><strong>Languages:</strong> {languages ? Object.values(languages).join(", ") : "N/A"}</li>
        <li><strong>Borders:</strong> <Borders codes={borders} countries={countries} onSelect={onSelectCountry} /></li>
      </ul>
    </div>
  );
}

export default CountryDetails;
